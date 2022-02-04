import { useState } from 'react';

export default function useForm() {
    const [values, setValues] = useState({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    return [values, handleChange];
}
