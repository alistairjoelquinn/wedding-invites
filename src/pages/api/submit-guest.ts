import { getSession } from 'next-auth/react';
import aws from 'aws-sdk';
import type { NextApiRequest, NextApiResponse } from 'next';

import { validateIncomingValues } from '@/lib/validateIncomingValues';
import connectToDatabase from '@/lib/mongodb';
import { checkResponse } from '@/lib/ses';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (!session) return res.status(401);

    const error = validateIncomingValues(req.body);

    if (error) return res.json({ error });

    const { db } = await connectToDatabase();

    const { acknowledged } = await db.collection('rsvps').insertOne(req.body);

    try {
        let error;
        await new aws.SES({
            accessKeyId: process.env.AWS_S3_KEY,
            secretAccessKey: process.env.AWS_S3_SECRET,
            region: 'eu-central-1',
        })
            .sendEmail({
                Source: `Wedding Invitation Response <${process.env.ADMIN_EMAIL}>`,
                Destination: {
                    ToAddresses: [process.env.ADMIN_EMAIL as string],
                },
                Message: {
                    Body: {
                        Text: {
                            Data: checkResponse(req.body) as string,
                        },
                    },
                    Subject: {
                        Data: `Wedding response from ${req.body.fullName}`,
                    },
                },
            })
            .promise()
            .catch((err) => {
                console.log('err sending email', err.message);
                error = err.message;
            });
        if (error) {
            return res.json({ success: 'false', error });
        }
        return res.json({ success: acknowledged ? 'true' : 'false' });
    } catch (err) {
        return console.log('ERROR sending email TO CLIENT: ', err);
    }
};
