import { Action, RSVP } from './models';

export const initialState: RSVP = {
    fullName: '',
    email: '',
    attending: 'maybe',
    partner: false,
    partnerName: '',
    children: false,
    numberOfChildren: 0,
    diet: '',
};

export const reducer = (state = initialState, action: Action) => {
    if (action.type === 'RSVP_SUBMITTED') {
        return action.payload.rsvp;
    }
    if (action.type === 'UPDATE_USER_VALUES') {
        return {
            ...state,
            ...action.payload,
        };
    }
    return state;
};
