addEventListener("input", Colour);

function Colour() {
  var InputColor = document.getElementById("color").value;
  var DisplayColor = document.getElementById("Display");
  var DisplayColourText = document.getElementById("currentValue");

  DisplayColourText.textContent = `${InputColor}`;
  DisplayColor.style.background = `${InputColor}`;
}
