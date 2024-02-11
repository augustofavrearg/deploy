import { Router } from "express";
import {allUsers, register} from '../controllers/user.controllers.js'

const routerUser = Router();

routerUser.post("/register", register)
routerUser.get("/users", allUsers)

export default routerUser