const crypto = require("crypto");
const db = require("../models");
const Roles = db.roles;

const adminPermissions = "login:auth,singup:auth,read:assistants,create:assistants,update:assistants,delete:assistants,readall:users,read:users,create:users,update:users,delete:users,read:comments,create:comments,update:comments,delete:comments,read:events,create:events,update:events,delete:events,read:images,create:images,update:images,delete:images,read:punctuations,create:punctuations,update:punctuations,delete:punctuations";

const userPermissions = "login:auth,singup:auth,read:assistants,create:assistants,update:assistants,delete:assistants,read:users,create:users,update:users,delete:users,read:comments,create:comments,update:comments,delete:comments,read:events,create:events,update:events,delete:events,read:images,create:images,update:images,read:punctuations,create:punctuations,update:punctuations";

const roles = [
    {
        number: 1,
        role_key: generateRandomToken(),
        permissions: adminPermissions
    },
    {
        number: 2,
        role_key: generateRandomToken(),
        permissions: userPermissions
    }
]

function generateRandomToken() {
    const buffer = crypto.randomBytes(32);
    return buffer.toString('hex');
}

function seedRoleKey(roles) {

    Roles.create(roles)
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log({
                message:
                    err.message || "Some error occurred while creating the role keys."
            });
        });
};

seedRoleKey(roles[0]);
seedRoleKey(roles[1]);
