const p = Promise.resolve("hello");

p.then((val) => {
  console.log(val);
  return `${val} world`;
}).then((newVal) => {
  console.log(newVal);
});
