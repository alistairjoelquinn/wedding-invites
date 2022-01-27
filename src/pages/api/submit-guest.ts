import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import { validateIncomingValues } from '@/lib/validateIncomingValues';
import connectToDatabase from '@/lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('RECEIVED', req.body);
    const session = await getSession({ req });

    console.log('session: ', session);

    if (!session) return res.status(401);

    const error = validateIncomingValues(req.body);

    console.log('error: ', error);

    if (error) return res.json({ error });

    const { db } = await connectToDatabase();

    console.log('db: ', db);

    const { acknowledged } = await db.collection('rsvps').insertOne(req.body);

    return res.json({ success: acknowledged ? 'true' : 'false' });
};
