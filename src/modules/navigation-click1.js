
import { getRenderLimit } from "./server.js"
import { localcatalogMashine } from "./script1.js"
import {getListSubsc, postSubscribe} from "./serverFirstPage"

import "../scss/style.scss"




const categoriesText = document.querySelectorAll('.categories');
const categoriesImg = document.querySelectorAll('.categories-img');
let inputMail = document.querySelector('#e-mail');
let inputName = document.querySelector('#user-name');
let inputCheckBox = document.querySelector('#check');
const blockSendItems = document.querySelector('.end-block');
const blockSendItemsText = document.querySelector('.text-end');
const blockSendItemsImg = document.querySelector('.naw-end-img')


//to catalog
const toCatalog = () => {
    window.location.href = './catalog.html'
    localcatalogMashine('all')
}





//hitsPart
const removeActiveTegs = () => {
    if (document.querySelectorAll('.active-category')) {
        document.querySelectorAll('.active-category').forEach(elem => {
            elem.classList.remove('active-category')
        })
    }
    if (document.querySelectorAll('.active-img')) {
        document.querySelectorAll('.active-img').forEach(elem => {
            elem.classList.remove('active-img')
        })
    }

}


const getrenderLimits = async (elem) => {
    const limitItems = await getRenderLimit(`${elem}`);
    const categoryBody = document.querySelector('.products-block')
    categoryBody.innerHTML = ''
    limitItems.forEach((post) => {
        categoryBody.innerHTML += `
            <div class="product-card">
                <div class="card-top-navigation">
                    <img src="./images/new pruduct.svg">
                    <img src="./images/heart.svg" class="card-heart card-like-icon">
                    <img src="images/gold-icon.svg" class="card-gold-heart not-active">
                </div>
                <img src="${post.imgProduct}">
                <div class="card-descr">
                    <p id="descr">${post.title}</p>
                    <p id="price"><span id="price-numb">${post.price}</span> ₽</p>
                </div>
                <div class="card-btn-box">
                    <button class="card-btn">В корзину</button>
                </div>
            </div>
                `;

    })
}


// //catalogPart 


const hitPart = () => {
    removeActiveTegs()
    getrenderLimits('hit')
    categoriesText[0].classList.add('active-category')
    categoriesImg[0].classList.add('active-img')
}


const popular = () => {
    removeActiveTegs()
    getrenderLimits('populas')
    categoriesText[1].classList.add('active-category')
    categoriesImg[1].classList.add('active-img')
}


const newFirstPage = () => {
    removeActiveTegs()
    getrenderLimits('new')

    categoriesText[2].classList.add('active-category')
    categoriesImg[2].classList.add('active-img')
}


const discont = () => {
    removeActiveTegs()
   getrenderLimits('discont')
    categoriesText[3].classList.add('active-category')
    categoriesImg[3].classList.add('active-img')
}







// //submit-form


const validInputMail = (autoFocus) => {
    let form = document.forms.confirmForm;
    let eMails = form.elements.eMail;
    let errorMessage = document.querySelector('.wrongText');
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


const validInputName = (autoFocus) => {
    let form = document.forms.confirmForm;
    let userName = form.elements.userName;
    let errorMessage = document.querySelector('.wrongText2');
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


const solvePrivateInfo = (autoFocus) => {
    let sulver = document.getElementById('check')
    let errorMessage = document.querySelector('.wrongText3');
    let errCount = 0;
    if (!sulver.checked) {
        errorMessage.style.display = 'block';
        errCount++
    }
    else {
        errorMessage.style.display = 'none';
    }
    if (errCount && autoFocus) {
        sulver.focus();
    }
    return errCount;
}



const findSubsc = async () => {
    let formUser = await getListSubsc();
    const eMail = document.forms.confirmForm.elements.eMail.value


    const curentUser = {
        eMail
    }
    isNotNewSubsc(formUser, curentUser)

}

const isNotNewSubsc = (allUsers, userInfo) => {
    const checkUser = allUsers.some(item => {
        return (
            item.email === userInfo.eMail
        )

    });
    if (checkUser) {
        blockSendItems.style.display = 'block';
        blockSendItemsText.innerHTML = 'Хей, разок подписался и хватит!!!'
        blockSendItemsText.style.marginLeft = '77px'
        blockSendItemsImg.style.cssText = 'margin-left: 63px; width: 491px;'

        return false
    } else {
        postSubscribe()
        blockSendItems.style.display = 'block';
        blockSendItemsText.innerHTML = 'Спасибо, что остаетесь с нами'
        blockSendItemsText.style.marginLeft = '100px'
        blockSendItemsImg.style.cssText = 'margin-left: 84px; width: 444px;'
        inputMail.value = ''
        inputName.value = ''
        return true
    }
}




const sendConfirmForm = (e) =>{
    let errCount = 0;
    errCount += validInputMail(!errCount);
    errCount += validInputName(!errCount);
    errCount += solvePrivateInfo(!errCount);
    if (errCount == 0) {
        e.preventDefault()
        findSubsc()
    } else {
        e.preventDefault()
        return !errCount
    }
}



// //hitsPart


const catalogAllHits = () => {
    localcatalogMashine('hit');
    window.location.href = './catalog.html'
}



export { toCatalog }
export { getrenderLimits }
export { hitPart, popular, newFirstPage, discont, validInputMail, validInputName, solvePrivateInfo, sendConfirmForm, catalogAllHits}