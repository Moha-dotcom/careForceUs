import {Router} from "express";
import {login, register} from "./auth.controller";
import {UserData} from "../../types";
const router = Router();


router.post('/register', register  )

router.post('/login',login )

export default router;