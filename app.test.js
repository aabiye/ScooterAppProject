const App = require('./app')

describe('app object', () => {

    const user1 = new App(26)

    test('user is 18+', () => {
        expect(user1.checkAge(15)).toBe()
    })

    test('scooter can be rented', () => {
        expect(user1.rentScooter(true,false,"LA")).toBe()
    })

    test('account charged', () => {
        expect(user1.takePayment(false,36.99)).toBe()
    })
})