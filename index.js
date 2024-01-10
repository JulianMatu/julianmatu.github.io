//index.js

import Contact from "./Contact.js";

const formInfo = document.getElementById("formInfo");
const contactForm = document.getElementById("contactForm");

let hasJob = false;


if (hasJob) {
    //I have a job
    showMessage("Thank you for visiting. I'm currently employed. :)");
} else {
    //I need a job
    showMessage("Please look around, I'm currently looking for a poisition. :(");
}

let today = new Date();
let dayOfWeek = today.getDay();

if (dayOfWeek == 0 || dayOfWeek == 6) {
    showMessage("Since it is the weekend, please be patient with my returning your email.");
}

function showMessage(message) {
    formInfo.innerHTML = "<p>" + message + "</p";
}

function clearMessage() {
    formInfo.innerHTML = "";
}

//Message box submit
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const contact = new Contact(contactForm);
    contact.send();
});

const experiences = document.getElementsByClassName("experience");
for (let x = 0; x < experiences.length; x++) {
    const item = experiences[x];
    item.addEventListener("mouseenter", function(event) {
        event.target.style = "background-color: #999999;";
    });
    item.addEventListener("mouseleave", function(event) {
        event.target.style = "";
    });
}