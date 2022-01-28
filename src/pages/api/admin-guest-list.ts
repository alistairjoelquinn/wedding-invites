import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import connectToDatabase from '@/lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (!session) return res.status(401);

    const { db } = await connectToDatabase();

    const data = await db.collection('rsvps').find().toArray();

    return res.json(data);
};
