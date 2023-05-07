export interface IUserData {
  login: string,
  email: string,
  password: string
}

export interface IUserDTO {
  id: string,
  login: string,
  email: string
}
export interface IUser extends IUserData {
  id: string
  isActivated: boolean,
  activationLink: string
}

export interface IUserLoginData extends Omit<IUserData, 'email'> {}