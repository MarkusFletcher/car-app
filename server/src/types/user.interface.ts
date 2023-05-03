export interface IUserData {
  nickname: string,
  email: string,
  password: string
}

export interface IUserDTO {
  id: string,
  nickname: string,
  email: string
}
export interface IUser extends IUserData {
  id: string
  isActivated: boolean,
  activationLink: string
}