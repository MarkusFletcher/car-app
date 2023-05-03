import { Model } from './model'
import { IUser } from '../types/user.interface'

class UserModel extends Model<IUser> {
    protected readonly DATA_URL = './data/users.json'
}

export const userModel = new UserModel
