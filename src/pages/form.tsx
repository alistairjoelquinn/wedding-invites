import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import GuestForm from '@/components/GuestForm';
import spin from '@/styles/spin.module.css';

export default function Form() {
    const router = useRouter();
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.replace('/signin');
        },
    });

    console.log('session in form page: ', session);

    return <div>{session ? <GuestForm /> : <div className={spin.spin} />}</div>;
}
