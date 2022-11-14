/*
Rendering HTML, importing HTML from Chimera.js, stateChange custom event listener?
*/

import { Chimera } from "./Chimera.js"

const mainContainer = document.querySelector("#mainContainer")

const renderAllHTML = () => {
    mainContainer.innerHTML = Chimera()
}

renderAllHTML()

document.addEventListener(
    "stateChanged",
    (e)=>{
        renderAllHTML()
    }
)