import Head from 'next/head';

import { connectToDatabase } from '../../lib/mongodb';
import json from '../../lib/json';
import SignIn from '@/components/SignIn';

interface Property {
    _id: string;
    name: string;
    summary: string;
}

const Home = (props: any) => {
    console.log('props: ', props);
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

export async function getServerSideProps() {
    const { db } = await connectToDatabase();
    const data = await db.collection('listingsAndReviews').find().limit(20).toArray();

    return {
        props: { results: json(data).map((item: Property) => ({
            name: item.name,
            summary: item.summary,
        })) },
    };
}

export default Home;
