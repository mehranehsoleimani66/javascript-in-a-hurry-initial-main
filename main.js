//Menu Section

document.querySelector("#open-nav-menu").addEventListener("click", function () {
  document.querySelector("header nav .wrapper").classList.add("nav-open");
});
document
  .querySelector("#close-nav-menu")
  .addEventListener("click", function () {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
  });
// Greeting Section

function selsucToFahr(temperature) {
  let fahr = (temperature * 9) / 5 + 32;
  return fahr;
}

const greetingText = "Morning";
const weatherCondition = "sunny";
const userLocation = "New York";
let temperature = 22.78;

//alert("the temperaturre is " + selsucToFahr(temperature) + " F.");
let fahrText = `the weather is ${weatherCondition} in  ${userLocation} and it's ${temperature.toFixed(
  1
)} outside .`;

let selsiusText = `the weather is ${weatherCondition} in  ${userLocation} and it's ${selsucToFahr(
  temperature
).toFixed(1)} outside .`;

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("#weather").innerHTML = fahrText;

document
  .querySelector(".weather-group")
  .addEventListener("click", function (e) {
    console.log(e.target.id);
    if (e.target.id === "fahr") {
      document.querySelector("#weather").innerHTML = fahrText;
    } else if (e.target.id === "celsius") {
      document.querySelector("#weather").innerHTML = selsiusText;
    }
  });

setInterval(function () {
  let localTime = new Date();
  document.querySelector("span[data-time=hours]").innerHTML = localTime
    .getHours()
    .toString()
    .padStart(2, "0");
  document.querySelector("span[data-time=minutes]").innerHTML = localTime
    .getMinutes()
    .toString()
    .padStart(2, "0");
  document.querySelector("span[data-time=seconds]").innerHTML = localTime
    .getSeconds()
    .toString()
    .padStart(2, "0");
}, 1000);

{
  /* <img
            src="./assets/gallery/image1.jpg"
            alt="Thumbnail Image 1"
            data-array-index="0"
            data-selected="true"
          />
          <img
            src="./assets/gallery/image2.jpg"
            alt="Thumbnail Image 2"
            data-array-index="1"
            data-selected="false"
          />
          <img
            src="./assets/gallery/image3.jpg"
            alt="Thumbnail Image 3"
            data-array-index="2"
            data-selected="false"
          /> */
}
const galleryImages = [
  { src: "./assets/gallery/image1.jpg", alt: "Thumbnail Image 1" },
  { src: "./assets/gallery/image2.jpg", alt: "Thumbnail Image 2" },
  { src: "./assets/gallery/image3.jpg", alt: "Thumbnail Image 3" },
];
let imgGallery = document.querySelector("#gallery > img");
let thumbnailsImage = document.querySelector("#gallery .thumbnails");
console.log(imgGallery);
imgGallery.src = galleryImages[0].src;
imgGallery.alt = galleryImages[0].alt;

galleryImages.forEach(function (item, index) {
  let thumb = document.createElement("img");
  thumb.src = item.src;
  thumb.alt = item.alt;
  thumb.dataset.arrayIndex = index;
  thumb.dataset.selected = false;
  thumbnailsImage.appendChild(thumb);
});
