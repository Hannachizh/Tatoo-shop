import {postClients} from "./server"

import "../scss/all.scss"


const catalogBodyTrash = document.querySelector('.catalog-trash')
const confirnTable = document.querySelector('.body-tr-tabble');
const confirmBlock = document.querySelector('.send-products-modal');
const iconTrashPrice = document.querySelector('.summ');
const iconTrashCounter  = document.querySelector('.trash-counter')
const resultPrice = document.querySelector('.result-price');
const blockSendItems = document.querySelector('.end-block');
const blockSendItemsText = document.querySelector('.text-end');



const validResPhone = (autoFocus) => {
    let form = document.forms.sendProductsForm;
    let phone = form.elements.userNicNew;
    let errorMessage = document.querySelector('.wrong-text23');
    let arr = phone.value.split('');
    let counter = 0;
    let errCount = 0;
    arr.map(function (elem) {
        if (elem === '+') {
            counter++
        }
    })
    if (counter === 0 || phone.value.length < 13) {
        errorMessage.style.display = 'block'
        errCount++
    } else {
        errorMessage.style.display = 'none'
    };
    if (errCount && autoFocus) {
        phone.focus();
    }
    return errCount;
}


const validResName = (autoFocus) => {
    let form = document.forms.sendProductsForm;
    let userName = form.elements.userName;
    let errorMessage = document.querySelector(`.wrongText20`);
    let arr = userName.value.split('');
    let counter = 0;
    let errCount = 0;
    arr.map(function (elem) {
        if (!elem.match(/^[a-zа-яё]+$/i)) {
            counter++
        } else {
            counter = 0
        }
    })
    if (userName.value === '' || counter !== 0 || userName.value.length < 2) {
        errorMessage.style.display = 'block'
        errCount++
    } else {
        errorMessage.style.display = 'none'
    };
    if (errCount && autoFocus) {
        userName.focus();
    }
    return errCount;
}


const validResLastName = (autoFocus) => {
    let form = document.forms.sendProductsForm;
    let userName = form.elements.userLastname;
    let errorMessage = document.querySelector(`.wrongText21`);
    let arr = userName.value.split('');
    let counter = 0;
    let errCount = 0;
    arr.map(function (elem) {
        if (!elem.match(/^[a-zа-яё]+$/i)) {
            counter++
        } else {
            counter = 0
        }
    })
    if (userName.value === '' || counter !== 0 || userName.value.length < 2) {
        errorMessage.style.display = 'block'
        errCount++
    } else {
        errorMessage.style.display = 'none'
    };
    if (errCount && autoFocus) {
        userName.focus();
    }
    return errCount;
}


const validResFatherName = (autoFocus) => {
    let form = document.forms.sendProductsForm;
    let userName = form.elements.userfathername;
    let errorMessage = document.querySelector(`.wrongText22`);
    let arr = userName.value.split('');
    let counter = 0;
    let errCount = 0;
    arr.map(function (elem) {
        if (!elem.match(/^[a-zа-яё]+$/i)) {
            counter++
        } else {
            counter = 0
        }
    })
    if (userName.value === '' || counter !== 0 || userName.value.length < 2) {
        errorMessage.style.display = 'block'
        errCount++
    } else {
        errorMessage.style.display = 'none'
    };
    if (errCount && autoFocus) {
        userName.focus();
    }
    return errCount;
}


const validResCity = (autoFocus) => {
    let form = document.forms.sendProductsForm;
    let userName = form.elements.city;
    let errorMessage = document.querySelector(`.wrongText25`);
    let arr = userName.value.split('');
    let counter = 0;
    let errCount = 0;
    arr.map(function (elem) {
        if (!elem.match(/^[a-zа-яё]+$/i)) {
            counter++
        } else {
            counter = 0
        }
    })
    if (userName.value === '' || counter !== 0 || userName.value.length < 2) {
        errorMessage.style.display = 'block'
        errCount++
    } else {
        errorMessage.style.display = 'none'
    };
    if (errCount && autoFocus) {
        userName.focus();
    }
    return errCount;
}


const validResAdress = (autoFocus) => {
    let form = document.forms.sendProductsForm;
    let userName = form.elements.adress;
    let errorMessage = document.querySelector(`.wrongText26`);
    let arr = userName.value.split('');
    let counter = 0;
    let errCount = 0;
    arr.map(function (elem) {
        if (!elem.match(/^[a-zа-яё]+$/i)) {
            counter++
        } else {
            counter = 0
        }
    })
    if (userName.value === '' || counter !== 0 || userName.value.length < 2) {
        errorMessage.style.display = 'block'
        errCount++
    } else {
        errorMessage.style.display = 'none'
    };
    if (errCount && autoFocus) {
        userName.focus();
    }
    return errCount;
}


const validResMail = (autoFocus) => {
    let form = document.forms.sendProductsForm;
    let eMails = form.elements.eMail;
    let errorMessage = document.querySelector('.wrongText24');
    let arr = eMails.value.split('');
    let counter = 0;
    let errCount = 0;
    arr.map(function (elem) {
        if (elem === '@') {
            counter++
        }
    })
    if (counter === 0 || eMails.value.length < 10) {
        errorMessage.style.display = 'block'
    } else {
        errorMessage.style.display = 'none'
    };
    if (errCount && autoFocus) {
        eMails.focus();
    }
    return errCount;
}



const sendOrder = (e) => {
    let errCount = 0;
    errCount += validResPhone(!errCount);
    errCount += validResName(!errCount);
    errCount += validResLastName(!errCount);
    errCount += validResFatherName(!errCount);
    errCount += validResCity(!errCount);
    errCount += validResAdress(!errCount);
    errCount += validResMail(!errCount);

    if (errCount === 0) {
        e.preventDefault()
        postClients()
        console.log(true)
        catalogBodyTrash.innerHTML = ''
        confirnTable.innerHTML = ''
        resultPrice.innerHTML = 0
        confirmBlock.classList.remove('active')
        iconTrashPrice.style.display = 'none'
        iconTrashCounter.innerHTML = 0
        blockSendItems.style.display = 'block';
        blockSendItemsText.innerHTML = 'Ваш заказ принят'
        for( let i = 0; i< document.forms.sendProductsForm.elements.length; i++){
            document.forms.sendProductsForm.elements[i].value = ' '
        }
        
    }
    else {
        e.preventDefault()
        return !errCount
    }
}


export {validResPhone, validResName, validResLastName, validResFatherName, validResCity, validResAdress, validResMail, sendOrder}