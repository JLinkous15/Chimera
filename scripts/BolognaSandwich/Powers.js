import { getPowers, setPowers } from "./database.js"

const powers = getPowers() 

export const Powers = () => { 
    let html = "<ul>" 

    const listItemArray = powers.map(
        (power) => { 
            return `<li>
            <input type="radio" name="power" value="${power.id}"/> ${power.name}</li>`
        }
    )

    html += listItemArray.join("")
    html += "</ul>"
    return html
}

document.addEventListener(
    "change", 
    (event) => { 
        if (event.target.name === "power") { 
            setPowers(parseInt(event.target.value))
        }
    }
)