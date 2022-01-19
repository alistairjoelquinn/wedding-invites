import Head from 'next/head';

import SignIn from '@/components/SignIn';
import { GetServerSideProps } from 'next';
import { getCsrfToken } from 'next-auth/react';

const Home = (props: any) => {
    console.log('props: ', props);
    return (
        <main>
            <Head>
                <title>Wedding Invitations</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SignIn {...props} />
        </main>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    };
};

export default Home;
