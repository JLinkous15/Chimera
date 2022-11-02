/*
Export Getter Functions for each body part and custom orders
OrderBuilder assign foreign keys based on user selection
Export Setter Functions takes an argument (id) and assigns it as a foreign key to orderBuilder.
Export addCustomOrders() that:
  creates variable newOrder that returns orderBuilder
  creates variable lastIndex that stores database.customOrder.length-1
  newOrder.id = darabase.customOrder[lastIndex].id+1
  newOrder.timestamp=Date.now()
  dateabase.customOrder.push(newOrder)
  database.orderBuilder = {}
  dispatch event for stateChanged custom event
*/
const database = {
    customOrders : [
      {id: 1,
      headsId: 4,
      torsosId: 3,
      legsId: 3,
      tailsId: 2,
      armsId: 3,
      powersId: 1}
    ],
    orderBuilder: {},
    heads: [
      { id: 1, name: "Lion", price: 5.0, isCarnivore: true },
      { id: 2, name: "Eagle", price: 7.5, isCarnivore: true },
      { id: 3, name: "Snake", price: 2.5, isCarnivore: true },
      { id: 4, name: "Goat", price: 1.49, isCarnivore: false }
    ],
    torsos: [
      { id: 1, name: "Camel", price: 0.45, hasWings: false },
      { id: 2, name: "Bear", price: 0.35, hasWings: false },
      { id: 3, name: "Lion", price: 0.29, hasWings: false },
      { id: 4, name: "Eagle", price: 0.62, hasWings: true }
    ],
    legs: [
      { id: 1, name: "Horse", price: 3.79, isBipedal: false },
      { id: 2, name: "Lizard", price: 2.5, isBipedal: false },
      { id: 3, name: "Ostrich", price: 1.99, isBipedal: true }
    ],
    tails: [
      { id: 1, name: "Scorpion", price: 0.8, isVenomous: true },
      { id: 2, name: "Peacock", price: 0.72, isVenomous: false },
      { id: 3, name: "Lion", price: 0.94, isVenomous: false },
      { id: 4, name: "Lemur", price: 0.61, isVenomous: false }
    ],
    arms: [
      { id: 1, name: "Scorpion", price: 0.05, hasFingers: false },
      { id: 2, name: "Gorilla", price: 0.07, hasFingers: true },
      { id: 3, name: "Sloth", price: 0.03, hasFingers: true },
      { id: 4, name: "Praying Mantis", price: 0.09, hasFingers: false }
    ],
    powers: [
      { id: 1, size: "Lightning Breath" },
      { id: 2, size: "Ice Breath" },
      { id: 3, size: "Fire Breath" }
    ]
  };
  