const User = require('./User')

class App extends User {
    constructor(age) {
        super(age)
    }  


checkAge(age) {
  if (age >= 18) {
    console.log('Great, you meet age requirement, proceed to rent a scooter')
  }
  else {
      console.log('Sorry, you do not meet age requirement to rent a scooter')
  }
}


rentScooter(charged,broken,location) {

    const scooterlocation = ["DC","MD","TX","CA","FL"]

    if (charged == true && 
        broken !== true &&
        scooterlocation.includes(location) == true) {
        console.log("Great, scooter can be rented")
      }

      else 
            {  console.log("Sorry, please pick another scooter that is fully charged or not broken or a different location ")}
}


takePayment(scooterreturned, chargeAMT) {

    if (scooterreturned == true) {
        console.log(`Thank you for renting our scooter, your account will be charged ${chargeAMT}`)
      }
      else {
        console.log(`Please return scooter`)
      }
    }

}

module.exports = App