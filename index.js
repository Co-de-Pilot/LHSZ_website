/*MENU TOGGLE vezérlése*/
const menuToggle = document.querySelector('nav ul.toggle');
const menuList = document.querySelector('nav ul.menu');

menuToggle.addEventListener('click', () => {
    const menuActiveItems = document.querySelectorAll('.menu-active');
    menuActiveItems.forEach(menuActiveItem => {
        menuActiveItem.classList.remove("menu-active");
    })
    if(menuActiveItems.length == 0) {
        menuToggle.classList.add("menu-active");
        menuList.classList.add("menu-active");
    }
})

/*ASIDE TOGGLE vezérlése*/
const asideToggle = document.querySelector('aside .aside_toggle');
const asideList = document.querySelector('aside .aside_content');

asideToggle.addEventListener('click', () => {
    const asideActiveItems = document.querySelectorAll('.aside-active');
    asideActiveItems.forEach(asideActiveItem => {
        asideActiveItem.classList.remove("aside-active");
    })
    if(asideActiveItems.length == 0) {
        asideToggle.classList.add("aside-active");
        asideList.classList.add("aside-active");
    }
})

/*FLIGHTINFO TOGGLE vezérlése*/
const flightinfoToggle = document.querySelector('.flightinfo .flightinfo-toggle');
const flightinfoList = document.querySelector('.flightinfo .flightinfo-menu');

flightinfoToggle.addEventListener('click', () => {
    const flightinfoActiveItems = document.querySelectorAll('.flightinfo-active');
    flightinfoActiveItems.forEach(flightinfoActiveItem => {
        flightinfoActiveItem.classList.remove("flightinfo-active");
    })
    if(flightinfoActiveItems.length == 0) {
        flightinfoToggle.classList.add("flightinfo-active");
        flightinfoList.classList.add("flightinfo-active");
    }
})



/* const form = document.querySelector('form');
const fullName = document.querySelector('name');
const phonenumber = document.querySelector('phone-number');
const subject = document.querySelector('subject');
const message = document.querySelector('message'); */

/* function sendEmail() {
    const bodyMessage = 'Név: ${fullName.value}<br> Email-cím: ${email.value}<br> Telefonszám: ${phonenumber.value}<br> Üzenet szövege: ${message.value}';
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "piratosnogi@gmail.com",
        Password : "8C30EE9D006DAEB47AEE27B09F52AD9EBFAA",
        To : 'piratosnogi@gmail.com',
        From : "piratosnogi@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => alert(message)
        );
    } */
    
const submitButton = document.querySelector('form button.glowing-button');
const email = document.querySelector('.field #email');
const phoneNumber = document.querySelector('.field #phone-number');
const form = document.querySelector('.contact-form');
const items = document.querySelectorAll('.form-item');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    checkInputs();
    let correctFormInput = true;
    for (const item of items) {
        if (item.classList.contains("blank") || item.classList.contains("error")) {
            correctFormInput = false;
        }
    }
    if (correctFormInput) {
        form.submit();
        form.reset();
    }
})


function checkInputs() {
    
    for (const item of items) {
        if (item.value == "") {
            item.classList.add("blank");
            item.parentElement.classList.add("blank");
        }
        if (items[1].value != "") {
            checkEmail();
        }
        if (items[2].value != "") {
            checkPhoneNumber();
        }

        items[1].addEventListener('keyup', (event) => {
            checkEmail();
        });
        items[2].addEventListener('keyup', (event) => {
            checkPhoneNumber();
        });
        
        item.addEventListener('keyup', (event) => {            
            if (item.value != "") {
                item.classList.remove("blank");
                item.parentElement.classList.remove("blank");
            } else {
                item.classList.add("blank");
                item.parentElement.classList.add("blank");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    
    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");
    } else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

function checkPhoneNumber() {
/*     const phoneNumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/; */
    const phoneNumberRegex = /^\+(?:[0-9]●?){6,14}[0-9]$/;
    
    if (!phoneNumber.value.match(phoneNumberRegex)) {
        phoneNumber.classList.add("error");
        phoneNumber.parentElement.classList.add("error");
    } else {
        phoneNumber.classList.remove("error");
        phoneNumber.parentElement.classList.remove("error");
    }
}

/* form.addEventListener('submit', (e) => {
    e.preventDefault;
    checkInputs();

    sendEmail;
}) */