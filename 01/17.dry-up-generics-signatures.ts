// DRY up your generic signatures with DEFAULT GENERICS
export {};

type Obj = {
    a: "a";
    a2: "a2";
    a3: "a3";
    b: "b";
    b2: "b2";
    b3: "b3";
};

type ValuesOfKeysStartingWithA<Obj, _ExtractedKeys extends keyof Obj = Extract<keyof Obj, `a${string}`>> = {
    [K in _ExtractedKeys]: Obj[K];
}[_ExtractedKeys];

type NewUnion = ValuesOfKeysStartingWithA<Obj>;
