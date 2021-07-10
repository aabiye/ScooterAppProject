class Chargingstation {
    constructor() {

    }

    isCharged(batterylevel) {
        if(batterylevel == 100) {
            return 'Ready to be rented'
        }
        else {
            return 'Needs more charging'
        }
    }

}

module.exports = Chargingstation;