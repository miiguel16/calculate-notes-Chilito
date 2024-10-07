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

const prediction = document.getElementById ('prediction')

btnCalculate.addEventListener('click', calculateNote )

const conexionBoton = document.getElementById('predictbtn')

function calculateNote (event){

    event.preventDefault ()
    let note1 = parseFloat(data1.value)
    let note2 = parseFloat(data2.value)
    let note3 = parseFloat(data3.value)

    if (note1,note2,note3 >=0 || note1,note2,note3 <= 5){

        function definitive1 (result) {

            if (result < 3.5){
                response.style.color = 'black'
                response.textContent = `SR/SRA/SRE ${username.value} ha perdido la nota por debajo de 3.5 y su nota es ${result}`}
        
                else if (result >= 3.5 && result < 4.5) {
                response.style.color = 'orange'
                response.textContent = `SR/SRA/SRE ${username.value} su nota definitiva es: ${result}`}
        
                    else
                        response.style.color = 'green'
                        response.textContent = `SR/SRA/SRE ${username.value} su nota definitiva es: ${result}`
        }

        let result = ((note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4)).toFixed(2)

            response.style.color = 'blue'
            response.textContent = `SR/SRA/SRE ${username.value} su nota definitiva es: ${result}`
            definitive1 (result)

            return
            }
    else {
        response.style.color = 'red'
        response.textContent = 'Ingresa notas entre 0 y 5 para poder continuar'
    }

    predictbtn = document.querySelector('#predictbtn')
    predictbtn.addEventListener('click', predict)


        function predict() {
        let note1 = parseFloat(data1.value)
        let note2 = parseFloat(data2.value)
        let note3 = parseFloat(data3.value)

        result = ((3.5 - (note1 * 0.3 + note2 * 0.3)) / 0.4).toFixed(2)
        response.textContent = `SR/SRA/SRE ${username.value} la nota minima para ganar la materia es : ${result}`
        }
}
