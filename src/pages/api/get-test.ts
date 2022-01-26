import type { NextApiRequest, NextApiResponse } from 'next';

import { connectToDatabase } from '../../../lib/mongodb';

export default async (_: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase();

    const data = await db.collection('listingsAndReviews').find().limit(20).toArray();

    res.json(data);
};
