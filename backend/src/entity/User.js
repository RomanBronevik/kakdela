const EntitySchema = require("typeorm").EntitySchema;
const User = require("../model/User");

module.exports = new EntitySchema({
    name: "User",
    target: User,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        username: {
            type: "varchar",
            nullable: false
        },
        email: {
            type: "varchar",
            nullable: true
        },
        password: {
            type: "varchar",
            nullable: true
        },
        lastLogin: {
            type: "timestamp",
            nullable: true
        },
        isBanned: {
            type: "boolean",
            nullable: true
        },
        createdAt: {
            type: "timestamp",
            nullable: true
        },
        updatedAt: {
            type: "timestamp",
            nullable: true
        }
    }
});