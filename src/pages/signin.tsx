import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useLayoutEffect } from 'react';

import SignIn from '@/components/SignIn';
import spin from '@/styles/spin.module.css';

const SignInPage = () => {
    const router = useRouter();
    const { data: session, status } = useSession();

    useLayoutEffect(() => {
        console.log('session, status: ', session, status);
        if (session) {
            router.replace('/');
        }
    }, [session, router, status]);

    return (
        <div>
            <>{status === 'loading' && <div className={spin.spin} />}</>
            <>{session === null && <SignIn />}</>
        </div>
    );
};

export default SignInPage;
