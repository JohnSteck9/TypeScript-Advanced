// Infer is easier than you think
export {};

interface User {
    id: string;
}

interface Message {
    id: number;
}

function getId<T extends { id: any }>(obj: T): T extends { id: string } ? string : number {
    return obj.id
}

const r1 = getId({} as User);
const r2 = getId({} as Message);

////////////////////////////////

type NotFalsy<T = null> = T extends (null | undefined | false | 0) ? never : T;

let z: NotFalsy<string>;
z = 'Hello'

////////////////////////////////

type Filter<T, U> = T extends U ? never : T;

type R = Filter<'a' | 'b' | 'c', 'c'>

type R2 = Exclude<'a' | 'b' | 'c', 'c'>

////////////////////////////////

type GetStatus<T> = T extends object ? T extends { status: string } ? T['status'] : null : null;
type GetStatus2<T> = T extends infer U ? U extends { status: any } ? U['status'] : null : null;

type Status1 = GetStatus<{ status: 'STR' }>
type Status2 = GetStatus<{ status: 2 }>
type Status3 = GetStatus<{ status: ['A', 'B'] }>

type Status4 = GetStatus2<{ status: ['A', 'B'] }>

///////////////////////////////

type TryInfer<T extends object = object> = T extends infer R ? R[keyof R] : never;

type I1 = TryInfer<{a: 1, b: 2}>

///////////////////////////////

function test() { return 2; }
function test2() { return { names: ['Max', 'Bob'] }}

type FunctionResult<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

type Res1 = FunctionResult<typeof test>
type Res2 = FunctionResult<typeof test2>
type Res3 = ReturnType<typeof test2>
