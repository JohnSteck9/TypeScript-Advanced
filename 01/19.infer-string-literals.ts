// Fix ANNOYING OBJECT KEYS with infer and template literals
export {};

interface ApiData {
    "maps:longitude": string;
    "maps:latitude": string;
}

type RemoveMaps<T> = T extends `maps:${infer U}` ? U : T;

type RemoveMapsFromObj<T> = {
    [K in keyof T as RemoveMaps<K>]: T[K];
};

type DesiredShape = RemoveMapsFromObj<ApiData>;
