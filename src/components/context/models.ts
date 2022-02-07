export interface RSVP {
    fullName: string;
    email: string;
    attending: 'yes' | 'no' | 'maybe';
    partner: boolean;
    partnerName?: string;
    children: boolean;
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
