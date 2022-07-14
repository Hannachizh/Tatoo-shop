import {getListUsers, postForm} from "./server.js"
import { signIn } from "./script1.js";


import "../scss/all.scss"


let inputNewUserName = document.querySelector('#newUserNic');
let inputNewPaswardName = document.querySelector('#newPasward');




///logIn
const validInputPhone = (autoFocus) => {
    let form = document.forms.signInForm;
    let phone = form.elements.userNic;
    let errorMessage = document.querySelector('.wrong-text1');
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



const validInputPasward = (autoFocus) => {
    let form = document.forms.signInForm;
    let pasward = form.elements.pasward;
    let errorMessage = document.querySelector('.wrong-text2');
    let errCount = 0;
    if (pasward.value.length < 8) {
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




const checkUsers = async () => {
    let formUsers = await getListUsers();
    const userPhone = document.querySelector('#userNic').value
    const pasward = document.querySelector('#pasward').value
    

    const crrentUser = {
        userPhone,
        pasward
    }
    isUser(formUsers, crrentUser)
    
}

const isUser = (allUsers, userInfo) => {
    const checkUser = allUsers.some(item => {
        localStorage.setItem("formD", JSON.stringify(item))
        return (
            item.userPhone === userInfo.userPhone &&
            item.pasward === userInfo.pasward
        )

    });
    if (!checkUser) {
        alert('enter enother');
        return false
    } else {
        window.location.href = './cabinet.html'
        
        return true
    }
}


const btnValidIn = (e) => {
    let form = document.forms.signInForm;
    let errCount = 0;

    errCount += validInputPhone(!errCount);
    errCount += validInputPasward(!errCount);

    if (errCount === 0) {
        checkUsers()
        e.preventDefault()
    }
    else {
        e.preventDefault()
        return !errCount
    }
} 




// //signUp
const validNewPhone = (autoFocus) => {
    let form = document.forms.signUpForm;
    let phone = form.elements.userNicNew;
    let errorMessage = document.querySelector('.wrong-text3');
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


const validNewPasward = (autoFocus) => {
    let form = document.forms.signUpForm;
    let pasward = form.elements.newPasward;
    let errorMessage = document.querySelector('.wrong-text4');
    let errCount = 0;
    if (pasward.value.length < 8) {
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


const validRepeatPasward = (autoFocus) => {
    let form = document.forms.signUpForm;
    let pasward = form.elements.newPasward;
    let repPasward = form.elements.repeatWasward;
    let errorMessage = document.querySelector('.wrong-text5');
    let errCount = 0;
    if (pasward.value !== repPasward.value || repPasward.value === '') {
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


const validName = (autoFocus) => {
    let form = document.forms.signUpForm;
    let userName = form.elements.userName;
    let errorMessage = document.querySelector(`.wrongText10`);
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


const validLastName = (autoFocus) => {
    let form = document.forms.signUpForm;
    let userName = form.elements.userLastname;
    let errorMessage = document.querySelector(`.wrongText11`);
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


const validFatherName = (autoFocus) => {
    let form = document.forms.signUpForm;
    let userName = form.elements.userfathername;
    let errorMessage = document.querySelector(`.wrongText12`);
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


const validCity = (autoFocus) => {
    let form = document.forms.signUpForm;
    let userName = form.elements.city;
    let errorMessage = document.querySelector(`.wrongText14`);
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


const validAdress = (autoFocus) => {
    let form = document.forms.signUpForm;
    let userName = form.elements.adress;
    let errorMessage = document.querySelector(`.wrongText15`);
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


const validRegMail = (autoFocus) => {
    let form = document.forms.signUpForm;
    let eMails = form.elements.eMail;
    let errorMessage = document.querySelector('.wrongText13');
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


const solveInfo = (autoFocus) => {
    let sulver = document.getElementById('checkInp')
    let errorMessage = document.querySelector('.wrongText16');
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



const FindUsers = async () => {
    let formUser = await getListUsers();
    const userPhone = document.querySelector('#newUserNic').value
    const email = document.querySelector('#new-e').value
    

    const curentUser = {
        userPhone,
        email
    }
    isNotNewUser(formUser, curentUser)
    
}

const isNotNewUser = (allUsers, userInfo) => {
    
    const checkUser = allUsers.some(item => {
        return (
            item.userPhone === userInfo.userPhone ||
            item.email === userInfo.email
        )

    });
    if (checkUser) {
        alert('такой пользователь уже существукет');
        return false
    } else {
        postForm()
        inputNewUserName.value = '';
        inputNewPaswardName.value = '';
        signIn()
        return true
    }
}


const btnSignUp = (e) => {
    let inputNewUserName = document.querySelector('#newUserNic');
    let inputNewPaswardName = document.querySelector('#newPasward');
    let errCount = 0;
    errCount += validNewPhone(!errCount);
    errCount += validNewPasward(!errCount);
    errCount += validRepeatPasward(!errCount);
    errCount += validName(!errCount);
    errCount += validLastName(!errCount);
    errCount += validFatherName(!errCount);
    errCount += validCity(!errCount);
    errCount += validAdress(!errCount);
    errCount += validRegMail(!errCount);
    errCount += solveInfo(!errCount);

    if (errCount === 0) {
        FindUsers()
        e.preventDefault()
        
    }
    else {
        e.preventDefault()
        return !errCount
    }
}



export {validInputPhone, validInputPasward, btnValidIn}
export {validNewPhone, validNewPasward, validRepeatPasward, validName, validLastName, validFatherName, validCity, validAdress, validRegMail, solveInfo, btnSignUp}
