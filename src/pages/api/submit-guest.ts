import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import { validateIncomingValues } from '@/lib/validateIncomingValues';
import connectToDatabase from '@/lib/mongodb';
import { sendEmail } from '@/lib/ses';

export default async (req: NextApiRequest, res: NextApiResponse) => {
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

    await sendEmail(req.body);
    console.log('EMAIL was sent');

    return res.json({ success: acknowledged ? 'true' : 'false' });
};
