var btn = document.querySelector(".search-hotel-btn");
var popup = document.querySelector(".modal-hotels");

btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
})