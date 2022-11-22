document.querySelector('button').addEventListener('click', getColor)



function getColor(){
    let seedColor = document.querySelector('input').value.slice(1)
    let colorMode = document.querySelector('#color-mode').value

    let colorScheme = []
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${colorMode}`)
    .then(response => response.json())
    .then(data => {
        // console.log(data.colors)
        let arr = data.colors

        for(item of arr){
            // console.log(item.hex.value)
            colorScheme.push(item.hex.value)
        }
    })
    
    console.log(colorScheme)
    document.querySelector('#sec2').style.backgroundColor = `${colorScheme[1]}`
    
}

