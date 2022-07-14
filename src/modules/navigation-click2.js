import { getListProducts, getLimit, getRenderItems, getRenderHit, getRenderChecked } from "./server"
let hpCharacters = [];
const charactersList = document.querySelector('.searcher');
let btnElse = document.querySelector('.btn-block')


//server

import "../scss/catalog.scss"




// //getListProducts()    

const getAllProducts = async () => {
    const dataUniver = await getListProducts();
    const containerCards = document.querySelector('.cards');
    containerCards.innerHTML = '';
    dataUniver.forEach((post) => {
        containerCards.innerHTML += `
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
    document.querySelector('.cards').style.justifyContent = "normal"
    btnElse.style.display = 'none'
}
const newProducts = () => {
    getAllProducts()
    document.querySelector('.cards').style.justifyContent = "normal"
}

// //getMashineProduct


const renderCatalogAll = async () => {
    let localDisplayValue = localStorage.getItem('catalog');
    const dataCatalog = await getLimit(8);
    const containerCards = document.querySelector('.cards');
    let btnElse = document.querySelector('.btn-block')

    containerCards.innerHTML = '';
    dataCatalog.forEach((post) => {
        containerCards.innerHTML += `
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
    `
    })
    document.querySelector('.cards').style.justifyContent = "normal"
    btnElse.style.display = 'block'
}





const renderCatalogMashine = async () => {
    let localDisplayValue = localStorage.getItem('catalog');
    const dataCatalog = await getRenderItems(localDisplayValue);
    const containerCards = document.querySelector('.cards');
    let btnElse = document.querySelector('.btn-block')

    containerCards.innerHTML = '';
    dataCatalog.forEach((post) => {
        containerCards.innerHTML += `
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
    `
    })
    document.querySelector('.cards').style.justifyContent = "normal"
    btnElse.style.display = 'none'
}





// //getRenderHitkm'm



const renderCatalogHits = async () => {
    let localDisplayValue = localStorage.getItem('catalog');
    const dataCatalog = await getRenderHit(localDisplayValue);
    const containerCards = document.querySelector('.cards');
    let btnElse = document.querySelector('.btn-block')

    containerCards.innerHTML = '';
    dataCatalog.forEach((post) => {
        containerCards.innerHTML += `
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
        `
    })
    document.querySelector('.cards').style.justifyContent = "normal"
    btnElse.style.display = 'none'
}



// //renderByInputType


const renderCatalogTypes = async () => {
    const selectItems = document.querySelector('#sort-catalog').value
    const dataCatalog = await getRenderItems(selectItems);
    const containerCards = document.querySelector('.cards');
    let btnElse = document.querySelector('.btn-block')

    containerCards.innerHTML = '';
    dataCatalog.forEach((post) => {
        containerCards.innerHTML += `
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
        `
    })
    document.querySelector('.cards').style.justifyContent = "normal"
    btnElse.style.display = 'none'
}

const sortbyChange = () => {
    document.querySelector('#min-price').value = ""
    document.querySelector('#max-price').value = ""
    if (document.querySelector('#sort-catalog').value === 'all') {
        getAllProducts()
        document.querySelector('.cards').style.justifyContent = "normal"
    } else {
        renderCatalogTypes()
        document.querySelector('.cards').style.justifyContent = "normal"
    }
}


//inStock

const listInStock = async () => {
    const dataCatalog = await getRenderChecked('yes');
    const containerCards = document.querySelector('.cards');
    let btnElse = document.querySelector('.btn-block')

    containerCards.innerHTML = '';
    dataCatalog.forEach((post) => {
        containerCards.innerHTML += `
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
        `
    })

    btnElse.style.display = 'none'
    document.querySelector('.cards').style.justifyContent ="normal"
}


let inStockChecker = document.querySelector('#in-stock');
document.querySelector('#min-price').value = ""
document.querySelector('#max-price').value = ""
const instock = () => {
    inStockChecker.classList.toggle('checked');
    if (inStockChecker.classList.contains('checked')) {
        listInStock()
    } else {
        getAllProducts()
    }
    document.querySelector('.cards').style.justifyContent ="normal"
}



//sortByPrice

const listByPrice = async () => {
    const minV = document.querySelector('#min-price');
    const maxV = document.querySelector('#max-price');
    const dataCatalog = await getListProducts('');
    const containerCards = document.querySelector('.cards');
    let btnElse = document.querySelector('.btn-block')
    containerCards.innerHTML = '';

    dataCatalog.forEach((post) => {
        const numbPriceCard = Number(post.price)
        const numbMinV = Number(minV.value)
        const numbMaxV = Number(maxV.value)

        if ((numbPriceCard > numbMinV && numbPriceCard < numbMaxV)) {

            containerCards.innerHTML += `
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
            `
        }

    })
    document.querySelector('.cards').style.justifyContent ="normal"
    btnElse.style.display = 'none'
}

const maxPrice = () => {
    const minV = document.querySelector('#min-price');
    const maxV = document.querySelector('#max-price');
    listByPrice()
    if (minV.value === "" && maxV.value === "") {
        getAllProducts()
    }
    document.querySelector('.cards').style.justifyContent ="normal"
}




//seacher

const load = async () => {
    try {
        const res = await fetch(' http://localhost:3000/prod');
        hpCharacters = await res.json();
        return hpCharacters
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <div class="product-card">
                <div class="card-top-navigation">
                    <img src="./images/new pruduct.svg">
                    <img src="./images/heart.svg" class="card-heart card-like-icon">
                    <img src="images/gold-icon.svg" class="card-gold-heart not-active">
                </div>
                <img src="${character.imgProduct}">
                <div class="card-descr">
                    <p id="descr">${character.title}</p>
                    <p id="price"><span id="price-numb">${character.price}</span> ₽</p>
                </div>
                <div class="card-btn-box">
                    <button class="card-btn">В корзину</button>
                </div>
            </div>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
    btnElse.style.display = 'none'
};

const test = async () => {
    const hp = await load()
    console.log(hp)


    if (localStorage.getItem('catalog') === "seacher") {
        const getval = localStorage.getItem('valueInput')
        const filteredCharacters = hp.filter((character) => {
            return (
                character.title.toLowerCase().includes(getval) ||
                character.namePr.toLowerCase().includes(getval)
            );
        });
        console.log(filteredCharacters)
        displayCharacters(filteredCharacters);
    }
    document.querySelector('.cards').style.justifyContent ="normal"
    
}
//loadCharacters();



export { renderCatalogAll, newProducts, renderCatalogMashine, renderCatalogHits, instock, sortbyChange, maxPrice, test }

