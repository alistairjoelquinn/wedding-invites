import { useSession } from 'next-auth/react';

import SignIn from '@/components/SignIn';

const SignInPage = () => {
    const { data: session } = useSession();
    console.log('session in SIGNIN: ', session);

    return (
        <div>
            <SignIn />
        </div>
    );
};

export default SignInPage;
