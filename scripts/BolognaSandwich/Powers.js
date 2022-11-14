import { getPowers, setPowers } from "../database.js"

const powers = getPowers() 

export const Powers = () => { 
    return `<ul class="selection-child">
        <p class="choose">Select Your Powers</p>
        ${powers.map(power => `
        <li><input type="radio" name="power" value="${power.id}"/> ${power.size}</li>`).join("")}</ul>`
}

document.addEventListener(
    "change", 
    (event) => { 
        if (event.target.name === "power") { 
            setPowers(parseInt(event.target.value))
        }
    }
)