import { getLegs, setLegs, setLegsPrice } from "../database.js"

const legs = getLegs() 

export const Legs = () => { 
    return `<ul class="selection-child">
    <p class="choose">Choose your Legs</p>
            ${legs.map(leg => `<li>
            <input type="radio" name="leg" value="${leg.id}--${leg.price}"/> ${leg.name}</li>`).join("")
        }
   </ul>`
}

document.addEventListener(
    "change", 
    (event) => { 
        if (event.target.name === "leg") { 
            const [legId, legPrice] = event.target.value.split("--")
            setLegs(parseInt(legId))
            setLegsPrice(parseFloat(legPrice))
        }
    }
)