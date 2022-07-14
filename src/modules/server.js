import 'regenerator-runtime/runtime';

import "../scss/all.scss"
import "../scss/style.scss"


const URL_FORM = 'http://localhost:3000/data';
const PRODUCTS_API = 'http://localhost:3000/prod';
const ONE_PRODUCT_API = 'http://localhost:3000/prod?namePr=';
const URL_LIMIT_PRODUCTS = 'http://localhost:3000/prod?type=';
const URL_INSTOCK_PRODUCTS = 'http://localhost:3000/prod?inStock=';
// const URL_PRICELIMIT_PRODUCTS = 'http://localhost:3000/prod?price=';
// const CLIENTS_API = 'http://localhost:3000/info';
const URL_LIMIT = 'http://localhost:3000/prod?_limit=';


const getResource = async (url) => {
    try {
        const res = await fetch(url);
        return res.json();
    } catch (err) {
        throw new Error(`!!!!!!!!!!! ${err}`)
    }
}


const getListUsers = async () => {
    const data = await getResource(`${URL_FORM}`);
    console.log(data)
    return data;
}


//getListUsers()

const postForm = () => {
    const inputNewUserName = document.querySelector('#newUserNic').value;
    const inputNewPaswardName = document.querySelector('#newPasward').value;
    const inpNewName = document.querySelector('#new-user-name').value;
    const inpNewLastName = document.querySelector('#user-Lastname').value;
    const inpNewFatherName = document.querySelector('#user-fathername').value;
    const inpMail = document.querySelector('#new-e').value;
    const inpSity = document.querySelector('#city').value;
    const inpAdress = document.querySelector('#adress').value;



    fetch('http://localhost:3000/data', {
        method: 'POST',
        body: JSON.stringify({
            "userName": inpNewName,
            "lastName": inpNewLastName,
            "fatherName": inpNewFatherName,
            "userPhone": inputNewUserName,
            "email": inpMail,
            "sity": inpSity,
            "adress": inpAdress,
            "pasward": inputNewPaswardName
        }),
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    }).then(
        res => {
            return res.json();
        }
    ).then(
        data => {
            console.log('POST:', data);
        }
    )
}


// //postTrash




const postClients = () => {
    const clientName = document.forms.sendProductsForm.elements.userName
    const clientLastName = document.forms.sendProductsForm.elements.userLastname
    const clientFatherName = document.forms.sendProductsForm.elements.userfathername
    const clientPhone = document.forms.sendProductsForm.elements.userNicNew
    const clientMail = document.forms.sendProductsForm.elements.eMail
    const clientCity = document.forms.sendProductsForm.elements.city
    const clientAdress = document.forms.sendProductsForm.elements.adress
    const collOne = document.querySelectorAll('.col1')
    const collThree = document.querySelectorAll('.col3')
    const collResPrice = document.querySelector('.collumn-price')
    const arrCol = []
    for(let i=0; i< collOne.length; i++){
        arrCol.push(`${collOne[i].textContent}(${collThree[i].textContent})`)
    }
    arrCol

    fetch('http://localhost:3000/info', {
        method: 'POST',
        body: JSON.stringify({
            "userName": clientName.value,
            "lastName": clientLastName.value,
            "fatherName": clientFatherName.value,
            "userPhone": clientPhone.value,
            "email": clientMail.value,
            "sity": clientCity.value,
            "adress": clientAdress.value,
            "resPrice": collResPrice.textContent,
            "products": arrCol
        }),
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    }).then(
        res => {
            return res.json();
        }
    ).then(
        data => {
            console.log('POST:', data);
        }
    )
    
}




// ///

const getListProducts = async () => {
    const data = await getResource(`${PRODUCTS_API}`);
    return data;
}





// //getItems

const getRenderItems = async (namePr = "mashine") => {
    const prod = await getResource(`${ONE_PRODUCT_API}${namePr}`);
    return prod;
}

// getRenderItems()

//getLimitItems

const getRenderLimit = async (type = 'hit', limit = 8) => {
    const prod = await getResource(`${URL_LIMIT_PRODUCTS}${type}`);
    const prodLimit = prod.slice(0, limit);
    return prodLimit
}

const getLimit = async ( limit = 8) => {
    const prod = await getResource(`${URL_LIMIT}${limit}`);
    return prod
}
// getLimit(8)


// //getInStock
const getRenderChecked = async (inStock = 'yes') => {
    const prod = await getResource(`${URL_INSTOCK_PRODUCTS}${inStock}`);
    return prod
}





const getRenderHit = async (type = 'hit') => {
    const prod = await getResource(`${URL_LIMIT_PRODUCTS}${type}`);
    return prod
}

// getRenderHit('hit')

export {getRenderLimit}
export {getResource}
export {getListUsers, postForm}
export {postClients}
export {getListProducts, getLimit, getRenderItems, getRenderHit, getRenderChecked}
