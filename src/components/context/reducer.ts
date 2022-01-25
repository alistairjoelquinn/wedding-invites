import { Action, RSVP } from './models';

export const initialState: RSVP = {
    fullName: '',
    email: '',
    attending: 'maybe',
    partner: false,
    partnerName: '',
    children: false,
    numberOfChildren: 0,
};

export const reducer = (state = initialState, action: Action) => {
    if (action.type === 'RSVP_SUBMITTED') {
        return action.payload.rsvp;
    }
    return state;
};
