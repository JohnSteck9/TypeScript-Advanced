// Master FUNCTION OVERLOADS with 'compose'
export {};

function compose<Input, FirstArg>(func: (input: Input) => FirstArg): (input: Input) => FirstArg;

function compose<Input, FirstArg, SecondArg>(
    func: (input: Input) => FirstArg,
    func2: (input: FirstArg) => SecondArg
): (input: Input) => SecondArg;

function compose<Input, FirstArg, SecondArg, ThirdArg>(
    func: (input: Input) => FirstArg,
    func2: (input: FirstArg) => SecondArg,
    func3: (input: SecondArg) => ThirdArg
): (input: Input) => ThirdArg;

function compose(...args: any[]) {
    return {} as any;
}

const addOne = (num: number) => {
    return num + 1;
};

const numToString = (num: number) => {
    return num.toString();
};

const stringToNUm = (str: string) => {
    return parseInt(str);
};

const addOneToString = compose(addOne, numToString);
