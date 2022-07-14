import "../scss/all.scss"
import "../scss/style.scss"

let trashModal = document.querySelector('.trash-modal');
let likeModal = document.querySelector('.like-modal');
let accountModal = document.querySelector('.acc-modal');
const accSign = document.querySelector('.madal-choose-acc')
let signInHead = document.querySelector('.sign-in-block');
let signUpHead = document.querySelector('.sign-up-block');
let contResultTrashPrice = 0
const confirmPart = document.querySelector('.send-products-modal')
const sendBody = document.querySelector('.send-body')
const sendForm = document.querySelector('.taker-form')
const sendFormBtn = document.querySelector('.right-products')
const confirmProductsBtn = document.querySelector('.send-products-btn')
const sendItems = document.querySelector('.end-block');






//trash
const clickIconTrash = () => {
    trashModal.classList.toggle('active')
    likeModal.classList.remove('active')
    accountModal.classList.remove('active')
    document.querySelector('.naw-catalog').classList.remove('naw-catalog-active')
}

const closeTrashIcon = () => {
    trashModal.classList.remove('active')
}

const trashProdPcus = (e) => {
    if (e.target.classList.contains('trash-plus-product')) {
        let trashNumbProduct = e.target.previousElementSibling
        trashNumbProduct.value++
        let trashItemPrice = Number(e.target.parentElement.nextElementSibling.lastElementChild.firstElementChild.textContent)
        let trashHiddenNumbProduct = Number(e.target.previousElementSibling.value)
        let trashHiddenItemPrice = e.target.parentElement.nextElementSibling.firstElementChild
        trashHiddenItemPrice.innerHTML = trashItemPrice * trashHiddenNumbProduct
        finalSumm()
        console.log(trashHiddenItemPrice)
    }
}



const trashChangeCount = (e) => {
    if (e.target.classList.contains('trash-numb-product')) {
        let trashHiddenNumbProduct = Number(e.target.value)
        let trashItemPrice = Number(e.target.parentElement.nextElementSibling.lastElementChild.firstElementChild.textContent)
        let trashHiddenItemPrice = e.target.parentElement.nextElementSibling.firstElementChild
        trashHiddenItemPrice.innerHTML = trashItemPrice * trashHiddenNumbProduct
        finalSumm()
    }
}

const trashMinusPr = (e) => {
    if (e.target.classList.contains('trash-minus-product')) {
        if (e.target.nextElementSibling.value > 1) {
            let trashNumbProduct = e.target.nextElementSibling
            trashNumbProduct.value--
            let trashItemPrice = Number(e.target.parentElement.nextElementSibling.lastElementChild.firstElementChild.textContent)
            let trashHiddenNumbProduct = Number(e.target.nextElementSibling.value)
            let trashHiddenItemPrice = e.target.parentElement.nextElementSibling.firstElementChild
            trashHiddenItemPrice.innerHTML = trashItemPrice * trashHiddenNumbProduct
        } else {
            let trashNumbProduct = e.target.nextElementSibling
            trashNumbProduct.value = 1
            let trashItemPrice = Number(e.target.parentElement.nextElementSibling.lastElementChild.firstElementChild.textContent)
            let trashHiddenItemPrice = e.target.parentElement.nextElementSibling.firstElementChild
            trashHiddenItemPrice.innerHTML = trashItemPrice
        }
        finalSumm()
    }
}



const finalSumm = () => {
    let summNumb = document.querySelector('.summ-numb');
    const finalSummNumb = document.querySelector('.result-price');
    const trashHiddenItemPrice = document.querySelectorAll('.counter-numb')
    console.log(trashHiddenItemPrice.innerHTML)
    for (let i = 0; i < trashHiddenItemPrice.length; i++) {
        const prices = Number(trashHiddenItemPrice[i].textContent);
        contResultTrashPrice += prices

        finalSummNumb.innerHTML = contResultTrashPrice
        summNumb.innerHTML = finalSummNumb.textContent
    }
    contResultTrashPrice = 0
}

