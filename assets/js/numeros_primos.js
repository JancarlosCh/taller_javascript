//JancarlosCh
const esPrimo = (numero) => {
  for (let index = 2; index < numero; index++) {
    if (numero % index === 0) {
      return false;
    }
  }
  return numero !== 1;
}

const calcularNumerosPrimos = (limite) => {
  let numerosPrimos = []
  for (let index = 1; index < limite; index++) {
    if (esPrimo(index)) {
      numerosPrimos.push(index)
    }
  }
  return numerosPrimos
}

const btnPrimos = document.getElementById("btnPrimos")

btnPrimos.addEventListener('click', () => {
  let numero = document.getElementById("numero1").value

  if (numero === "") {
    alert("Debes ingresar un número")
  }

  let resultado = document.getElementById("salida1")
  resultado.innerHTML = calcularNumerosPrimos(numero)
})