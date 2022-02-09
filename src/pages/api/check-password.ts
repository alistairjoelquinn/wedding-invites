import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (!session) return res.status(401);

    if (req.body.password === process.env.ADMIN_PASSWORD) {
        return res.json({ admin: true });
    }
    return res.json({ admin: false });
};
