import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
    providers: [
        Providers.Credentials({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                console.log('credentials: ', credentials);
                if(!credentials || !credentials.username || !credentials.password) {
                    console.log('NULL');
                    return null;
                } else if (
                    credentials.username === process.env.NEXT_AUTH_USERNAME &&
                    credentials.password === process.env.NEXT_AUTH_PASSWORD
                ) {
                    console.log('TRUE');
                    return {
                        accepted: true,
                    };
                }
                console.log('OTHER NULL');
                return null;
            },
        }),
    ],
    pages: {
        signIn: '/',
    },
    debug: true,
    secret: process.env.NEXT_AUTH_SECRET,
});
