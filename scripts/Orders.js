/*
declare buildOrdersListItem that:
    declares variables for getter functions
    declares variables  to store the results of applying .find to our getting objects and testing the 
    values between primary keys and foreign keys
    declares variables totalCost that adds the found price of each body part
    returns list itemhas the order id and the order price.
export Orders() that:
    declares variable that stores the invoked value of getOrders()
    create an html string <ul>
    orders.map(buildOrdersListItem).join("")
    </ul> 
    return html string
*/
import { getOrders, getArms, getHeads, getLegs, getPowers, getTails, getTorsos, addCustomOrder } from "./database.js"

const arms = getArms()
const heads = getHeads()
const legs = getLegs()
const powers = getPowers()
const tails = getTails()
const torsos = getTorsos()

export const Orders = () => {
    const orders = getOrders()
    return `<h1 id="order-title">Completed Orders</h1>
        <ul id="order-list">
            ${orders.map((order)=>{
                const filteredArms = arms.find(arm=>arm.id===order.armsId)
                const filteredHeads = heads.find(head=>head.id===order.headsId)
                const filteredLegs = legs.find(leg=>leg.id===order.legsId)
                const filteredPowers = powers.find(power=>power.id===order.powersId)
                const filteredTails = tails.find(tail=>tail.id===order.tailsId)
                const filteredTorsos = torsos.find(torso=>torso.id===order.torsosId)
                return`<li>Your Chimera, with the arms of a ${filteredArms.name}, the legs of a ${filteredLegs.name}, the head of a ${filteredHeads.name}, the tail of a ${filteredTails.name}, the torso of a ${filteredTorsos.name}, and the power to ${filteredPowers.size} Costs$${order.price}</li>`})
            }
            </ul>`
}

document.addEventListener("click",
(e) => {
    if(e.target.id==="order-button"){
        addCustomOrder()
    }
})