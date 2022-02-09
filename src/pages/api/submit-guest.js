import { getSession } from 'next-auth/react';

import { validateIncomingValues } from '@/lib/validateIncomingValues';
import connectToDatabase from '@/lib/mongodb';
import aws from 'aws-sdk';
import { checkResponse } from '@/lib/ses';

const ses = new aws.SES({
    accessKeyId: process.env.AWS_S3_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET,
    region: 'eu-central-1',
});

export default async (req, res) => {
    console.log('ROUTE HIT');
    const session = await getSession({ req });

    if (!session) return res.status(401);
    console.log('SESSION is valid');

    const error = validateIncomingValues(req.body);

    if (error) return res.json({ error });
    console.log('NO ERRORS in the incoming body');

    const { db } = await connectToDatabase();
    console.log('DB is connected');

    const { acknowledged } = await db.collection('rsvps').insertOne(req.body);
    console.log('DATA WAS insert into the DB');

    await ses
        .sendEmail({
            Source: `Wedding Invitation Response <${process.env.ADMIN_EMAIL}>`,
            Destination: {
                ToAddresses: [process.env.ADMIN_EMAIL],
            },
            Message: {
                Body: {
                    Text: {
                        Data: checkResponse(req.body),
                    },
                },
                Subject: {
                    Data: `Wedding response from ${req.body.fullName}`,
                },
            },
        })
        .promise()
        .then(() => console.log('Email sent'))
        .catch((err) => console.log(err))
    console.log('EMAIL was sent');

    return res.json({ success: acknowledged ? 'true' : 'false' });
};
