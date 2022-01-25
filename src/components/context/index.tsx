import { createContext, useContext, useReducer } from 'react';
import { Action, InitialState } from './models';
import { initialState, reducer } from './reducer';

const StateContext = createContext<InitialState>({} as InitialState);
const DispatchContext = createContext<React.Dispatch<Action>>(null!);

export const State = () => useContext(StateContext);
export const Dispatch = () => useContext(DispatchContext);

export const StateProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
        </StateContext.Provider>
    );
};
