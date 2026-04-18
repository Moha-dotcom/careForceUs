import {UserData} from "../../types";
import prisma from "../../config/prisma";
import bcrypt from "bcrypt";
export async function createUser(user : UserData) : Promise<UserData> {
     return prisma.user.create({
         data: {
             username: user.username,
             email: user.email,
             password: bcrypt.hashSync(user.password, 8)
         }
     });
}

//
// export async function deactivateUser(id : string) : Promise<void> {
//
// }
//
export async function getUserByEmail(email : string) : Promise<UserData | null> {
    return prisma.user.findUnique({
        where: {email}
    })
}
//
// export async function getUserById(id: string) : Promise<User> {
//
// }
//
//
