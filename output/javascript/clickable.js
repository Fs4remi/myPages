
activeScript = () => {
    let clickable = document.getElementById('clickable')
    console.log(clickable)

    clickHandler = (event) => {
        let nav = document.getElementById('nav')
        nav.style = 'display: block'
        clickable.style = 'display: none'
    }

    clickable.addEventListener('click', clickHandler)
}


window.onload = event => {
    console.log("Page is fully loaded.")
    activeScript()
}
