// Improving OBJECT.KEYS
export {};

const myObject = {
    a: 1,
    b: 2,
    c: 3,
};

// No index signature with a parameter of type 'string' was found on type '{ a: number; b: number; c: number; }'.
Object.keys(myObject).forEach((key) => {
    // @ts-expect-error
    console.log(myObject[key]);
});

const objectKeys = <Obj extends object>(obj: Obj): (keyof Obj)[] => {
    return Object.keys(obj) as (keyof Obj)[];
};

objectKeys(myObject).forEach((key) => {
    console.log(myObject[key]);
});
