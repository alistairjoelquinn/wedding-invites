import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: 'username' },
                password: { label: 'Password', type: 'password', placeholder: 'password' },
            },
            async authorize(credentials) {
                console.log('credentials: ', credentials);
                if (!credentials || !credentials.username || !credentials.password) {
                    console.log('NULL');
                    return {
                        accepted: false,
                    };
                }
                if (
                    credentials.username === process.env.NEXT_AUTH_USERNAME &&
                    credentials.password === process.env.NEXT_AUTH_PASSWORD
                ) {
                    console.log('TRUE');
                    return {
                        accepted: true,
                    };
                }
                console.log('OTHER NULL');
                return {
                    accepted: false,
                };
            },
        }),
    ],
    pages: {
        signIn: '/',
    },
    secret: process.env.NEXT_AUTH_SECRET,
});
