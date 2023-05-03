import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'
import { Logger } from '../utils/Logger'

import { IUser, IUserData } from '../types/user.interface'
import { ITokens } from '../types/token.interface'

import { userModel } from '../models/user.model'
import { tokenModel } from '../models/token.model'

import { TokenService } from './token.service'
import { MailService } from './mail.service'

import { UserDto } from '../dtos/user.dto'


export class UserService {
  static async registration(userData: IUserData): Promise<{tokens: ITokens, user: UserDto}> {
    try {
      const candidate: IUser = await userModel.findOne({email: userData.email})
      if (candidate) {
        const err = `User with email ${userData.email} already exists`
        Logger.error(err)
        throw new Error(err)
      }
      const hashPassword = await bcrypt.hash(userData.password, 3)
      const user: IUser = {
        id: uuidv4(),
        nickname: userData.nickname,
        email: userData.email,
        password: hashPassword,
        isActivated: false,
        activationLink: uuidv4()
      }
      
      const success: boolean = await userModel.create(user)
      if (success) {
        MailService.sendActivationLink(user.email, user.activationLink)
        const userDto: UserDto = new UserDto(user)
        const accessToken = TokenService.generateAccessToken(userDto)
        const refreshToken = TokenService.generateRefreshToken(userDto)
        tokenModel.create({
          id: uuidv4(),
          userId: user.id,
          refreshToken: refreshToken
        })
        return {
          tokens: {
            accessToken,
            refreshToken
          },
          user
        }
      }
      Logger.error('Error creating user')
      throw new Error('Error creating user')
    } catch (err) {
      Logger.error(`Error creating user: ${err}`)
      throw new Error(err)
    }
  }
}