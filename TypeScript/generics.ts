const stringEcho = (arg: string): string => arg; //met arrow functies zonder de {} kun je een impliciete return gebruiken

const echo = <T>(arg: T): T => arg;
const strResult = echo('Hello');
const numResult = echo(42);
const objResult = echo({name: 'Koen', quote: "Je gebruikt SQL vekeerd bitch"});
const explicitResult = echo<boolean>(true);


const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null )
}

interface boolCheck <T> {
    value: T,
    is: boolean
}

const isTrue = <T>(arg: T): {arg: T, is: boolean} => {
    if (Array.isArray(arg) && !arg.length) {
        return {arg, is: false} //short hand syntax voor arg: arg als de key arg is , hoef je niet arg: arg te doen (object shorthand syntax)
    }

    if (isObj(arg) && Object.keys(arg as object).length === 0) {
        return {arg, is: false}
    }
    return {arg, is: !!arg} //dubelle not - operator, handig om undefined te vertellen naaar false, undefined is false, door !! wordth het true daarna false ivp undefined
}


const isTrue2 = <T>(arg: T): boolCheck <T> => {
    if (Array.isArray(arg) && !arg.length) {
        return {value: arg, is: false};
    }

    if (isObj(arg) && Object.keys(arg as object).length === 0) {
        return {value: arg, is: false}
    }
    return {value: arg, is: !!arg} //dubelle not - operator, handig om undefined te vertellen naaar false, undefined is false, door !! wordth het true daarna false ivp undefined
}

interface HasID {
    id: number
}

const processUser = <T extends HasID>(user: T): T => {
    return user
}

console.log(processUser({name: 'Alko', id:666}));

const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
]

console.log(getUsersProperty(usersArray,"email")); //returns the two emails of the two users as a array


/** ************* */

class StateObject<T> {
    private data: T

    constructor(value: T) {
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }

}

const store = new StateObject("John");
console.log(store.state);
store.state = "Dave" // no problem here
/**
 * !store.state = 12 doenst work cuz jophn is a string and tsc implied that object wil be strings
 * todo: give a union type so that type script being told that the object can be string or number
 * */
const newstore = new StateObject<string | number> ('John');
newstore.state = 69;
