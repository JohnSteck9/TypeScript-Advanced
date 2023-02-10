// Master Generic Slots
export {};

const makeKeyMemover =
    <Key extends string>(keys: Key[]) =>
    <Obj>(obj: Obj): Omit<Obj, Key> => {
        return {} as any;
    };

const keyRemover = makeKeyMemover(["a", "b"]);

const newObject = keyRemover({ a: 1, b: 2, c: 3 });

newObject.c = 5;
