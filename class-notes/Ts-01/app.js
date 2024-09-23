console.log("cohort de09");
var b = 5;
var c = 2;
// b= "5" //Type 'string' is not assignable to type 'number'.
var e = "Hello";
var f = "World";
var g;
var h;
var x, y, z; //tek satirda birden fazla degiskene type belirtemiyoruz. Bastakileri any olarak kabul ediyor.
x = "Merhaba";
y = 5;
z = "oldu";
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
function warnUser() {
    console.log("Warning");
}
function warnUser2() {
    console.log("Warning");
    return "warn";
} //Error void in return u olmaz
// ? never type
function throwError() {
    throw new Error("error");
}
// ? Union Type 
var id = "a";
id = 5;
id = false; // Ts error : type boolean is not assignable to type string | number
var myId = 5;
myId = "5";
var model = "1996";
model = 1996;
var car1 = "BMW";
car1 = "Honda";
car1 = 17;
//? function
function sayHello(name) {
    return "Hello ".concat(name);
}
console.log(sayHello("Ayse"));
function add(a, b) {
    return a + b;
}
//* overloading icin en son asil fonk yazarken parametrelere any vermemiz gerekiyor. öncesinde yazilis typle re gore deger alir
console.log(add(3, 5));
console.log(add("3", "5"));
console.log(add("3", 5));
console.log(add(3, "5")); //error
