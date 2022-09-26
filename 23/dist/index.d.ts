declare type Person = {
    firstName: string;
};
declare const details: {
    lastName: string;
    firstName: string;
};
declare function getElement<O extends object, K extends keyof O>(obj: O, key: K): O[K];
