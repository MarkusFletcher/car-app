import { IUser, IUserDTO } from '../types/user.interface'

export class UserDto implements IUserDTO {
  id: string
  nickname: string
  email: string

  constructor(user: IUser) {
    this.id = user.id
    this.nickname = user.nickname
    this.email = user.email
  }
}