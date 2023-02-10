// DEEP PARTIAL
export {};

type DeepPartial<Thing> = Thing extends Function
    ? Thing
    : Thing extends Array<infer InferredArrayMember>
    ? DeepPartialArray<InferredArrayMember>
    : Thing extends object
    ? DeepPartialObject<Thing>
    : Thing | undefined;

interface DeepPartialArray<Thing> extends Array<DeepPartial<Thing>> {}

type DeepPartialObject<Thing> = {
    [Key in keyof Thing]?: DeepPartial<Thing[Key]>;
};

interface Post {
    id: string;
    comments: { value: string }[];
    meta: {
        name: string;
        description: string;
    };
}

const post: DeepPartial<Post> = {
    id: "1",
    meta: {
        description: "123",
    },
};

const post2: Partial<Post> = {
    id: "1",
    // @ts-expect-error
    meta: {
        description: "123",
    },
};
