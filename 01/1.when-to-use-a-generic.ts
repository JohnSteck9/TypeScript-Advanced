// WHEN should I use a Generic?

interface Animal {
    name: string;
}

interface Human {
    firstName: string;
    lastName: string;
}

type AnimalOrHuman<T extends Human | Animal> = T extends Human ? {humanName: string} : {animalName: string};

const getDisplayName = <TItem extends Human | Animal>(item: TItem): AnimalOrHuman<TItem> => {
    if('name' in item) {
        return {
            animalName: item.name
        } as AnimalOrHuman<TItem>
    }
     return {
         humanName: `${item.firstName} ${item.lastName}`
    } as AnimalOrHuman<TItem>
}

const result = getDisplayName({
    name: 'Patch'
});

const result2 = getDisplayName({
    firstName: 'Matt',
    lastName: 'Pocock',
});

