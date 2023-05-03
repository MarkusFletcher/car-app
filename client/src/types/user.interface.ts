export interface IUser {
    id: string,
    nickname: string,
    password: string,
    role: 'admin' | 'user'
  }
  
export interface IUserData extends Omit<IUser, 'id'> {

}