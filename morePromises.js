// Async Await
const yt = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Getting YouTube data....");
    resolve({ videos: [1, 2, 3, 4, 5] });
  }, 2000);
});

const fb = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Getting Facebook data....");
    resolve({ user: "Paul" });
  }, 5000);
});

Promise.all([yt, fb]).then((result) => console.log(result));
