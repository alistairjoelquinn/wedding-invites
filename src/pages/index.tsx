import { Card, Paper, Typography } from '@material-ui/core';
import Head from 'next/head';

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

export default Home;