const sendTrash = () => {
    const confirnTable = document.querySelector('.body-tr-tabble');
    const confirmProductsTitle = document.querySelectorAll('.trash-product-text');
    const confirmProductsPrice = document.querySelectorAll('.counter-numb');
    const confirmProductsValue = document.querySelectorAll('.trash-numb-product');
    const confirmProductsEndPrice = document.querySelectorAll('.trash-price-product');
    const confirmProductValueRes = document.querySelector('.collumn-numb');
    const confirmProductPriceRes = document.querySelector('.collumn-price');
    const finalSummNumb = document.querySelector('.result-price');

    if (document.querySelector('.catalog-trash').children.length !== 0) {
        confirmPart.classList.add('active')
        trashModal.classList.remove('active')
        accountModal.classList.remove('active')
        likeModal.classList.remove('active')
        sendBody.style.display = 'block';
        sendForm.style.display = 'none';
        confirmProductsBtn.style.display = 'none';
        sendFormBtn.style.display = 'block';
        let count = 0

        for (let i = 0; i < confirmProductsTitle.length; i++) {
            let numbPlus = Number(confirmProductsValue[i].value)
            confirnTable.innerHTML += `<tr class="body-tr"><td class="col1">${confirmProductsTitle[i].textContent}</td>
                <td class="col2"><span>${confirmProductsPrice[i].textContent}</span>$</td>
                <td class="col3">${confirmProductsValue[i].value}</td>
                <td class="col4"><span>${confirmProductsEndPrice[i].textContent}</span>$</td></tr>`

            count += numbPlus;

        }
        confirmProductValueRes.innerHTML = count
        count = 0
        confirmProductPriceRes.innerHTML = `${finalSummNumb.textContent}$`

    } else {
        alert('товары не добавлены в корзину')
    }
}

const confirmSending = () => {
    sendBody.style.display = 'none';
    sendForm.style.display = 'block';
    confirmProductsBtn.style.display = 'block';
    sendFormBtn.style.display = 'none';
}

const closeSendBlock = () => {
    confirmPart.classList.remove('active')
}

const changeCountItems = (e) => {
    const countItems = document.querySelector('.trash-counter')
    if (e.target.classList.contains('cross-trash-item')) {
        e.target.parentElement.remove()
        countItems.innerHTML = (document.querySelectorAll('.trash-product-block').length)
        if (document.querySelectorAll('.trash-product-block').length === 0) {
            document.querySelector('.result-price').innerHTML = 0
            document.querySelector('.summ').style.display = "none"
        }


        finalSumm()
    }
}


const changeTrashImg = () => {
    document.querySelectorAll('.trash-product-block').forEach(item => {
        item.remove()
    })
    document.querySelector('.result-price').innerHTML = 0
    document.querySelector('.summ').style.display = "none"
    document.querySelector('.trash-counter').innerHTML = 0
}

const crossSendItems = () => {
    sendItems.style.display = 'none'
}


// //like
const openLikeContainer = () => {
    likeModal.classList.toggle('active')
    trashModal.classList.remove('active')
    accountModal.classList.remove('active')
    document.querySelector('.naw-catalog').classList.remove('naw-catalog-active')
}

const closeLikeContainer = () => {
    likeModal.classList.remove('active')
}

const crossItemLike = (e) => {
    if (e.target.classList.contains('cross-like-item')) {
        e.target.parentElement.remove()
    }
}

const crossAllitemsLike = () => {
    document.querySelector('.catalog-like').innerHTML = ''
}



// //regester
const openRegerIcon = () => {
    accSign.classList.toggle('active')
    trashModal.classList.remove('active')
    likeModal.classList.remove('active')
    document.querySelector('.naw-catalog').classList.remove('naw-catalog-active')
}

const closeRegerIcon = () => {
    accSign.classList.remove('active')
}

const logIn = () => {
    accountModal.classList.add('active');
    accSign.classList.remove('active')
    let borderIn = document.querySelector('#in-border');
    let borderUp = document.querySelector('#up-border');
    const signInBody = document.querySelector('.sign-in-body');
    const signUpBody = document.querySelector('.sign-up-body');

    signInHead.classList.add('active-sign');
    borderIn.style.display = 'block';
    signUpHead.classList.remove('active-sign');
    borderUp.style.display = 'none';
    signInBody.style.display = 'block';
    signUpBody.style.display = 'none';
}

const signUp = () => {
    accountModal.classList.add('active');
    accSign.classList.remove('active')
    let borderIn = document.querySelector('#in-border');
    let borderUp = document.querySelector('#up-border');
    const signInBody = document.querySelector('.sign-in-body');
    const signUpBody = document.querySelector('.sign-up-body');

    signInHead.classList.remove('active-sign');
    borderIn.style.display = 'none';
    signUpHead.classList.add('active-sign');
    borderUp.style.display = 'block';
    signUpBody.style.display = 'block';
    signInBody.style.display = 'none';
}

const toAcc = () => {
    if (localStorage.getItem('formD') !== null) {
        window.location.href = './cabinet.html'
    } else {

        accountModal.classList.add('active');
        accSign.classList.remove('active')
        let borderIn = document.querySelector('#in-border');
        let borderUp = document.querySelector('#up-border');
        const signInBody = document.querySelector('.sign-in-body');
        const signUpBody = document.querySelector('.sign-up-body');

        signInHead.classList.add('active-sign');
        borderIn.style.display = 'block';
        signUpHead.classList.remove('active-sign');
        borderUp.style.display = 'none';
        signInBody.style.display = 'block';
        signUpBody.style.display = 'none';
    }
}

const crossAccount = () => {
    accountModal.classList.remove('active')
}

