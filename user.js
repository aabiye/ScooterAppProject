class User {
    constructor(username, password, age,location) {
        this.username = username;
        this.password = password;
    
    }
    
    reportBroken(brokenStatus) {
        if (brokenStatus == true) {
            return "Scooter is broken, please return to station"
        }  
    }
}

module.exports = User ;