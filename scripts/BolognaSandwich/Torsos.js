import { getTorsos, setTorsos, setTorsosPrice } from "../database.js"

const torsos = getTorsos() 

export const Torsos = () => { 
    return `<ul class="selection-child"> 
    <p class="choose">Choose your Torso</p>
    ${torsos.map(torso => `<li>
            <input type="radio" name="torso" value="${torso.id}--${torso.price}"/> ${torso.name}</li>`).join("")
        }
    </ul>`
}

document.addEventListener(
    "change", 
    (event) => { 
        if (event.target.name === "torso") { 
            const [torsoId, torsoPrice] = event.target.value.split("--")
            setTorsos(parseInt(torsoId))
            setTorsosPrice(parseFloat(torsoPrice))
        }
    }
)