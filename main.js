document.querySelector('button').addEventListener('click', getColor())

let seedColor = document.querySelector('input').value
let colorMode = document.querySelector('#color-mode').value

function getColor(){
fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${colorMode}`)
    .then(response => response.json())
    .then(data => console.log(data))
}