const User = require('./User')

describe('user object', () => {
    
    const user1 = new User("aabiye",1234567)

    test('user has a username', () => {
        expect(user1.username).toBe("aabiye")
    })

    test('user has a valid password', () => {
        expect(typeof user1.password).toBe('number')
    })

    test('report broken scooter', () => {
        expect(user1.reportBroken(true)).toBe("Scooter is broken, please return to station")
    })

})