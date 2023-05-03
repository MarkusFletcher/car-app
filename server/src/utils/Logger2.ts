import { existsSync, mkdir, readFileSync, writeFileSync } from 'fs'

export class Logger {
  private static path: string = './logs/log.txt'
  
  static log(mess: string): void {
    if (!existsSync(this.path)) {
      mkdir('logs', err => {
        if (err) throw err
      })
    }
    const data: string = readFileSync(this.path, 'utf8')
    const time: string = new Date().toLocaleString()
    const logMess: string = `${time}: ${mess}\n`
    writeFileSync(this.path, data + logMess)
  }
}