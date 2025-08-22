let inputField = document.getElementById("input");
let currentinput = "";
inputField.value = "0";

let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let btn4 = document.getElementById("4");
let btn5 = document.getElementById("5");
let btn6 = document.getElementById("6");
let btn7 = document.getElementById("7");
let btn8 = document.getElementById("8");
let btn9 = document.getElementById("9");
let btn0 = document.getElementById("0");
let btnDot = document.getElementById("dot");
let btnPlus = document.getElementById("+");
let btnMinus = document.getElementById("-");
let btnMultiply = document.getElementById("*");
let btnDivision = document.getElementById("/");
let btnEvaluate = document.getElementById("=");
let btnClear = document.getElementById("ac");
let btnPlusMinus = document.getElementById("plus-minus");
let btnPercent = document.getElementById("%");

function evaluation() {
  try {
    currentinput = eval(currentinput);
    inputField.value = currentinput;
  } catch {
    inputField.value = "Error";
    currentinput = "";
  }
}
btnEvaluate.addEventListener("click", () => evaluation());

btn1.addEventListener("click", () => {
  currentinput += "1";
  inputField.value = currentinput;
});

btn2.addEventListener("click", () => {
  currentinput += "2";
  inputField.value = currentinput;
});
btn3.addEventListener("click", () => {
  currentinput += "3";
  inputField.value = currentinput;
});
btn4.addEventListener("click", () => {
  currentinput += "4";
  inputField.value = currentinput;
});
btn5.addEventListener("click", () => {
  currentinput += "5";
  inputField.value = currentinput;
});
btn6.addEventListener("click", () => {
  currentinput += "6";
  inputField.value = currentinput;
});
btn7.addEventListener("click", () => {
  currentinput += "7";
  inputField.value = currentinput;
});
btn8.addEventListener("click", () => {
  currentinput += "8";
  inputField.value = currentinput;
});
btn9.addEventListener("click", () => {
  currentinput += "9";
  inputField.value = currentinput;
});
btn0.addEventListener("click", () => {
  currentinput += "0";
  inputField.value = currentinput;
});
btnDot.addEventListener("click", () => {
  currentinput += ".";
  inputField.value = currentinput;
});
btnPlus.addEventListener("click", () => {
  currentinput += "+";
  inputField.value = currentinput;
});
btnMinus.addEventListener("click", () => {
  currentinput += "-";
  inputField.value = currentinput;
});
btnMultiply.addEventListener("click", () => {
  currentinput += "*";
  inputField.value = currentinput;
});
btnDivision.addEventListener("click", () => {
  currentinput += "/";
  inputField.value = currentinput;
});

btnClear.addEventListener("click", () => {
  currentinput = "";
  inputField.value = "0";
});

btnPlusMinus.addEventListener("click", () => {
  if (currentinput) {
    currentinput = String(parseFloat(currentinput) * -1);
    inputField.value = currentinput;
  }
});

btnPercent.addEventListener("click", () => {
  if (currentinput) {
    currentinput = String(parseFloat(currentinput) * 0.01);
    inputField.value = currentinput;
  }
});


let fun = document.getElementById("fun");
let div = document.getElementById("img-container");

fun.addEventListener("click", () => {
  let img1 = document.createElement("img");
  img1.className = 'img1'
  img1.src = "./assets/Space Dancing GIF.gif";
  

let img2 = document.createElement("img");
  img2.className = 'img2'
  img2.src = "./assets/Space Dancing GIF2.gif";
  

  let img3 = document.createElement("img");
  img3.className = 'img3'
  img3.src = "./assets/Space Dancing GIF3.gif";
  

  let img4 = document.createElement("img");
  img4.className = 'img4'
  img4.src = "./assets/Pink Dancing Gif.gif";
  

let img5 = document.createElement("img");
  img5.className = 'img5'
  img5.src = "./assets/Space Dancing GIF4.gif";
  

let img6 = document.createElement("img");
  img6.className = 'img6'
  img6.src = "./assets/Space Dancing GIF5.gif";
  







  div.appendChild(img1);
  div.appendChild(img2);
  div.appendChild(img3);
  div.appendChild(img4);
  div.appendChild(img5);
  div.appendChild(img6);


});


