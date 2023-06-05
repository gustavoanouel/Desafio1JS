function calcular() {
  var price, y, calculo, text;
  price = 15000;
  y = document.querySelector("#cantidad").value;
  if (y <= 0) {
    text = "Es necesario introducir un número entero";
    document.querySelector("#cantText").style.display = "none";
    document.querySelector("#total").innerHTML = text;
    document.querySelector("#total").style.color = "red";
  } else {
    calculo = parseFloat(price) * parseFloat(y);
    text = calculo;
    document.querySelector("#cantText").style.display = "block";
    document.querySelector("#total").innerHTML = "$" + text;
    document.querySelector("#total").style.color = "black";
    document.querySelector("#cantText").innerHTML = y + " Candados";
  }
}

function colorChange() {
  var colorSelected, colorBox;
  colorSelected = document.querySelector("#color").value;
  colorBox = document.querySelector("#color-box");
  if (colorSelected === "red") {
    document.querySelector("img").src = "assets/img/candado2.jpg";
    colorBox.style.color = "red";
  } else if (colorSelected === "blue") {
    document.querySelector("img").src = "assets/img/candado1.jpg";
    colorBox.style.color = "blue";
  } else if (colorSelected === "black") {
    document.querySelector("img").src = "assets/img/candado0.jpg";
    colorBox.style.color = "black";
  }
}
