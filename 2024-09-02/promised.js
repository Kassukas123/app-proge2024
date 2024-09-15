const MyPromise = () => {
  return new Promise((resolve) => setTimeout(() => resolve("done"), 1000));
};

const runPromise = async () => {
  console.log(await MyPromise());
};

runPromise();

setTimeout(() => console.log("timeout"), 5000);
