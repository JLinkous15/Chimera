/*
import get function for arms
import set function for arms
export function that returns HTML string for the label and radio buttons <ul><li></li></ul>
addEventListener("change",(e)=>{ invokes setter functions})
    if(target === e.target.id){(figure it out)}
*/

import { getArms, setArms } from "./database.js"

const arms = getArms() 

export const Arms = () => { 
    let html = "<ul>" 

    const listItemArray = arms.map(
        (arm) => { 
            return `<li>
            <input type="radio" name="arm" value="${arm.id}"> ${arm.name}</li>`
        }
    )

    html += listItemArray.join("")
    html += "</ul>"
    return html
}

document.addEventListener(
    "change", 
    (event) => { 
        if (event.target.name === "arm") { 
            setArms(parseInt(event.target.value))
        }
    }
)