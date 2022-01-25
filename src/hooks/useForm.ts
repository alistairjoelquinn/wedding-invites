import { RSVP } from '@/components/context/models';
import { useState } from 'react';

export default function useForm() {
    const [values, setValues] = useState<RSVP>({
        fullName: '',
        email: '',
        attending: 'maybe',
        partner: false,
        partnerName: '',
        children: false,
        numberOfChildren: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    return [values, handleChange];
}
