import 'regenerator-runtime/runtime';
import {changeCard} from "./modules/cabinet.js"
import {clickIconTrash, closeTrashIcon, trashProdPcus, trashChangeCount, trashMinusPr, sendTrash, confirmSending, closeSendBlock, 
    changeCountItems, changeTrashImg, crossSendItems} from "./modules/script1.js"
import {openLikeContainer, closeLikeContainer, crossItemLike, crossAllitemsLike} from "./modules/script1.js"
import {openRegerIcon, closeRegerIcon, logIn, signUp, toAcc, crossAccount, ChengeHeadSignUp, signIn} from "./modules/script1.js"
import {openCatalogBurger, closeCatalogBurger, toFirstPage, toErrorPage} from "./modules/script1.js"
import {localSet,localMashine, localTaker, localWire, localPaint, localBlocks, localTip, localNeedles, localProtaction, localAccessories, localLaptop} from "./modules/script1.js"
import {validInputPhone, validInputPasward, btnValidIn} from "./modules/valid-reger-form"
import {validNewPhone, validNewPasward, validRepeatPasward, validName, validLastName, validFatherName, validCity, validAdress, validRegMail, solveInfo, btnSignUp} from "./modules/valid-reger-form"
import {validResPhone, validResName, validResLastName, validResFatherName, validResCity, validResAdress, validResMail, sendOrder} from "./modules/send-products"
import {searchBar} from "./modules/seacher"


import "./scss/all.scss"
import "./scss/cabinet.scss"


if(window.location.href === 'http://localhost:8081/cabinet.html'){
//*******card ***********
changeCard()

//*******script1 ***********
//trash
document.querySelector('.trash-icon').addEventListener('click', clickIconTrash);
document.querySelector('.cross-trash').addEventListener('click', closeTrashIcon)
document.addEventListener('click', trashProdPcus)
document.addEventListener('change', trashChangeCount)
document.addEventListener('click', trashMinusPr)
document.querySelector('.btn-trash-sent').addEventListener('click', sendTrash)
document.querySelector('.right-products').addEventListener('click', confirmSending)
document.querySelector('.cross-send').addEventListener('click', closeSendBlock)
document.addEventListener('click', changeCountItems)
document.querySelector('.btn-trash-change-img').addEventListener('click', changeTrashImg)
document.querySelector('.cross-res').addEventListener('click', crossSendItems)

// //like
document.querySelector('.like-container').addEventListener('click', openLikeContainer)
document.querySelector('.cross-like').addEventListener('click', closeLikeContainer)
document.addEventListener('click', crossItemLike)
document.querySelector('.btn-like-delete-body').addEventListener('click', crossAllitemsLike)

// //regester
document.querySelector('.account-ikon-container').addEventListener('click', openRegerIcon)
document.querySelector('.cross-acc-choose').addEventListener('click', closeRegerIcon)
document.querySelector('#In').addEventListener('click', logIn)
document.querySelector('#Up').addEventListener('click', signUp)
document.querySelector('#acc-text').addEventListener('click', toAcc)
document.querySelector('.cross-acc').addEventListener('click', crossAccount)
document.querySelector('.sign-up-block').addEventListener('click', ChengeHeadSignUp)
document.querySelector('.sign-in-block').addEventListener('click', signIn)

// //open-catalog-burger
document.querySelector('.catalog').addEventListener('click', openCatalogBurger)
document.querySelector('.cross-catal').addEventListener('click', closeCatalogBurger)

// //to first page
document.querySelectorAll('.logo-container').forEach(elem => {
    elem.addEventListener('click', toFirstPage)
})

// //localMashine
document.querySelectorAll('.set').forEach((event) => {
    event.addEventListener('click', localSet)
});
document.querySelectorAll('.mashine').forEach((event) => {
    event.addEventListener('click', localMashine)
})
document.querySelectorAll('.taker').forEach((event) => {
    event.addEventListener('click', localTaker)
})
document.querySelectorAll('.wire').forEach((event) => {
    event.addEventListener('click', localWire)
})
document.querySelectorAll('.paint').forEach((event) => {
    event.addEventListener('click', localPaint)
})
document.querySelectorAll('.blocks').forEach((event) => {
    event.addEventListener('click', localBlocks)
})
document.querySelectorAll('.tips').forEach((event) => {
    event.addEventListener('click', localTip)
})
document.querySelectorAll('.needles').forEach((event) => {
    event.addEventListener('click', localNeedles)
})
document.querySelectorAll('.protaction').forEach((event) => {
    event.addEventListener('click', localProtaction)
})
document.querySelectorAll('.accessories').forEach((event) => {
    event.addEventListener('click', localAccessories)
})
document.querySelectorAll('.laptop').forEach((event) => {
    event.addEventListener('click', localLaptop)
})

// //to error page
document.querySelectorAll('.error-page').forEach(item => {
    item.addEventListener('click', toErrorPage)
})

//*******valid-reger-form ***********
//in
document.forms.signInForm.elements.userNic.onblur = () => { validInputPhone(false) }
document.forms.signInForm.elements.pasward.onblur = () => { validInputPasward(false) }
document.querySelector('#btn-logIn').addEventListener('click', btnValidIn)

//up
document.forms.signUpForm.elements.userNicNew.onblur = () => { validNewPhone(false) }
document.forms.signUpForm.elements.newPasward.onblur = () => { validNewPasward(false) }
document.forms.signUpForm.elements.repeatWasward.onblur = () => { validRepeatPasward(false) }
document.forms.signUpForm.elements.userName.onblur = () => { validName(false, 1) }
document.forms.signUpForm.elements.userLastname.onblur = () => { validLastName(false) }
document.forms.signUpForm.elements.userfathername.onblur = () => { validFatherName(false) }
document.forms.signUpForm.elements.city.onblur = () => { validCity(false) }
document.forms.signUpForm.elements.adress.onblur = () => { validAdress(false) }
document.forms.signUpForm.elements.eMail.onblur = () => { validRegMail(false) }
document.getElementById('checkInp').onblur = function () { solveInfo(false); }
document.querySelector('#btn-logUp').addEventListener('click', btnSignUp)

//*******send products ***********
document.forms.sendProductsForm.userNicNew.onblur = () => { validResPhone(false) }
document.forms.sendProductsForm.elements.userName.onblur = () => { validResName(false, 1) }
document.forms.sendProductsForm.elements.userLastname.onblur = () => { validResLastName(false) }
document.forms.sendProductsForm.elements.userfathername.onblur = () => { validResFatherName(false) }
document.forms.sendProductsForm.elements.city.onblur = () => { validResCity(false) }
document.forms.sendProductsForm.elements.adress.onblur = () => { validResAdress(false) }
document.forms.sendProductsForm.elements.eMail.onblur = () => { validResMail(false) }
document.querySelector('.send-products-btn').addEventListener('click', sendOrder)

//*******seacher ***********
document.querySelector('.search-field').addEventListener('keyup', searchBar);
}
