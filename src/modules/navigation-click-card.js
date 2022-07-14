
import "../scss/card.scss"

let bigPicture = document.querySelector('.main-photo img');




const changeImg = (e) => {
    if (e.target.parentElement.classList.contains('image')) {
        bigPicture.src = e.target.src;
    }
    if (document.querySelectorAll('.active')) {
        document.querySelectorAll('.active').forEach(function (item) {
            item.classList.remove('active');
        })
    }
    if (document.querySelectorAll('.image')) {
        e.target.classList.add('active');
        console.log(e.target)
    }
}




const openInfo = () => {
    let blocked = document.querySelectorAll('.blocked')
    let closeInfo = document.querySelector('.close-text')
    let openInfo = document.querySelector('.open-text')
    let imgLine  = document.querySelector('.line-card')

    for (let i = 0; i < blocked.length; i++) {
        blocked[i].classList.remove('blocked')
    }

    closeInfo.classList.remove('not-active')
    openInfo.classList.add('not-active')
    imgLine.style.cssText = 'width: 72px; margine-bottom: 14px'
}

const closeInfo = () => {
    let blocked = document.querySelectorAll('.change')
    let closeInfo = document.querySelector('.close-text')
    let openInfo = document.querySelector('.open-text')
    let imgLine  = document.querySelector('.line-card')

    for (let i = 0; i < blocked.length; i++) {
        blocked[i].classList.add('blocked')
    }

    closeInfo.classList.add('not-active')
    openInfo.classList.remove('not-active')
    imgLine.style.cssText = 'width: 153px; margine-bottom: 12px'
}




//countProd
const plusProduct  = (e) =>{
    if (e.target.classList.contains('plus-product')) {
        let trashNumbProduct = e.target.previousElementSibling
        trashNumbProduct.value++
    }
}



const minusProduct  = (e) =>{
    if (e.target.classList.contains('minus-product')) {
        if (e.target.nextElementSibling.value > 1) {
            let trashNumbProduct = e.target.nextElementSibling
            trashNumbProduct.value--
        } else {
            let trashNumbProduct = e.target.nextElementSibling
            trashNumbProduct.value = 1
        }
    }
}




// const cardAddToTrash = (e) => {
//     if (e.target.classList.contains('share-to-trash')) {
//         const imgProduct = document.querySelector('.main-photo img').src
//         const textProduct = document.querySelector('h1')
//         const numb = document.querySelector('.inp-number').value
//         let priceNumb = Number(document.querySelector('.price-numb').textContent)
        
        
//         counterProd++
//         countProducts.innerHTML = counterProd
//         summ.style.display = 'block'

//     //     catalogBotyTrash.innerHTML += 
//     //    `<div class="trash-product-block">
//     //         <div class="trash-product-img-part">
//     //             <img src="${imgProduct}" class="trash-product-img">
//     //         </div>
//     //         <div class="trash-product-text-block">
//     //             <p class="trash-product-text">${textProduct}</p>
//     //         </div>
//     //         <div class="trash-counter-block">
//     //             <p class="trash-minus-product" data-btn="btn-neg">-</p>
//     //             <input type="text" class="trash-numb-product" value="${numb}">
//     //             <p class="trash-plus-product" data-btn="btn-pos">+</p>
//     //         </div>
//     //         <div class="trash-price-product-block">
//     //             <span class="counter-numb">${priceNumb}</span>
//     //             <p><span class="trash-price-product">${priceNumb}</span>$</p>
//     //         </div>
//     //         <p class="cross-trash-item">&#10007;</p>
//     //     </div>
        
//     //    ` 
//        finalSumm()
//     }
// }

// document.addEventListener('click', (e) => {
//     cardAddToTrash(e)
   
// })


export{changeImg,openInfo, closeInfo, plusProduct, minusProduct}