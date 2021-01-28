function btnClick() {
    var lembrete = document.getElementById('lembrete')
    var lembreteAdd = lembrete.value
    const res = document.getElementById('res')
    const error = document.getElementById('error')

    if (lembreteAdd == '') {
        error.textContent = 'Não é possível adicionar uma tarefa vazia.'
        error.style.color = 'white'
        error.style.opacity='1'
        return;
        }
    
        else if ((res.textContent || res.innerText).indexOf(lembreteAdd) > -1) {
            error.textContent = 'Não é possível adicionar tarefas iguais.'
            error.style.color = 'white'
            error.style.opacity='1'
        }
            
    else {
        error.textContent = ''
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

        img2.setAttribute("src", "https://img.icons8.com/fluent/48/000000/checkmark.png")
        img2.setAttribute("height", "32");
        img2.setAttribute("width", "32");

        img.setAttribute("src", "https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png")
        img.setAttribute("height", "32");
        img.setAttribute("width", "32");
        
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

        newDiv.style.opacity='1'

        // add event
        img2.addEventListener('click', function () {
            newDiv.style.textDecoration = 'line-through'
            newDiv.style.opacity = '0.9'
            img2.style.display = 'none'
        }, false)
        
        img.addEventListener('click', function () {
            newDiv.remove()
        }, false)
    }
}


