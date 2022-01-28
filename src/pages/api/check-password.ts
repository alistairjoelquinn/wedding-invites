import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('route hit');
    if (req.body.password === process.env.ADMIN_PASSWORD) {
        return res.json({ admin: true });
    }
    return res.json({ admin: false });
};
