export interface IUser {
    id: string,
    email: string,
    login: string,
    password: string
  }
  
export interface IUserData extends Omit<IUser, 'id'> {}

export interface IUserDataErrors extends Partial<{[key in keyof IUserData]: string}> {}