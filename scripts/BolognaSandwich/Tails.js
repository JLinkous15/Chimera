import { getTails, setTails, setTailsPrice } from "../database.js"

const tails = getTails() 

export const Tails = () => { 
    return`<ul class="selection-child">
    <p class="choose">Choose your Tail</p>
    ${tails.map(tail => `<li>
            <input type="radio" name="tail" value="${tail.id}--${tail.price}"/> ${tail.name}</li>`).join("")
        }
        </ul>`
}

document.addEventListener(
    "change", 
    (event) => { 
        if (event.target.name === "tail") { 
            const [tailId, tailPrice] = event.target.value.split("--")
            setTails(parseInt(tailId))
            setTailsPrice(parseFloat(tailPrice))
        }
    }
)