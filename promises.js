// Promises code example
console.log("Start....");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Got user");
    resolve({ user: "Paul" });
    reject(new Error("This has failed"));
  }, 2000);
});

promise
  .then((user) => {
    console.log(user);
  })
  .catch((err) => console.log(err));

console.log("....End.");
