class User {
    constructor(id, username, email, password, lastLogin, isBanned, createdAt, updatedAt) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.lastLogin = lastLogin;
        this.isBanned = isBanned;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

module.exports = User;