// REMOVE a member of a Union Type 

type Letters = 'a' | 'b' | 'c';

type RemoveC<TType> = TType extends 'c' ? never : TType;

type WowWothoutC = RemoveC<Letters>;
