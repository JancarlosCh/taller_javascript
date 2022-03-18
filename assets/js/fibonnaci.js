let cantidadElementos = 7

const calcularTerminosFibonacci = (cantidadElementos) => {
  let elementos = [1, 1];

  for (let index = 2; index < cantidadElementos; index++) {
    let sumatoria = elementos[index - 2] + elementos[index - 1]
    elementos.push(sumatoria)
  }

  return elementos
}

const btnFibonacci = document.getElementById("btnFibonacci")

btnFibonacci.addEventListener('click', () => {
  let cantidadElementos = document.getElementById("numero3").value

  if (cantidadElementos === "") {
    alert("Debes ingresar un número")
  }

  if (cantidadElementos <= 0) {
    alert("Solo se admiten mayores que cero")
  } else {
    let resultado = document.getElementById("salida3")
    resultado.innerHTML = calcularTerminosFibonacci(cantidadElementos)
  }
})