import {getResource} from "./server"



const URL_SUBSC = 'http://localhost:3000/subscribe'

const getListSubsc = async () => {
    const data = await getResource(`${URL_SUBSC}`);
    console.log(data)
    return data;
}


const postSubscribe = () => {
    const subscName = document.forms.confirmForm.elements.userName
    const subscMail = document.forms.confirmForm.elements.eMail

    fetch('http://localhost:3000/subscribe', {
        method: 'POST',
        body: JSON.stringify({
            "userName": subscName.value,
            "email": subscMail.value
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

export {getListSubsc, postSubscribe}

