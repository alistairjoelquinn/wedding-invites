import type { NextApiRequest, NextApiResponse } from 'next';

import connectToDatabase from '@/lib/mongodb';

export default async (_: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase();

    const data = await db.collection('rsvps').find().toArray();

    console.log('data: ', data);

    res.json(data);
};
