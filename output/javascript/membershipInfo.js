
thanksHandler = () => {
    let section = document.getElementById('ThanksDialog')
    let backdrop = document.getElementById('backdrop')
    section.style = 'display: block'
    backdrop.style = 'display: block'

    let p = document.getElementById('info')
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let skill = document.getElementById('skill')
    let level = document.getElementById('level')
    let comments = document.getElementById('comment')

    p.innerHTML = `Name: ${name.value} `
    p.innerHTML += `Email: ${email.value} <br>`
    p.innerHTML += `Skill: ${skill.value} `
    p.innerHTML += `Level: ${level.value} `
    p.innerHTML += `Comment: ${comments.value} `
}

removeHandler = () => {
    let section = document.getElementById('ThanksDialog')
    let backdrop = document.getElementById('backdrop')
    section.style = 'display: none'
    backdrop.style = 'display: none'

}



