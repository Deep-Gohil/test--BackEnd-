const { Router } = require("express")
const { getAllUsers, Signup } = require("../controllers/userController")

const userRouter = Router()

userRouter.get("/all",getAllUsers)
userRouter.post("/signup",Signup)

module.exports = userRouter;