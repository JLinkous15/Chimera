import { getHeads, setHeads, setHeadsPrice } from "../database.js"

const heads = getHeads() 

export const Heads = () => { 
    return `<ul class="selection-child">
    <p class="choose">Choose your Head</p>
            ${heads.map(head => `<li>
                <input type="radio" name="head" value="${head.id}--${head.price}"/> ${head.name}</li>`).join("")
            }
            </ul>`
}

document.addEventListener(
    "change", 
    (event) => { 
        if (event.target.name === "head") { 
            const [headId, headPrice] = event.target.value.split("--")
            setHeads(parseInt(headId))
            setHeadsPrice(parseFloat(headPrice))        
        }
    }
)