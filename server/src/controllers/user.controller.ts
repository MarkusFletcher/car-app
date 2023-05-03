import { Request, Response } from 'express'
import { validationResult, Result, ValidationError } from 'express-validator'
import { Logger } from '../utils/Logger'
import { UserService } from '../services/user.service'
import { IUserData } from '../types/user.interface'
import { ITokens } from '../types/token.interface'
import { UserDto } from '../dtos/user.dto'

interface IUserResponse {
  tokens: ITokens,
  user: UserDto
}

export class UserController {
  static async registration(req: Request, res: Response): Promise<void> {
    try {
      const errors: Result<ValidationError> = validationResult(req)
      if (!errors.isEmpty()) {
        Logger.error(errors)
        res.status(500).json(errors.array())
        throw errors
      }
      const {nickname, email, password}: IUserData = req.body
      const userData: IUserResponse = await UserService.registration({nickname, email, password})
      res.cookie('refreshToken', userData.tokens.refreshToken, {
        maxAge: 30*24*60*60*1000,
        httpOnly: true
      }) // httpOnly: true !!что бы нельзя было менять и получать через js
      res.status(200).json(userData)
    } catch (err) {
      Logger.error(`Error registration: ${err}`)
      res.status(500).json('Server Error')
    }
  }
//   static async getAll(req: Request, res: Response): Promise<void> {
//     try {
//       Logger.info('Get products')
//       const products = await ProductModel.getAll()
//       res.status(200).json(products)
//     } catch (err) {
//       Logger.error(`Error getting all products: ${err}`)
//       res.status(500).json('Server Error')
//     }
//   }
  
//   static async getById(req: Request, res: Response): Promise<void> {
//     const id: string = req.params.id
//     try {
//       Logger.info(`Get product by id: ${id}`)
//       const products = await ProductModel.getById(id)
//       res.status(200).json(products)
//     } catch (err) {
//       Logger.error(`Error getting product by ID ${id}: ${err}`)
//       res.status(500).json('Server Error')
//     }
//   }
}
