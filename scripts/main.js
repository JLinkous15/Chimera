/*
Rendering HTML, importing HTML from Chimera.js, stateChange custom event listener?
*/

import { Chimera } from "./Chimera.js"

const mainContainer = document.querySelector("#indexContainer")

const renderAllHTML = () => {
    mainContainer.innerHTML = Chimera()
}

renderAllHTML()