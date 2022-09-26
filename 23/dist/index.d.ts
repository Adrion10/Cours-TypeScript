declare type Person = {
    firstName: string;
};
declare function getPerson<T extends Person>(data: T): T;
declare const details: {
    lastName: string;
    firstName: string;
};
