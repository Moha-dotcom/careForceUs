import {UserData} from "../../types";
import {createUser, getUserByEmail} from "./auth.repository";
export async function registerUser(user: UserData) : Promise<UserData> {
    const data = await getUserByEmail(user.email);
    if(data) throw new Error("Email already exist login");

    return await createUser(user);
}
//
// export async function loginUser(username, password) {
//
// }
//
// export async function deactivateUser() {
//
// }
