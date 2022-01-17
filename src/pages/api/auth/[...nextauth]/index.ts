import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    providers: [
        Providers.Email({
            server: process.env.SMTP_SERVER,
            from: process.env.EMAIL_FROM,
        }),
    ],
    debug: true,
};

export default (req, res) => NextAuth(req, res, options);
