// interface Person<T, U> {
//   fullName: T;
//   age: U;
// }

// const person1: Person <string, number> = {
//     fullName: "shoaib",
//     age: 23
// }

// const person2: Person<{ first: string; last: string }, string> = {
//   fullName: { first: "John", last: "Doe" },
//   age: "25"
// };


// function processWithFilter<T extends { filter: Function }>(arg: T): T {
//   arg.filter((item: any) => true); 
//   return arg;
// }


// const numbers = [1, 2, 3, 4];
// const result = processWithFilter(numbers);

// console.log(result);


// enum Diraction {
//     up,
//     down,
//     left,
//     right,
// }

// console.log(Diraction.up)
// console.log(Diraction.down)

enum HumanEnum{
   M = "MALE",
   F = "FEMALE",

}

interface Human {
    gender : HumanEnum;
}

const person: Human = {
  gender: HumanEnum.M
};

console.log(person.gender); // Output: "MALE"

const person1: string = "shoaib"
console.log(person1)
const person2: string = "shoaib"
console.log(person1)