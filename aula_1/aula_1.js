//console.log("olá mundo!");

//const nome = prompt("Digite seu nome");
//alert("Bem-vindo" + nome);

//defini função;
function somar() {
  const n1 = Number(prompt("Digite o primeiro número"));
  const n2 = Number(prompt("Digite o segundo número"));
  const resultado = n1 + n2;
  alert(`O resultado da suma é resultado é ${resultado}`);
}

//invoquei ela;
//somar();

function multiplicar() {
  const n1 = Number(prompt("Digite o primeiro número"));
  const n2 = Number(prompt("Digite o segundo número"));
  const resultado = n1 * n2;
  alert(`O resultado da multiplicação é resultado é ${resultado}`);
}

//multiplicar();

function somarInputs() {
  const n1 = Number(document.querySelector("#n1_soma").value);
  const n2 = Number(document.querySelector("#n2_soma").value);
  const resultado = n1 + n2;
  document.querySelector("#resultado_soma").textContent =
    `O resultado da soma é ${resultado}`;
}

function multiplicarInputs() {
  const u1 = Number(document.querySelector("#u1_multiplicacao").value);
  const u2 = Number(document.querySelector("#u2_multiplicacao").value);
  document.querySelector("#resultado_multiplicacao").textContent =
    `O resultado da multiplicação é ${resultado}`;
}
