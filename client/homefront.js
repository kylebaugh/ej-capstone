const baseURL = 'http://localhost:4000'
const greetingsBtn = document.querySelector('#welcomeBtn')
const crossOff = document.querySelectorAll('.crossOffCheckbox')

const greetingBtnFunc = () => {
    alert("Welcome to my Website! Today I'm going to show you the basics of kayaking so you can get out there and have as much fun as I do! Thank you for deciding to use my website to learn more about your new passion! Once you feel confident in one of the sections of learning, click the checkbox and it will cross off that section!")
}

const crossOffFunc = (e) => {
    document.getElementById(e.target.value).classList.toggle('checked')
}

for (let i = 0; i < crossOff.length; i++ ){
    console.log(crossOff[i].value)
    crossOff[i].addEventListener('click', crossOffFunc)
}

greetingsBtn.addEventListener('click', greetingBtnFunc)