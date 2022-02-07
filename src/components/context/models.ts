export interface RSVP {
    fullName: string;
    email: string;
    attending: 'yes' | 'no' | 'maybe';
    partner: 'true' | 'false';
    partnerName?: string;
    children: 'true' | 'false';
    numberOfChildren: number;
    diet: string;
}

export interface Guest extends RSVP {
    _id: string;
}

export interface Action {
    type: string;
    payload?: any;
}
