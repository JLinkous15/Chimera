const database = {
    customOrders:[
    ],
    orderBuilder:{},
    heads:[
      { id: 1, name: "Lion", price: 5.0, isCarnivore: true },
      { id: 2, name: "Eagle", price: 7.5, isCarnivore: true },
      { id: 3, name: "Snake", price: 2.5, isCarnivore: true },
      { id: 4, name: "Goat", price: 1.49, isCarnivore: false }
    ],
    torsos:[
      { id: 1, name: "Camel", price: 0.45, hasWings: false },
      { id: 2, name: "Bear", price: 0.35, hasWings: false },
      { id: 3, name: "Lion", price: 0.29, hasWings: false },
      { id: 4, name: "Eagle", price: 0.62, hasWings: true }
    ],
    legs:[
      { id: 1, name: "Horse", price: 3.79, isBipedal: false },
      { id: 2, name: "Lizard", price: 2.5, isBipedal: false },
      { id: 3, name: "Ostrich", price: 1.99, isBipedal: true }
    ],
    tails:[
      { id: 1, name: "Scorpion", price: 0.8, isVenomous: true },
      { id: 2, name: "Peacock", price: 0.72, isVenomous: false },
      { id: 3, name: "Lion", price: 0.94, isVenomous: false },
      { id: 4, name: "Lemur", price: 0.61, isVenomous: false }
    ],
    arms:[
      { id: 1, name: "Scorpion", price: 0.05, hasFingers: false },
      { id: 2, name: "Gorilla", price: 0.07, hasFingers: true },
      { id: 3, name: "Sloth", price: 0.03, hasFingers: true },
      { id: 4, name: "Praying Mantis", price: 0.09, hasFingers: false }
    ],
    powers:[
      { id: 1, size: "Lightning Breath" },
      { id: 2, size: "Ice Breath" },
      { id: 3, size: "Fire Breath" }
    ],
    contacts:[
      {id: 1, name:"James Linkous", src:"images/James.jpg", github: "https://github.com/JLinkous15", linkedIn: "www.linkedin.com/in/james-william-linkous"},
      {id: 2, name:"Lauren Hanson", github: "", linkedIn: ""}
    ]
  };


  export const getContacts = () => { 
    return database.contacts.map(contact => ({...contact}))
  }

  /* HEADS */ 
  export const getHeads = () => { 
    return database.heads.map(head => ({...head}))
  }

  export const setHeads = (id) => { 
    database.orderBuilder.headsId = id
  }

  export const setHeadsPrice = (price) => {
    return database.orderBuilder.headPrice=price
  }


  /* TORSOS */ 
  export const getTorsos = () => { 
    return database.torsos.map(torso => ({...torso}))
  }

  export const setTorsos = (id) => { 
    database.orderBuilder.torsosId = id
  }

  export const setTorsosPrice = (price) => {
    return database.orderBuilder.torsoPrice=price
  }

  /* LEGS */ 
  export const getLegs = () => { 
    return database.legs.map(leg => ({...leg}))
  }

  export const setLegs = (id) => { 
    database.orderBuilder.legsId = id
  }

  export const setLegsPrice = (price) => {
    return database.orderBuilder.legPrice=price
  }

  /*TAILS*/ 
  export const getTails = () => { 
    return database.tails.map(tail => ({...tail}))
  }

  export const setTails = (id) => { 
    database.orderBuilder.tailsId = id
  }

  export const setTailsPrice = (price) => {
    return database.orderBuilder.tailPrice=price
  }

  /* ARMS */ 
  export const getArms = () => { 
    return database.arms.map(arm => ({...arm}))
  }

  export const setArms = (id) => { 
    database.orderBuilder.armsId = id
  }

  export const setArmsPrice = (price) => {
    return database.orderBuilder.armPrice=price
  }

  /* POWERS */ 
  export const getPowers = () => { 
    return database.powers.map(power => ({...power}))
  }
  
  export const setPowers = (id) => { 
    database.orderBuilder.powersId = id
  }

  /* ORDERS */ 
  export const getOrders = () => { 
    return database.customOrders.map(order => ({...order}))
  }

  export const addCustomOrder = () => { 
    const orderBuilder = database.orderBuilder
    const newOrder = orderBuilder
  
    if(database.customOrders.length>0){
      const lastIndex = database.customOrders.length - 1
      newOrder.id = database.customOrders[lastIndex].id + 1
    }else{
      newOrder.id=1
    }
    newOrder.price = (orderBuilder.armPrice+orderBuilder.headPrice+orderBuilder.legPrice+orderBuilder.tailPrice+orderBuilder.torsoPrice)

    newOrder.timestamp = Date.now()
    
    database.customOrders.push(newOrder) 

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))


  }
  