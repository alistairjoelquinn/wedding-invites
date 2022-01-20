import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import GuestForm from '@/components/GuestForm';

export default function Form() {
    const router = useRouter();
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.replace('/signin');
        },
    });

    console.log('session in form page: ', session);

    return (
        <div>
            <GuestForm />
        </div>
    );
}
