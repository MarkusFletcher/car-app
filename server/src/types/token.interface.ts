export interface IToken {
  id: string,
  userId: string,
  refreshToken: string
}

export interface ITokens {
  accessToken: string,
  refreshToken: string
}