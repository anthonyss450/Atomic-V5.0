function calcular() {

  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operacao = document.getElementById("operacao").value;

  let resultado = 0;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("resultado").innerText =
      "Digite dois números válidos!";
    return;
  }

  switch (operacao) {

    case "soma":
      resultado = num1 + num2;
      break;

    case "subtracao":
      resultado = num1 - num2;
      break;

    case "multiplicacao":
      resultado = num1 * num2;
      break;

    case "divisao":
      if (num2 === 0) {
        document.getElementById("resultado").innerText =
          "Não é possível dividir por zero!";
        return;
      }
      resultado = num1 / num2;
      break;
  }

  document.getElementById("resultado").innerText =
    "Resultado: " + resultado;
}