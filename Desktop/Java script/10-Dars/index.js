// let user = {
//     id: 1,
//     name: "Eshmat",
//     age: 65,
//     status: "Nafaqa oluvchi",
//     child: {
//         id: 2,
//         name: "Toshmat",
//         age: 30,
//         status: "Talaba",
//     },
// };
// let cloneUser = structuredClone(user);

// cloneUser.child.age = 45;

// console.log("O'zgarmasyosh:", user.child.age);        
// console.log("O'zgarganyosh:", cloneUser.child.age); 

// part 2

let user = {
    id: 1,
    name: "Eshmat",
    age: 65,
    status: "Nafaqa oluvchi",
    child: {
        id: 2,
        name: "Toshmat",
        age: 30,
        status: "Talaba",
        func() {
            return this.age;
        }
    }
};


function deepCopy(obj) {
    let copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            copy[key] = deepCopy(obj[key]);
        } else {
            copy[key] = obj[key];
        }
    }
    return copy;
}


let cloneUser = deepCopy(user);

cloneUser.child.age = 45;

console.log("Asl user:", user.child.age);          
console.log("Clone user:", cloneUser.child.age);    
console.log("Asl user func:", user.child.func());   
console.log("Clone user func:", cloneUser.child.func()); 
