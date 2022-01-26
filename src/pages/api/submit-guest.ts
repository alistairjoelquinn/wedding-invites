import type { NextApiRequest, NextApiResponse } from 'next';

import { connectToDatabase } from '../../../lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase();

    const { acknowledged } = await db.collection('rsvps').insertOne(req.body);

    res.json({ success: acknowledged ? 'true' : 'false' });
};
