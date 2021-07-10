const Chargingstation = require('./Chargingstation')

describe('Chargingstation', () => {

    const scooter1 = new Chargingstation()
    test('battery is full', () => {
        expect(scooter1.isCharged(95)).toBe("Needs more charging")
    })
})