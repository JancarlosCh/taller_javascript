//JancarlosCh

/**
  N = 2
  sumatoria = 1^2 + 2^2 || 1 + 4 = 5
  N = 3
  sumatoria = 1^3 + 2^3 + 3^3 || 1 + 8 + 27 = 36 
  N = 4
  sumatoria = 1^4 + 2^4 + 3^4 + 4^4 || 1 + 16  + 81 + 256 = 354
  N = 5
  sumatoria = 1^5 + 2^5 + 3^5 + 4^5 + 5^5 || 1 + 32  + 243 + 1024 + 3125 = 4425
*/

const calcularSumatoria = (exponente) => {
  let sumatoria = 0

  for (let index = 1; index <= exponente; index++) {
    sumatoria += Math.pow(index, exponente)
  }

  return sumatoria
}

const btnSumatoria = document.getElementById("btnSumatoria")

btnSumatoria.addEventListener('click', () => {
  let numero = document.getElementById("numero2").value
  console.log(numero)

  if (numero === "") {
    alert("Debes ingresar un número")
  }

  if (numero < 0) {
    alert("Solo se admiten números positivos")
  } else {
    let resultado = document.getElementById("salida2")
    resultado.innerHTML = calcularSumatoria(numero)
  }
})