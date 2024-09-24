console.log("De09 session2");

//? Objects

const person: {
  username: string;
  age: number;
  city: string;
  isActive: boolean;
  address: "s"; //error
} = {
  username: "John",
  age: 30,
  city: "New York",
  isActive: true,
};

const person2: {
  username: string;
  age: number;
  city: string;
  isActive: boolean;
} = {
  username: "John",
  age: 30,
  city: "New York",
  isActive: true,
};

type Person = {
  username: string;
  age: number;
  city: string;
  isActive: boolean;
};

const person3: Person = {
  username: "Mustafa",
  age: 35,
  city: "Berlin",
  isActive: true,
};

//* Interface

interface ICar {
  model: string;
  year: Date;
  price: number;
  color: string;
  getName: () => string;
}

const redCar: ICar = {
  model: "Toyota",
  year: new Date(),
  price: 20000,
  color: "black",
  getName: () => {
    return "x5";
  },
};

interface IUser {
  username: string;
  firstName: string;
  age: number;
  getName: () => void;
}

const user1: IUser = {
  username: "Ayse",
  firstName: "Ayse",
  age: 25,
  getName: () => {
    console.log("5");
  },
};

interface IAdminUser {
  username: string;
  firstName: string;
  age: number;
  getName: () => void;
  isAdmin: boolean;
  password: string;
}

interface IManagerUser {
  username: string;
  firstName: string;
  age: number;
  getName: () => void;
  isManager: boolean;
  department: string;
}

interface IAdminUSer2 extends IUser {
  isAdmin: boolean;
  password: string;
}

const adminUser: IAdminUSer2 = {
  username: "admin",
  firstName: "admin",
  age: 19,
  isAdmin: true,
  password: "1234",
  getName() {
    console.log("admin");
  },
};

console.log(adminUser);

// const users = [] //any

const users: IUser[] = [];

// users.push(5);//ts error
// users.push("5"); //ts error
users.push({
  username: "as",
  firstName: "as",
  age: 14,
  getName() {
    "as";
  },
});


//! Type Inference

let myName = "Anthony"

myName = 5 //ts error type belirtmesekde ilk dgeri string old icin type string olarak alir

let arr = [] //any[]

let myArr = [
    {
        username:"asd",
        department: "aadd",
        salary: 3000
    }
]


// myArr.push(5) //ts error
// myArr.push({name:"afsd"}) //ts error

myArr.push({
    username:"btreh",
    department: "tg4t",
    salary: 500
})

const myArr2 = [...myArr,...users] // myArr | users iki type i de birlestirmis oldu

// myArr2.push(5) //ts error


//? Generics

interface Auth {
    id:number,
    username:string,

}

interface Category {
    id:number,
    title:string
}

interface Post {
    id:number,
    title:string,
    content:string,
    createdAt: Date,
    extra: Auth [] | Category[]
}


interface PostBetter<T>{
    id:number,
    title:string,
    content:string,
    createdAt: Date,
    extra: T[]
}

const testGeneric : PostBetter<string> = {
    id:1,
    title:"test",
    content:"test",
    createdAt:new Date(),
    extra:["test","test","generic"]
}

const testGeneric2 : PostBetter<number> = {
    id:1,
    title:"test",
    content:"test",
    createdAt:new Date(),
    extra:[5,65]
}

const testGeneric3 : PostBetter<{id:number,title:string}> = {
    id:1,
    title:"test",
    content:"test",
    createdAt:new Date(),
    extra:[{id:4,title:"rhhrz"}]
}
const testGeneric4 : PostBetter<Category> = {
    id:1,
    title:"test",
    content:"test",
    createdAt:new Date(),
    extra:[{id:4,title:"rhhrz"}]
}
const testGeneric5 : PostBetter<Auth> = {
    id:1,
    title:"test",
    content:"test",
    createdAt:new Date(),
    extra:[{id:4,username:"rhhrz"}]
}






