import { Paper } from '@mui/material';
import Head from 'next/head';
import { connectToDatabase } from '../../lib/mongodb';
import json from '../../lib/json';
import GuestForm from '@/components/GuestForm';

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

            <GuestForm />
        </main>
    );
};

export async function getServerSideProps() {
    const { db } = await connectToDatabase();
    const data = await db.collection('listingsAndReviews').find().limit(20).toArray();

    const properties = json(data);

    const results = properties.map((item: Property) => ({
        name: item.name,
        summary: item.summary,
    }));

    return {
        props: { results },
    };
}

export default Home;