const ChengeHeadSignUp = () => {
    let borderIn = document.querySelector('#in-border');
    let borderUp = document.querySelector('#up-border');
    const signInBody = document.querySelector('.sign-in-body');
    const signUpBody = document.querySelector('.sign-up-body');

    signInHead.classList.remove('active-sign');
    borderIn.style.display = 'none';
    signUpHead.classList.add('active-sign');
    borderUp.style.display = 'block';
    signUpBody.style.display = 'block';
    signInBody.style.display = 'none';
}

const signIn = () => {
    let borderIn = document.querySelector('#in-border');
    let borderUp = document.querySelector('#up-border');
    const signInBody = document.querySelector('.sign-in-body');
    const signUpBody = document.querySelector('.sign-up-body');

    signInHead.classList.add('active-sign');
    borderIn.style.display = 'block';
    signUpHead.classList.remove('active-sign');
    borderUp.style.display = 'none';
    signInBody.style.display = 'block';
    signUpBody.style.display = 'none';
}


// //open-catalog-burger
const openCatalogBurger = () => {
    document.querySelector('.naw-catalog').classList.toggle('naw-catalog-active')
    accountModal.classList.remove('active')
    trashModal.classList.remove('active')
    likeModal.classList.remove('active')
}

const closeCatalogBurger = () => {
    document.querySelector('.naw-catalog').classList.remove('naw-catalog-active')
}


// //to first page
const toFirstPage = () => {
    window.location.href = './index.html'
}


// //localMashine
const localcatalogMashine = (catalogType) => {
    let catalog = catalogType
    localStorage.setItem('catalog', catalog)
}

const localSet = () => {
    localcatalogMashine('set')
    window.location.href = './catalog.html'
}

const localMashine = () => {
    localcatalogMashine('mashine')
    window.location.href = './catalog.html'
}

const localTaker = () => {
    localcatalogMashine('taker')
    window.location.href = './catalog.html'
}

const localWire = () => {
    localcatalogMashine('wire')
    window.location.href = './catalog.html'
}

const localPaint = () => {
    localcatalogMashine('paint')
    window.location.href = './catalog.html'
}

const localBlocks = () => {
    localcatalogMashine('blocks')
    window.location.href = './catalog.html'
}

const localTip = () => {
    localcatalogMashine('tip')
    window.location.href = './catalog.html'
}
const localNeedles = () => {
    localcatalogMashine('needles')
    window.location.href = './catalog.html'
}

const localProtaction = () => {
    localcatalogMashine('protaction')
    window.location.href = './catalog.html'
}

const localAccessories = () => {
    localcatalogMashine('accessories')
    window.location.href = './catalog.html'
}

const localLaptop = () => {
    localcatalogMashine('laptop')
    window.location.href = './catalog.html'
}


// //to error page
const toErrorPage = () => {
    window.location.href = './errorPage.html'
}


// const localTrash = () => {
//     const localPrice = document.querySelector('.summ-numb').textContent
//     const localNumb = document.querySelector('.trash-counter').textContent
//     const localCardImg = document.querySelectorAll('.trash-product-img').src
//     const cardImgArr = []
//     for(let i=0; i<cardImgArr.length; i++){
//         cardImgArr.push(localCardImg[i])
        
//     }

//     // console.log
//     // localStorage.setItem('cadTrImg', JSON.stringify(cardImgArr) )

//     // localStorage.setItem('priceVisual', localPrice)
//     // localStorage.setItem('countVisual', localNumb)
    
// }

// const getLocalTrash = () => {
//     const getlocal = localStorage.getItem('priceVisual')
//     const localPrice = document.querySelector('.summ-numb')
//     const summContainer = document.querySelector('.summ')
//     const getCount = localStorage.getItem('countVisual')
//     const localNumb = document.querySelector('.trash-counter')
//     if (localPrice.textContent !== 0) {
//         summContainer.style.display = 'block'
//     }
//     localPrice.innerHTML = getlocal
//     localNumb.innerHTML = getCount
// }



export { localcatalogMashine }

export {
    clickIconTrash, closeTrashIcon, trashProdPcus, trashChangeCount, trashMinusPr, sendTrash, confirmSending, closeSendBlock,
    changeCountItems, changeTrashImg, crossSendItems
}

export { openLikeContainer, closeLikeContainer, crossItemLike, crossAllitemsLike }
export { openRegerIcon, closeRegerIcon, logIn, signUp, toAcc, crossAccount, ChengeHeadSignUp, signIn }
export { openCatalogBurger, closeCatalogBurger, toFirstPage, toErrorPage }
export { localSet, localMashine, localTaker, localWire, localPaint, localBlocks, localTip, localNeedles, localProtaction, localAccessories, localLaptop }
export { finalSumm }
// export { localTrash, getLocalTrash }