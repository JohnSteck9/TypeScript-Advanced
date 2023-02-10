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

// type StringFromType<T> = T extends string ? 'string' : never

// type lorem = StringFromType<'lorem ipsum'> // 'string'
// type ten = StringFromType<10> // never

type StringFromType<T> = T extends string ? "gg" : T extends boolean ? "boolean" : T extends Error ? "error" : never;

type lorem = StringFromType<"lorem ipsum">; // 'string'
type isActive = StringFromType<false>; // 'boolean'
type unassignable = StringFromType<TypeError>; // 'error'

let ss: isActive = "boolean";
