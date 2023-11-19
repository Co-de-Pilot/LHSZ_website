$(document).ready(function(){
    $('nav ul.toggle').click(function(){
          $(this).toggleClass('active');
          $('nav ul.menu').toggleClass('active');
    })
})
$(document).ready(function(){
    $('aside .aside_toggle').click(function(){
          $(this).toggleClass('active');
          $('aside .aside_content').toggleClass('active');
    })
})

const form = document.querySelector('form');
const fullName = document.querySelector('name');
const email = document.querySelector('email');
const phonenumber = document.querySelector('phone-number');
const subject = document.querySelector('subject');
const message = document.querySelector('message');

function sendEmail() {
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
}

function checkInputs() {
    const items = document.querySelectorAll('.form-item');

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        item.addEventListener("keyup", () => {
            if (item.value == "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault;
    checkInputs();

    sendEmail;
})