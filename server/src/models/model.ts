import { readFile, writeFile } from 'fs/promises'
import { Logger } from '../utils/Logger'

export abstract class Model<T extends {id: string}> {
  protected readonly DATA_URL: string = ''

  protected async getData(): Promise<T[]> {
    try {
      const res: string = await readFile(this.DATA_URL, 'utf8')
      return JSON.parse(res)
    } catch (err) {
      Logger.error(`Error reading data: ${err}`)
      throw err
    }
  }

  protected async saveData(data: T[]): Promise<boolean> {
    try {
      await writeFile(this.DATA_URL, JSON.stringify(data, null, 2))
    } catch (err) {
      Logger.error(`Error saving data: ${err}`)
      return false
    }
  }

  async findOne(query: Partial<T>): Promise<T | undefined> {
    try {
      const items: T[] = await this.getData()
      const foundItem = items.find(item => {
        for (const key in query) {
          if (item[key] === query[key] && query.hasOwnProperty(key)) {
            return true
          }
          return false
        }
      })
      if (!foundItem) {
        Logger.warning(`No such items found ${foundItem}`)
        return undefined
      }
      return foundItem
    } catch (err) {
      Logger.error(`Error find itemt: ${err}`)
      throw err
    }
  }
  
  async getAll(): Promise<T[]> {
    try {
      return await this.getData()
    } catch (err) {
      Logger.error(`Error getting all items: ${err}`)
      throw err
    }
  }

  async create(item: T): Promise<boolean>  {
    try {
      const items: T[] = await this.getData()
      items.push(item)
      await this.saveData(items)
      return true
    } catch (err) {
      Logger.error(`Error creating item: ${err}`)
      return false
    }
  }

  async update(id: string, data: Partial<T>): Promise<boolean> {
    try {
      const items: T[] = await this.getData()
      const idx: number = items.findIndex(item => item.id === id)
      if (idx !== -1) {
        items[idx] = {
          ...items[idx],
          ...data,
          id
        }
        await this.saveData(items)
      }
    } catch (err) {
      Logger.error(`Error updating item ID ${id}: ${err}`)
      return false
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      const items: T[] = await this.getData()
      const idx: number = items.findIndex(item => item.id === id)
      if (idx !== -1) {
        items.splice(idx, 1)
        await this.saveData(items)
      }
    } catch (err) {
      Logger.error(`Error deleting item ID ${id}: ${err}`)
      return false
    }
  }
}