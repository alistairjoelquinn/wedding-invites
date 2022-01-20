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
                    return null;
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
                return null;
            },
        }),
    ],
    pages: {
        signIn: '/signin',
    },
    secret: process.env.NEXT_AUTH_SECRET,
    callbacks: {
        async signIn(signInValues) {
            console.log('signInValues: ', signInValues);
            return true;
        },
        async session({ session, user, token }) {
            console.log('SESSIONISONSOIN');
            return session;
        },
    },
});
