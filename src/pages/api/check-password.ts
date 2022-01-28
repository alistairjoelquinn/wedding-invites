import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.body.password === process.env.ADMIN_PASSWORD) {
        console.log('true');
        return res.json({ admin: true });
    }
    console.log('false');
    return res.json({ admin: false });
};
