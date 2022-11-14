import { Contacts } from "./contact.js"
const contactContainer = document.querySelector("#contactContainer")

const renderContactHTML = () => {contactContainer.innerHTML = Contacts()}

renderContactHTML()