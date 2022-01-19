import Head from 'next/head';
import { useSession } from "next-auth/react"

import SignIn from '@/components/SignIn';


const Home = () => {
    const { data: session } = useSession()

    console.log('session: ', session);
    return (
        <main>
            <Head>
                <title>Wedding Invitations</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SignIn />
        </main>
    );
};

export default Home;
