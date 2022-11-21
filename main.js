document.querySelector('button').addEventListener('click', getColor)



function getColor(){
    let seedColor = document.querySelector('input').value.slice(1)
    let colorMode = document.querySelector('#color-mode').value

    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${colorMode}`)
    .then(response => response.json())
    .then(data => console.log(data))

    console.log(seedColor)
    console.log(colorMode)
}

