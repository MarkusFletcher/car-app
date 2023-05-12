export interface IAuthResponse {
	tokens: {
    accessToken: string,
    refreshToken: string
  },
  user: {
    id: string,
    login: string,
    email: string
  }
}