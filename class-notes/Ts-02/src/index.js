"use strict";
console.log("De09 session2");
const person = {
    username: "John",
    age: 30,
    city: "New York",
    isActive: true,
};
const person2 = {
    username: "John",
    age: 30,
    city: "New York",
    isActive: true,
};
const person3 = {
    username: "Mustafa",
    age: 35,
    city: "Berlin",
    isActive: true,
};
const redCar = {
    model: "Toyota",
    year: new Date(),
    price: 20000,
    color: "black",
    getName: () => {
        return "x5";
    },
};
const user1 = {
    username: "Ayse",
    firstName: "Ayse",
    age: 25,
    getName: () => {
        console.log("5");
    },
};
const adminUser = {
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
const users = [];
users.push({
    username: "as",
    firstName: "as",
    age: 14,
    getName() {
        "as";
    },
});
let myName = "Anthony";
myName = 5;
let arr = [];
let myArr = [
    {
        username: "asd",
        department: "aadd",
        salary: 3000
    }
];
myArr.push({
    username: "btreh",
    department: "tg4t",
    salary: 500
});
const myArr2 = [...myArr, ...users];
const testGeneric = {
    id: 1,
    title: "test",
    content: "test",
    createdAt: new Date(),
    extra: ["test", "test", "generic"]
};
const testGeneric2 = {
    id: 1,
    title: "test",
    content: "test",
    createdAt: new Date(),
    extra: [5, 65]
};
const testGeneric3 = {
    id: 1,
    title: "test",
    content: "test",
    createdAt: new Date(),
    extra: [{ id: 4, title: "rhhrz" }]
};
const testGeneric4 = {
    id: 1,
    title: "test",
    content: "test",
    createdAt: new Date(),
    extra: [{ id: 4, title: "rhhrz" }]
};
const testGeneric5 = {
    id: 1,
    title: "test",
    content: "test",
    createdAt: new Date(),
    extra: [{ id: 4, username: "rhhrz" }]
};
