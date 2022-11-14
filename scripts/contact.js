import { getContacts } from "./database.js"


export const Contacts = () => {
    const contacts = getContacts()
    return `${contacts.map(contact=>`
    <div class="eCard">
        <img class="eCard-img" src="${contact.src}" alt="${contact.name}"/>
        <ul class="eCard-content">
            <li class="name">${contact.name}</li>
            <li><a href="${contact.github}">${contact.github}</a></li>
            <li><a href="${contact.linkedIn}">${contact.linkedIn}</a></li>
        </ul>
    </div>`)}`
}