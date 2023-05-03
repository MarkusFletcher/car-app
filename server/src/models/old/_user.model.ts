// import { readFile, writeFile } from 'fs/promises'
// import { Logger } from '../utils/Logger'
// import { IUser, IUserData } from '../types/user.interface'

// export class UserModel {
//   private static readonly DATA_URL = './data/users.json'

//   private static async getData(): Promise<IUser[]> {
//     try {
//       const res: string = await readFile(this.DATA_URL, 'utf8')
//       return JSON.parse(res)
//     } catch (err) {
//       Logger.error(`Error reading data: ${err}`)
//       throw err
//     }
//   }

//   private static async saveData(data: IUser[]): Promise<boolean> {
//     try {
//       await writeFile(this.DATA_URL, JSON.stringify(data))
//     } catch (err) {
//       Logger.error(`Error saving data: ${err}`)
//       return false
//     }
//   }

//   static async findOne(query: Partial<IUser>): Promise<IUser> {
//     try {
//       const users: IUser[] = await this.getData()
//       const founduser = users.find(user => {
//         for (const key in query) {
//           if (user[key] === query[key] && query.hasOwnProperty(key)) {
//             return true
//           }
//           return false
//         }
//       })
//       return founduser
//     } catch (err) {
//       Logger.error(`Error find user: ${err}`)
//       throw err
//     }
//   }
  
//   static async getAll(): Promise<IUser[]> {
//     try {
//       return await this.getData()
//     } catch (err) {
//       Logger.error(`Error getting all users: ${err}`)
//       throw err
//     }
//   }

//   static async getById(id: string): Promise<IUser | undefined> {
//     try {
//       const users: IUser[] = await this.getData()
//       return users.find(user => user.id === id)
//     } catch (err) {
//       Logger.error(`Error getting user by ID ${id}: ${err}`)
//       throw err
//     }
//   }

//   static async create(user: IUser): Promise<boolean>  {
//     try {
//       const users: IUser[] = await this.getData()
//       users.push(user)
//       await this.saveData(users)
//       return true
//     } catch (err) {
//       Logger.error(`Error creating user: ${err}`)
//       return false
//     }
//   }

//   static async update(id: string, data: Partial<IUser>): Promise<boolean> {
//     try {
//       const users: IUser[] = await this.getData()
//       const idx: number = users.findIndex(user => user.id === id)
//       if (idx !== -1) {
//         users[idx] = {
//           ...users[idx],
//           ...data,
//           id
//         }
//         await this.saveData(users)
//       }
//     } catch (err) {
//       Logger.error(`Error updating user ID ${id}: ${err}`)
//       return false
//     }
//   }

//   static delete(id: string): boolean {
//     return false
//   }
// }