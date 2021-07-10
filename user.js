class User {
    constructor(username, password, age,location) {
        this.username = username;
        this.password = password;
        this.age = age;
        this.location = location
    
    }
    
    reportBroken(brokenStatus) {
        if (brokenStatus == true) {
            return "Scooter is broken, please return to station"
        }  
    }
}

module.exports = User ;