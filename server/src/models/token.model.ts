import { Model } from './model'
import { IToken } from '../types/token.interface'

class TokenModel extends Model<IToken> {
    protected readonly DATA_URL = './data/tokens.json'
}

export const tokenModel = new TokenModel
