"use strict";
var HumanEnum;
(function (HumanEnum) {
    HumanEnum["M"] = "MALE";
    HumanEnum["F"] = "FEMALE";
})(HumanEnum || (HumanEnum = {}));
const person = {
    gender: HumanEnum.M
};
console.log(person.gender);
const person1 = "shoaib";
console.log(person1);
let age = 23;
