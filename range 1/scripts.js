var input_range = document.querySelector(".input_range");
input_range.addEventListener("input", () => {
  var value = input_range.value;
  var number = document.querySelector(".number");
  var line = document.querySelector(".line");

  number.innerHTML = value;
  line.style.width = value + '%';
});
