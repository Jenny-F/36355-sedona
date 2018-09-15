var btn = document.querySelector(".search-hotel-btn");
var popup = document.querySelector(".modal-hotels");
var form = popup.querySelector(".search-hotel-form");
var arrivalDate = popup.querySelector("[name = arrival-date]");
var departureDate = popup.querySelector("[name = departure-date]");

popup.classList.remove("modal-show");

btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !dapertireDate.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  }
});