function trimProperties(obj) {
  // ✨ implement
  let newObj = {}
  for (let prop in obj) {
    newObj = {...newObj, [prop]: obj[prop].trim()}
  }
  return newObj
}

function trimPropertiesMutation(obj) {  
  for (let prop in obj) {
    obj[prop] = obj[prop].trim()
  }
  return obj
}

function findLargestInteger(integers) {
  let count = 0

  for (let i = 0 ; i < integers.length; i++){
    let obj = integers[i]
    for (let prop in obj){
      if (obj[prop] > count) {
        count = obj[prop]
      }  
    }
  }
  return count 
}

class Counter {

  constructor(initialNumber) {
    // ✨ initialize whatever properties are needed
    this.number = initialNumber
    this.iteration = 0 
  }

  countDown() {
    if (this.iteration === 0) {
      this.iteration += 1
      return this.number
    } else {
      if (this.number === 0) {
        this.iteration += 1
        return this.number 
      } else {
        this.iteration +=1
        return this.number -= 1
      }     
    }
  }
}

class Seasons {

  constructor() {
    // ✨ initialize whatever properties are needed
    this.seasons = ['summer', 'fall', 'winter', 'spring']
    this.i = 0
  }

  next() {  
    if (this.i >= this.seasons.length) {
      this.i = 0  
    }
    if (this.i <= 0) {
      this.i++
      return this.seasons[0] 
    }

    if (this.i > 0 && this.i <= this.seasons.length) {
      this.i++
      return this.seasons[this.i-1]
    }  
  }
}

// const seasons = new Seasons()
//  seasons.next()
//  seasons.next()
//  seasons.next()
//  seasons.next()
// console.log(seasons.next())


class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.odometer = 0 // car initilizes with zero miles
    this.tank = tankSize // car initiazes full of gas
    this.mpg = mpg
    this.fuel= tankSize
    // ✨ initialize whatever other properties are needed
  }

  drive(distance) {
    const max = parseInt(this.fuel * this.mpg)
    let gasConsumption = (parseInt(distance) / this.mpg)
    
    if ((this.fuel - gasConsumption) >= 0) {
      this.odometer += distance
      this.fuel -= Number(gasConsumption) 
      return this.odometer   
    }
    else {
      
      this.fuel = 0
      this.odometer += max 
      return this.odometer
      
    }  
    
  }
  
  refuel(gallons) {
    // ✨ implement
    let possibleMiles = this.fuel * this.mpg
    if (gallons + this.fuel <= this.tank) {
      this.fuel += gallons
      return possibleMiles
    } else {
      this.fuel = this.tank
      return possibleMiles
    }
  }
}

// const focus = new Car('focus', 20, 30)
//   focus.drive(100) // returns 100
//   focus.drive(600) // returns 200
//  focus.drive(100) // returns 300
//   focus.drive(200) // returns 500
//   //focus.drive(200) // returns 600 
//   focus.refuel(4)
//    focus.refuel(8)
//    focus.refuel(8)
//   // focus.refuel(8)
//    focus.drive(100)
  //  focus.drive(100)
  //  focus.drive(100)
  //  focus.drive(100)
  //  focus.drive(100)
  //  focus.drive(100)
  

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 */
async function isEvenNumberAsync (number) {

  if (number % 2 === 0) {
    return true
  } else {
    return false
  }
}
    


module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
