
import "../scss/cabinet.scss"


const getCurrentUser = JSON.parse(window.localStorage.getItem('formD'))
console.log(getCurrentUser)

const changeCard = () => {
    const cardName = document.querySelector('.cabinet-user-name');
    const cardPhone = document.querySelector('.cabinet-user-phone');
    const cardMail = document.querySelector('.cabinet-user-mail');
    const cardCity = document.querySelector('.cabinet-user-city');
    const cardAdress = document.querySelector('.cabinet-user-adress') 

    cardName.innerHTML = `${getCurrentUser.lastName} ${getCurrentUser.userName} ${getCurrentUser.fatherName}`
    cardPhone.innerHTML = `${getCurrentUser.userPhone}`
    cardMail.innerHTML = `${getCurrentUser.email}`
    cardCity.innerHTML = `${getCurrentUser.sity}`
    cardAdress.innerHTML = `${getCurrentUser.adress}`
}

changeCard()

export {changeCard}