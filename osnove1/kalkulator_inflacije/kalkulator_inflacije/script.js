let stopaInflacije;
let pare;
let godina;
let iznos;
let output = document.createElement("p");
output.className = "new-value";
output.style.color = "white";
output.style.fontWeight = "bold";
let container = document.querySelector(".container");

function stopaInflacijeInput() {
  stopaInflacije = document.getElementById("inflationRate").value;
  console.log(stopaInflacije);
}

function pareInput() {
  pare = document.getElementById("money").value;
  console.log(pare);
}

function godinaIput() {
  godina = document.getElementById("years").value;
  console.log(godina);
}

function inflationCalculator() {
  iznos = pare * (1 + stopaInflacije / 100) ** godina;
  output.innerText = `Za ${godina} godina sa stopom inflacije od ${3}%, ${pare} ce vredeti ${iznos.toFixed(2)}`;
  container.appendChild(output);
}
