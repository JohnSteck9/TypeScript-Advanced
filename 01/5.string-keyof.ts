const myObj: Record<string, string[]> = {};

/**
 * myObj.foo.push('car');
 * Runtime error, but IDE do not provide error message.
 * fix: tsconfig.json => "noUncheckedIndexedAccess": true,
 */

myObj.foo?.push('car');

if (!myObj.smth) {
    myObj.smth = [];
}

myObj.smth.push('bar');