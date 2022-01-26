import { State } from '@/components/context';

const Thanks = () => {
    const state = State();
    console.log('state: ', state);
    return (
        <div>
            <p>{state.attending}</p>
        </div>
    );
};

export default Thanks;
