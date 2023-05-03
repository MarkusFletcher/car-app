import jwt from 'jsonwebtoken'
import { Logger } from '../utils/Logger'

import { UserDto } from '../dtos/user.dto'

export class TokenService {
  static generateAccessToken(payload: UserDto): string {
    const accessToken: string = jwt.sign({...payload}, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'})
    return accessToken
  }
  static generateRefreshToken(payload: UserDto): string {
    const refreshToken: string = jwt.sign({...payload}, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})
    return refreshToken
  }
}