/*
Import bodyParts() from various bodyParts.js and Orders() from Orders.js 
and organize in an interpolated string.
Add button below radio buttons
*/

import { Arms } from "./Arms.js"
import { Legs } from "./Legs.js"
import { Heads } from "./Heads.js"
import { Powers } from "./Powers.js"
import { Tails } from "./Tails.js"
import { Torsos } from " ./Torsos.js"

export const Chimera = () => { 
    return `
    ${Arms()}
    ${Legs()}
    ${Heads()}
    ${Powers()}
    ${Tails()}
    ${Torsos()}`
}