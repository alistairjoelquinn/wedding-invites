import { useSession } from "next-auth/client"


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