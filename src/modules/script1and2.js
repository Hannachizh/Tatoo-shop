import {finalSumm} from "./script1.js"
// import {localTrash} from "./script1"

import "../scss/all.scss"
import "../scss/style.scss"
import "../scss/catalog.scss"


let counterProd = 0
let countProducts = document.querySelector('.trash-counter')
let summ = document.querySelector('.summ');
const catalogBotyTrash = document.querySelector('.catalog-trash')

//createTrashItems

const generateTrashProduct = (e) => {
    if (e.target.classList.contains('card-btn')) {
        const imgProduct = e.target.parentElement.previousElementSibling.previousElementSibling.src
        const textProduct = e.target.parentElement.previousElementSibling.firstElementChild.textContent
        
        
        let priceNumb = Number(e.target.parentElement.previousElementSibling.lastElementChild.firstElementChild.textContent)
        counterProd++
        countProducts.innerHTML = counterProd
        summ.style.display = 'block'

        catalogBotyTrash.innerHTML += 
       `<div class="trash-product-block">
            <div class="trash-product-img-part">
                <img src="${imgProduct}" class="trash-product-img">
            </div>
            <div class="trash-product-text-block">
                <p class="trash-product-text">${textProduct}</p>
            </div>
            <div class="trash-counter-block">
                <p class="trash-minus-product" data-btn="btn-neg">-</p>
                <input type="text" class="trash-numb-product" value="1">
                <p class="trash-plus-product" data-btn="btn-pos">+</p>
            </div>
            <div class="trash-price-product-block">
                <span class="counter-numb">${priceNumb}</span>
                <p><span class="trash-price-product">${priceNumb}</span>$</p>
            </div>
            <p class="cross-trash-item">&#10007;</p>
        </div>
        
       ` 
       finalSumm()
    }
    //localTrash()
}


//likecard

const generateLikeIcon = (e) => {
    if (e.target.classList.contains('card-heart')) {
        const imgProduct = e.target.parentElement.nextElementSibling.src
        const textProduct = e.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.textContent
        let priceNumb = Number(e.target.parentElement.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.textContent)
        e.target.classList.toggle('not-active')
        e.target.nextElementSibling.classList.toggle('not-active')
        

        document.querySelector('.catalog-like').innerHTML += 
        `<div class="trash-product-block">
        <div class="trash-product-img-part">
            <img src="${imgProduct}" class="trash-product-img">
        </div>
        <div class="trash-product-text-block">
            <p class="trash-product-text like-item-text">${textProduct}</p>
        </div>
        <div class="trash-price-product-block">
            <p><span class="trash-price-product">${priceNumb}</span>$</p>
        </div>
        <p class="cross-like-item">&#10007;</p>
    </div>`
    
    }
    if (e.target.classList.contains('card-gold-heart')) {
        const textProduct = e.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.textContent
        e.target.classList.toggle('not-active')
        e.target.previousElementSibling.classList.toggle('not-active')
        const allLikeProducts = document.querySelectorAll('.like-item-text')
        for(let i=0; i<allLikeProducts.length;i++){
            if(allLikeProducts[i].textContent === textProduct){
                allLikeProducts[i].parentElement.parentElement.remove()
            }
        }
       
    }
}

export {generateTrashProduct, generateLikeIcon}