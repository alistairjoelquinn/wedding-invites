import { useSession } from "next-auth/react"

import GuestForm from '@/components/GuestForm';

export default function Form() {
  const { data: session } = useSession()

  console.log('session in form.tsx: ', session);

    return (
        <div>
            <GuestForm />
        </div>
    )
}
