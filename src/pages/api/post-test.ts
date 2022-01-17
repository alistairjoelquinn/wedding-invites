import type { NextApiRequest, NextApiResponse } from 'next'

import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { db } = await connectToDatabase();

    const item = JSON.parse(req.query.userInput as string);

    const { result } = await db.collection('bookings').insertOne(item);

    console.log('result: ', result);

    res.json(result);
}
