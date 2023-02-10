// CUSTOM ERRORS
export {};

type CheckForBadArgs<Arg> = Arg extends any[] ? "You cannot compare two arrays using deepEqualCompare" : Arg;

const deepEqualCompare = <Arg>(a: CheckForBadArgs<Arg>, b: CheckForBadArgs<Arg>): boolean => {
    if (Array.isArray(a) || Array.isArray(b)) {
        throw new Error("You cannot compare two arrays using deepEqualCompare");
    }

    return a === b;
};

deepEqualCompare(1, 1);
// @ts-expect-error
deepEqualCompare([], ["a"]);
