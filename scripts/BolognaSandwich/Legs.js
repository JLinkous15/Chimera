import { getLegs, setLegs } from "./database.js"

const legs = getLegs() 

export const Legs = () => { 
    let html = "<ul>" 

    const listItemArray = legs.map(
        (leg) => { 
            return `<li>
            <input type="radio" name="leg" value="${leg.id}"/> ${leg.name}</li>`
        }
    )

    html += listItemArray.join("")
    html += "</ul>"
    return html
}

document.addEventListener(
    "change", 
    (event) => { 
        if (event.target.name === "leg") { 
            setLegs(parseInt(event.target.value))
        }
    }
)