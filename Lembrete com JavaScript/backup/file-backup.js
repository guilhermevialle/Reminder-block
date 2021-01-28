function btnClick() {
    var lembrete = document.getElementById('lembrete')
    var lembreteAdd = lembrete.value
    const res = document.getElementById('res')

    if (lembreteAdd == '') {
        return;
    }

    else {
        // elemento a ser inserido
        var newDiv = document.createElement('div')
        var txt = document.createTextNode(`${lembreteAdd}`)
        var divImgs = document.createElement('div')
        
        // flex
        newDiv.style.display = 'flex'
        newDiv.style.alignItems = 'center'
        newDiv.style.justifyContent = 'space-between'

        // texto
        newDiv.appendChild(txt)
        res.appendChild(newDiv)
        
        // img
        var img2 = document.createElement('img')
        var img = document.createElement('img')

        // img cursor
        img.style.cursor = "pointer"
        img2.style.cursor = "pointer"

        img2.setAttribute("src", "https://img.icons8.com/ios/50/000000/checked-checkbox--v1.png")
        img2.setAttribute("height", "48");
        img2.setAttribute("width", "48");

        img.setAttribute("src", "https://img.icons8.com/ios/50/000000/x-coordinate.png")
        img.setAttribute("height", "48");
        img.setAttribute("width", "48");
        
        // div imgs
        divImgs.style.display = "flex"
        divImgs.style.flexDirection = "row"
        divImgs.style.alignItems = "center"

        divImgs.appendChild(img)
        divImgs.appendChild(img2)

        // div normal 
        newDiv.appendChild(divImgs)

        // classes e iDs
        newDiv.className = "container"
        img2.id = "img2"
        img.id = "img"

        // add event
        img2.addEventListener('click', function () {
            newDiv.style.textDecoration = 'line-through'
            newDiv.style.borderTop='1px solid white'
            newDiv.style.opacity = '0.9'
            img2.style.display = 'none'
        }, false)
        
        img.addEventListener('click', function () {
            newDiv.remove()
        }, false)
    }
}


