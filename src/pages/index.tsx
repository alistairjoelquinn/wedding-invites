import Head from 'next/head';

import SignIn from '@/components/SignIn';

const Home = () => {
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
