import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useLayoutEffect } from 'react';
import type { NextPage } from 'next';

import SignIn from '@/components/SignIn';
import spin from '@/styles/spin.module.css';

const SignInPage: NextPage = () => {
    const router = useRouter();
    const { data: session, status } = useSession();

    useLayoutEffect(() => {
        console.log('session, status: ', session, status);
        if (session) {
            router.replace('/');
        }
    }, [session, router, status]);

    return (
        <>
            <>{status === 'loading' && <div className={spin.spin} />}</>
            <>{session === null && <SignIn />}</>
        </>
    );
};

export default SignInPage;
