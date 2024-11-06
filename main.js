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
  document.querySelector("span[data-time=hours]").innerHTML =
    localTime.getHours();
  document.querySelector("span[data-time=minutes]").innerHTML =
    localTime.getMinutes();
  document.querySelector("span[data-time=seconds]").innerHTML =
    localTime.getSeconds();
}, 1000);
