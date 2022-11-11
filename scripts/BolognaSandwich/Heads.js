import { getHeads, setHeads } from "./database.js"

const heads = getHeads() 

export const Heads = () => { 
    let html = "<ul>" 

    const listItemArray = heads.map(
        (head) => { 
            return `<li>
            <input type="radio" name="head" value="${head.id}"/> ${head.name}</li>`
        }
    )

    html += listItemArray.join("")
    html += "</ul>"
    return html
}

document.addEventListener(
    "change", 
    (event) => { 
        if (event.target.name === "head") { 
            setHeads(parseInt(event.target.value))
        }
    }
)