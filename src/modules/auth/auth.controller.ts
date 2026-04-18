import {NextFunction, Response, Request} from "express";
import {registerUser} from "./auth.service";
import {UserData} from "../../types";
import bcrypt from "bcrypt";
export async function register(req: Request, res: Response, next : NextFunction) : Promise<Response> {
   try {
       const data :  UserData = {
           username : req.body.username,
           email : req.body.email,
           password: req.body.password
       }
       const responseResult : UserData = await registerUser(data);
       return res.status(201).json({
           data : responseResult
       })
   }catch(err){
       throw err;
   }
}

export async function login(req: Request, response: Response, next : NextFunction) {
    const username = req.body.username;
    const pass = req.body.password;
    const reponseData = await getUserByUsername(username)
    const result  = await bcrypt.compare(pass , (reponseData.password);
    if(!result) return response.status(200).json({
         success: false,
    })

    return response.status(200).json({
        success: true,
    })



}