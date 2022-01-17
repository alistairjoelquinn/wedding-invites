import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';

export default NextAuth({
    providers: [
        EmailProvider({
            server: process.env.SMTP_SERVER,
            from: process.env.EMAIL_FROM,
        }),
    ],
    debug: true,
});
