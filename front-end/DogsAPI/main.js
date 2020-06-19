document.addEventListener("DOMContentLoaded", async () => {
  const dogs = document.querySelector(".dogs");
  for (let i = 0; i < 50; ++i) {
    const picture = await fetch("https://random.dog/woof.json", {
      method: "GET",
    });
    const pictureJson = await picture.json();
    const pic = document.createElement("img");
    const url = pictureJson.url;
    if (url[url.length - 1] !== "4" && url[url.length - 1] !== "m") {
      pic.setAttribute("class", "dog");
      pic.setAttribute("src", url);
      dogs.appendChild(pic);
    }
  }
});
