// Master ASSERTION FUNCTIONS
export {};

class SDC {
    www: boolean | undefined;

    constructor(public loggedInUserId?: string) {}

    createPost(title: string) {
        this.assertUserIsLoggedIn();

        createPost(this.loggedInUserId, title);
        this.wow = true;
    }

    assertUserIsLoggedIn(): asserts this is this & {
        loggedInUserId: string;
        wow: boolean;
    } {
        if (!this.loggedInUserId) {
            throw new Error("User is not logged in");
        }
    }
}

function createPost(userId: string, title: string) {
    return {} as any;
}

const sdc = new SDC("123");
sdc.createPost("gg");
console.log(sdc.www)
