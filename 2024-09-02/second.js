//ylesanne 11
const array = [1, 2, 3, 4, 5, 6];

const filteredArray = array.filter((element) => element > 3);

console.log({ filteredArray });

const filteredArray2 = array.filter((element) => {
  console.log(element > 3);

  return element > 3;
});

console.log({ filteredArray });
console.log({ filteredArray: filteredArray });
console.log(filteredArray);

//ylesanne 12
const names = ["Anni", "Mari", "Mati", "Juku"];

const objectifiedNames = names.map((name) => {
  return {
    name: name,
    age: name.length + 20,
    email: `${name}@gmail.com`,
    address: `${name} Street 55`,
    username: name.split("").reverse().join(""),
  };
});
console.log({ objectifiedNames });

//ylesanne 13
let kaspar = {
  name: "Kaspar",
  school: "TLÜ",
};

kaspar = { ...kaspar, height: 193 };

console.log({ kaspar });

//ylesanne 15
console.log(1 == "1");
console.log(1 === "1");

//async/await Promise

/*async function Name(){

}*/

//Promise on js object, kus on 3 state = pending, resolved, rejected

const MyPromise = () => {
  return new Promise((resolve) => setTimeout(() => resolve("done"), 1000));
};

const runPromise = async () => {
  console.log(await MyPromise());
};

runPromise();

setTimeout(() => console.log("timeout"), 2000);
