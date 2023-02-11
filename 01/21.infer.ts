// Infer is easier than you think
export {};

type Result2 = boolean extends true ? 1 : 0;

////////////////////////////////

function describePerson(person: {
    name: string;
    age: number;
    hobbies: [string, string]; // tuple
}) {
    return `${person.name} is ${person.age} years old and love ${person.hobbies.join(" and  ")}.`;
}

const alex: GetFirstArgumentOfAnyFunction<typeof describePerson> = {
    name: "Alex",
    age: 20,
    hobbies: ["walking", "cooking"], // type string[] != [string, string]
};

describePerson(alex); /* Type string[] is not assignable to type [string, string] */

////////////////////////////////

type StringFromType<T> = T extends string
    ? "string"
    : T extends boolean
        ? "boolean"
        : T extends Error
            ? "error"
            : never;

type lorem = StringFromType<"lorem ipsum">; // 'string'
type isActive = StringFromType<false>; // 'boolean'
type unAssignable = StringFromType<TypeError>; // 'error'

////////////////////////////////

type stringLoop = string extends null | undefined ? never : string; // string

type nullLoop = null extends null | undefined ? never : null; // never

type undefinedLoop = undefined extends null | undefined ? never : undefined; // never

type ReturnUnion = stringLoop | nullLoop | undefinedLoop; // string

////////////////////////////////

type Extract<T, U> = T extends U ? T : never
type Exclude<T, U> = T extends U ? never : T

////////////////////////////////

type a = ReturnType<() => void> // void
type b = ReturnType<() => string | number> // string | number
type c = ReturnType<() => any> // any

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// Function’s first argument:

type GetFirstArgumentOfAnyFunction<T> = T extends (
        first: infer FirstArgument,
        ...args: any[]
    ) => any
    ? FirstArgument
    : never

type t1 = GetFirstArgumentOfAnyFunction<(name: string, age: number) => void> // string

// Function’s second argument:

type GetSecondArgumentOfAnyFunction<T> = T extends (
        first: any,
        second: infer SecondArgument,
        ...args: any[]
    ) => any
    ? SecondArgument
    : never

type t2 = GetSecondArgumentOfAnyFunction<(name: string, age: number) => void> // number

// Promise return type
type PromiseReturnType<T> = T extends Promise<infer Return> ? Return : T

type t3 = PromiseReturnType<Promise<string>> // string

// Array type
type ArrayType<T> = T extends (infer Item)[] ? Item : T

type t5 = ArrayType<[string, number]> // string | number

////////////////////////////////
