import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import type { NextPage } from 'next';

import GuestForm from '@/components/GuestForm';
import spin from '@/styles/spin.module.css';

const Form: NextPage = () => {
    const router = useRouter();
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.replace('/signin');
        },
    });

    return <div>{session ? <GuestForm /> : <div className={spin.spin} />}</div>;
};

export default Form;
