import { useSession } from "next-auth/client"
import { GetServerSideProps } from 'next';
import { providers, getSession, csrfToken } from 'next-auth/client';

import GuestForm from '@/components/GuestForm';

export default function Form() {
  const [session] = useSession()

  console.log('session in form.tsx: ', session);

    return (
        <div>
            <GuestForm />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { req, res } = context;
    const session = await getSession({ req });

    if (res && session?.accessToken) {
        res.writeHead(302, {
            Location: '/',
        }).end();
    }

    return {
        props: {
            session: null,
            providers: await providers(),
            csrfToken: await csrfToken(context),
        },
    };
};