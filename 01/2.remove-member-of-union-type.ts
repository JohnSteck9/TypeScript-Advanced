// REMOVE a member of a Union Type
export {};

type Letters = "a" | "b" | "c";

type RemoveC<TType> = TType extends "c" ? never : TType;

type WowWothoutC = RemoveC<Letters>;
