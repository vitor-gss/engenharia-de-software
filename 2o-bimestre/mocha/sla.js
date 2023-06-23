const frm = document.querySelector("form")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
        var texto = frm.texto.value
        document.write(texto)
})