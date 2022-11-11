import { getTails, setTails } from "./database.js"

const tails = getTails() 

export const Tails = () => { 
    let html = "<ul>" 

    const listItemArray = tails.map(
        (tail) => { 
            return `<li>
            <input type="radio" name="tail" value="${tail.id}"/> ${tail.name}</li>`
        }
    )

    html += listItemArray.join("")
    html += "</ul>"
    return html
}

document.addEventListener(
    "change", 
    (event) => { 
        if (event.target.name === "tail") { 
            setTails(parseInt(event.target.value))
        }
    }
)