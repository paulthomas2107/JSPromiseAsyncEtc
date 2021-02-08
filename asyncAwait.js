// Async Await
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

// Sync
const user = loginUser("Paul", "paulpass");
const videos = videoDetails(user.email);

// Async await
async function displayUser() {
  try {
    const login = await loginUser("paul@paul.net", "tadpole");
    const videos = await getUserVideos(login.email);
    const detail = await videoDetails(videos[0]);
    console.log(detail);
  } catch (err) {
    console.log("Error - ", err);
  }
}

displayUser();

console.log("....End.");
