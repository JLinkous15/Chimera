/*
import get function for arms
import set function for arms
export function that returns HTML string for the label and radio buttons <ul><li></li></ul>
addEventListener("change",(e)=>{ invokes setter functions})
    if(target === e.target.id){(figure it out)}
*/

import { getArms, setArms, setArmsPrice } from "../database.js"

const arms = getArms() 

export const Arms = () => { 
    return `<ul class="selection-child"> 
        <p class="choose">Choose your Arms</p>
        ${arms.map(arm => `<li>
            <input type="radio" name="arm" value="${arm.id}--${arm.price}"> ${arm.name}</li>`
        ).join("")}
        </ul>`
}

document.addEventListener(
    "change", 
    (event) => { 
        if (event.target.name === "arm") { 
            const [armId, armPrice] = event.target.value.split("--")
            setArms(parseInt(armId))
            setArmsPrice(parseFloat(armPrice))
        }
    }
)