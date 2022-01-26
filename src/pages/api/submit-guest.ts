import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import { connectToDatabase } from '../../../lib/mongodb';
import validateIncomingValues from '../../../lib/validateIncomingValues';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (!session) return res.status(401);

    const error = validateIncomingValues();

    if (error) return res.status(400).json({ error });

    const { db } = await connectToDatabase();

    const { acknowledged } = await db.collection('rsvps').insertOne(req.body);

    return res.json({ success: acknowledged ? 'true' : 'false' });
};
