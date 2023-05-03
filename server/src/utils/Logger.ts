import fs from 'fs'
import path from 'path'

enum LogLevel {
  DEBUG = 'debug',
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error'
}

export class Logger {
  private static logDirectory: string = 'logs'

  private static getLogFilePath(logLevel: LogLevel, date: Date): string {
    const logLevelFileName = `${logLevel}.log`
    const dateString = date.toISOString().split('T')[0]
    const logFolderPath = path.join(this.logDirectory, dateString)
    const logFilePath = path.join(logFolderPath, logLevelFileName)

    if (!fs.existsSync(logFolderPath)) {
      fs.mkdirSync(logFolderPath, { recursive: true })
    }

    return logFilePath
  }

  private static async log(logLevel: LogLevel, message: any): Promise<void> {
    const timestamp = new Date()
    const logFilePath = this.getLogFilePath(logLevel, timestamp)
    let logMessage: string

    try {
      if (typeof message === 'object' && message !== null) {
        // Обработка объектов с циклическими ссылками
        const circularReplacer = () => {
          const seen = new WeakSet()
          return (key: any, value: any) => {
            if (typeof value === 'object' && value !== null) {
              if (seen.has(value)) {
                return `[Circular ${value.constructor.name}]`
              }
              seen.add(value)
            }
            return value
          }
        }
        logMessage = `[${timestamp.toISOString()}][${logLevel.toUpperCase()}]: ${JSON.stringify(message, circularReplacer(), 2)}\n`
      } else {
        logMessage = `[${timestamp.toISOString()}][${logLevel.toUpperCase()}]: ${JSON.stringify(message)}\n`
      }

      await fs.promises.appendFile(logFilePath, logMessage)
      console.log(logMessage)
    } catch (err) {
      console.error(`Failed to write to log file (${logFilePath}):`, err)
    }
  }

  static async debug(message: any): Promise<void> {
    await this.log(LogLevel.DEBUG, message)
  }

  static async info(message: any): Promise<void> {
    await this.log(LogLevel.INFO, message)
  }

  static async warning(message: any): Promise<void> {
    await this.log(LogLevel.WARNING, message)
  }

  static async error(message: any): Promise<void> {
    await this.log(LogLevel.ERROR, message)
  }
}