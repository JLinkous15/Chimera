import { getTorsos, setTorsos } from "./database.js"

const torsos = getTorsos() 

export const Torsos = () => { 
    let html = "<ul>" 

    const listItemArray = torsos.map(
        (torso) => { 
            return `<li>
            <input type="radio" name="torso" value="${torso.id}"/> ${torso.name}</li>`
        }
    )

    html += listItemArray.join("")
    html += "</ul>"
    return html
}

document.addEventListener(
    "change", 
    (event) => { 
        if (event.target.name === "torso") { 
            setTorsos(parseInt(event.target.value))
        }
    }
)