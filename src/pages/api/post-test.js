import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
    const { db } = await connectToDatabase();

    const item = JSON.parse(req.query.userInput);

    const { result } = await db.collection('bookings').insertOne(item);

    console.log('result: ', result);

    res.json(result);
}
