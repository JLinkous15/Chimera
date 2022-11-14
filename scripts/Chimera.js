/*
Import bodyParts() from various bodyParts.js and Orders() from Orders.js 
and organize in an interpolated string.
Add button below radio buttons
*/

import { Arms } from "./BolognaSandwich/Arms.js"
import { Legs } from "./BolognaSandwich/Legs.js"
import { Heads } from "./BolognaSandwich/Heads.js"
import { Powers } from "./BolognaSandwich/Powers.js"
import { Tails } from "./BolognaSandwich/Tails.js"
import { Torsos } from "./BolognaSandwich/Torsos.js"
import { Orders } from "./Orders.js"

export const Chimera = () => { 
    return`
    <div id="selections-parent">
    ${Arms()}
    ${Legs()}
    ${Heads()}
    ${Powers()}
    ${Tails()}
    ${Torsos()}
    </div>
    <button id="order-button" class="button">Build Your Chimera</button>
    <div id=orders>
    ${Orders()}
    </div>`
}
