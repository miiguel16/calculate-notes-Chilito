// //performance es el rendimiento de la web

// //value para capturar el valor que tenga el elemento (valor interno)

// // addEventListener es para crear un elemento a un objeto

// const username = document.getElementById('username')

// const btnGreat = document.querySelector ('#btnGreat')

// btnGreat.addEventListener('click', great)


// // funcion del great (Saludar)
// function great () {
//     alert(username.value)
// }
// // para activar la funcion anterior
// great()

// console.log (typeof note1) El typeof es para saber que tipo de dato es una variable

// el elemento .toFixed(2) es para hacer que el numero solo tenga 2 decimales, en comparacion de una larga cantidad de decimales

const username = document.getElementById ('nombre')

const data1 = document.getElementById ('nota1')

const data2 = document.getElementById ('nota2')

const data3 = document.getElementById ('nota3')

const btnCalculate = document.getElementById ('btnCalculate')

const response = document.getElementById ('resultado')

btnCalculate.addEventListener('click', calculateNote )

function calculateNote (event){

    event.preventDefault ()
    let note1 = parseFloat(data1.value)
    let note2 = parseFloat(data2.value)
    let note3 = parseFloat(data3.value)

    let result = ((note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4)).toFixed(2)

    response.style.color = 'blue'
    response.textContent = `SR/SRA/SRE ${username.value} su nota definitiva es: ${result}`
}