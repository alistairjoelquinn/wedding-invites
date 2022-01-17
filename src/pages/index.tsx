import { Card, Paper, Typography } from '@material-ui/core';
import Head from 'next/head';
import {connectToDatabase} from '../../lib/mongodb';

interface Property {
    _id: string;
    name: string;
    summary: string;
}

const Home = () => (
    <Paper>
        <Head>
            <title>Alistair Quinn Next Typescript Template</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Card>
            <Typography>Nextjs / Typescript template body</Typography>
        </Card>
    </Paper>
);

export async function getServerSideProps() {
    const { db } = await connectToDatabase();
    const data = await db.collection('listingsAndReviews').find().limit(20).toArray();

    const properties = JSON.parse(JSON.stringify(data));

    const results = properties.map((item: Property) => ({
        name: item.name,
        summary: item.summary,
    }));

    return {
        props: { results },
    };
}

export default Home;
