var btn = document.querySelector(".search-hotel-btn");
var popup = document.querySelector(".modal-hotels");
var form = popup.querySelector(".search-hotel-form");
var arrivalDate = popup.querySelector("[name = arrival-date]");
var departureDate = popup.querySelector("[name = departure-date]");

btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !dapertireDate.value) {
    evt.preventDefault();
    console.log("Нужно ввести даты заезда и выезда");
  }
});