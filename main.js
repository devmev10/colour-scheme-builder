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
        for(let i = 0; i<5; i++){
        document.querySelector(`#sec${i}`).style.backgroundColor = colorScheme[i]
        document.querySelector(`#text${i}`).innerText = colorScheme[i]
        }
        // Copy the color hex value
        const copy = document.querySelectorAll('h3')
        const Value = document.querySelectorAll('h3').innerText

        copy.addEventListener('click', () => {
            navigator.clipboard.writeText(Value)
            alert('Copied')
        })

    }) 
}

