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



const form = document.querySelector('form');
const fullName = document.querySelector('name');
const email = document.querySelector('email');
const phonenumber = document.querySelector('phone-number');
const subject = document.querySelector('subject');
const message = document.querySelector('message');

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

function checkInputs() {
    const items = document.querySelectorAll('.form-item');

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error-txt");
            item.parentElement.classList.add("error-txt");
        }

        item.addEventListener("keyup", () => {
            if (item.value == "") {
                item.classList.remove("error-txt");
                item.parentElement.classList.remove("error-txt");
            } else {
                item.classList.add("error-txt");
                item.parentElement.classList.add("error-txt");
            }
        });
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault;
    checkInputs();

    /* sendEmail; */
})