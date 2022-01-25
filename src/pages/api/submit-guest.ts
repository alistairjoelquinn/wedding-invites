import type { NextApiRequest, NextApiResponse } from 'next';

import { connectToDatabase } from '../../../lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('req.body: ', req.body);

    const { db } = await connectToDatabase();

    res.json({
        thanks: 'you did it',
    });
};
