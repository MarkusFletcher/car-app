import { Router } from 'express'
import { body } from 'express-validator'
import { UserController } from '../controllers/user.controller'

const userRouter = Router({ mergeParams : true })

userRouter.post('/registration',
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min: 5, max: 32}).withMessage('Invalid password'),
    UserController.registration)
userRouter.post('/login', UserController.login)
userRouter.post('/logout')
userRouter.get('/activate/:link')
userRouter.get('/refresh')
userRouter.get('/users')

export { userRouter }