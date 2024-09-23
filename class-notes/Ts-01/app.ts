console.log("cohort de09");

let b=5;
let c=2;

// b= "5" //Type 'string' is not assignable to type 'number'.

let e:string = "Hello"
let f = "World"

let g: boolean;
let h;

let x,y,z : string; //tek satirda birden fazla degiskene type belirtemiyoruz. Bastakileri any olarak kabul ediyor.

x="Merhaba"
y=5
z="oldu"
// z=4 //error 

//* Arrays

// let nums : number[] = [1,2,"Hi"]  //Type 'string' is not assignable to type 'number'.

// nums.push("merhaba")
// nums.push(5)
// nums.push(false)

// console.log(nums);

// nums.forEach(item=> item.toLowerCase())


// let usernames : string[] = ["Kemal", "Mustafa"]

// usernames.push("Ayse")
// usernames.push(6)  //Argument of type 'number' is not assignable to parameter of type 'string'.

// let surnames : string[] = [];
// surnames.push("Harold")

// //type declaration 2.yol

// let nums2 : Array<number> = [5,2]
// console.log(surnames);


//* Tuples

// let myTuple: [number,string,boolean]=[5,"merhaba", false]

// console.log(myTuple);

// let myTuple2: [number,string,boolean];
// myTuple2 = [2,"World"] //error eksk eleman mevcut

// console.log(myTuple2);

//* Tuples of Array

// let myTuple3 : [number,string][];
// myTuple3 = [[5,"5"],[6,"6"]]

// myTuple3.push([7,"7"])
// myTuple3.push(false) //ts error 

// console.log(myTuple3);


//? Enum

// const enum Role {
//     User,
//     Admin,
//     Tester
// }

// let currentUser: Role = Role.Admin

// console.log(currentUser);


// const enum Role {
//     User, //User = 0 
//     Admin, // Admin = 1
//     DbAdmin = Admin*3,
//     Tester, //Tester = 4
// }

// let currentUser: Role = Role.DbAdmin

// currentUser = Role.Tester

// console.log(currentUser);

// enum StatusCodes {
//     NotFound = 404,
//     Created = 201,
//     Accepted = 202,
//     BadRequest = 500,
//     NoContent = 204,
//     Success = 200
// }

// const response : StatusCodes = StatusCodes.Success

// enum Sizes {
//     Small = "S",
//     Medium = "M",
//     Large = "L",
//     XLarge = 100,
//     XXLarge 
// }

// Sizes.Small
// Sizes["Small"]
// Sizes[101] //XXLarge


// ? any
 
//  let a : any = 10

//  a = "Hello"

// let k : boolean = a

// ? unknown 

// let j : unknown = 5;

// j = "5"

// let m : string = j // unknown &  any farki

// let n : string = j as string //type assertions

// ? void type

function warnUser () :void{
    console.log("Warning");
}
function warnUser2 () :void{
    console.log("Warning");

    return "warn"
} //Error void in return u olmaz


// ? never type

function throwError(): never {
    throw new Error ("error")
}


// ? Union Type 

let id : string | number = "a"

id = 5
id = false // Ts error : type boolean is not assignable to type string | number


//? Type Aliases

type Id = number | string

let myId : Id = 5
myId = "5"

let model : Id = "1996"

model =1996

//? String Literals

type Car = "BMW" | "Mercedes" | "Audi"

let car1 : Car = "BMW"

car1 = "Honda"
car1 = 17
 


//? function

function sayHello(name:string): string {
    return `Hello ${name}`
}


console.log(sayHello("Ayse"));

//* function overloading 

function add(a:string,b:string) :string;
function add(a:number,b:number) :number;
function add(a:string,b:number) :number;
function add(a:any,b:any){
    return a + b
}

//*overloading için en son asıl fonksiyonu yazarken parametrelere any vermemiz gerekiyor. parametrelere any versek de çalışırken overloading olan fonksiyonlardaki parametrelerin typeına göre kabul ediyor.
console.log(add(3,5));
console.log(add("3","5"));
console.log(add("3",5));
console.log(add(3,"5")); //error


