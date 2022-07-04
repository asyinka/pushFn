let class1 = ["John", "Joe", "James", "Jones"];
let class2 = ["Ruben", "Roy", "Rildwan", "Rose"];
 class2[2] = "Richard"

class2.push(...class1);

// for (const name of class1) {
//     console.log(name)
// }

for (let index = 0; index < class1.length; index++) {
    console.log(class1[index])
}

