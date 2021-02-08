console.log("Start....");

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data obtained...");
      resolve({ userEmail: email, password: password });
      reject(new Error("A big fail here - loginUser"));
    }, 3500);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["The Fog", "Star Wars", "Jaws", "Withnail and I"]);
      reject(new Error("A big fail here - getUserVideos"));
    }, 2000);
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Title of video: ");
      reject(new Error("A big fail here - videoDetails"));
    }, 2000);
  });
}

loginUser("paul@paul.com", "hello")
  .then((user) => getUserVideos(user.email))
  .then((videos) => videoDetails(videos[0]))
  .then((detail) => console.log(detail));

// Sync
const user = loginUser("Paul", "paulpass");
const videos = videoDetails(user.email);

// Async await

console.log("....End.");
