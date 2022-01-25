export interface RSVP {
    fullName: string;
    email: string;
    attending: 'yes' | 'no' | 'maybe';
    partner: boolean;
    partnerName?: string;
    children: boolean;
    numberOfChildren: number;
}

export interface Action {
    type: string;
    payload?: any;
}
