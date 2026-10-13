let dogDiv = document.querySelector(".dog-div");
let dogBtn = document.querySelector(".dog-btn");

let url = "https://dog.ceo/api/breeds/image/random";

dogBtn.addEventListener("click", async () => {
  let dogImgs = await getDogs();
  let dogPic = (dogDiv.innerHTML = `<img src="${dogImgs}" alt="dogPic">`);
});

async function getDogs() {
  let res = await fetch(url);
  let data = await res.json();
  return data.message;
}
