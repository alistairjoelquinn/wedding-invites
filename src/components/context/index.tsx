import { createContext, useContext, useReducer } from 'react';
import { Action, RSVP } from './models';
import { initialState, reducer } from './reducer';

const StateContext = createContext<RSVP>({} as RSVP);
const DispatchContext = createContext<React.Dispatch<Action>>(null!);

export const StateProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
        </StateContext.Provider>
    );
};

export const useAppState = () => useContext(StateContext);
export const useAppDispatch = () => useContext(DispatchContext);
