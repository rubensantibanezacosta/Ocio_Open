const crypto = require("crypto");
const db = require("../models");
const Roles = db.roles;

const adminPermissions = "login:auth,singup:auth,read:city, create:city,update:city,delete:city,read:users,create:users,update:users,delete:users"

const userPermissions = "login:auth,singup:auth,read:city, create:city,update:city,delete:city";

const roles = [
    {
        role_key: generateRandomToken(),
        permissions: adminPermissions
    },
    {
        
        role_key: generateRandomToken(),
        permissions: userPermissions
    }
]

function generateRandomToken() {
    const buffer = crypto.randomBytes(32);
    return buffer.toString('hex');
}

function seedRoleKey(roles, number) {

    Roles.update(roles, {
        where:{
            number:number
        }
    })
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
seedRoleKey(roles[0],1);
seedRoleKey(roles[1],2);
