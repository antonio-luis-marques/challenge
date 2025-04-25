import { controllerUser } from "../controllers/user";
import { Router } from "express";


const router = Router()

router.post("/create", controllerUser.Create)
router.post("/login", controllerUser.getUserByEmail)


export {router}