import * as dotenv from 'dotenv'
dotenv.config()

import express from "express"
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { Logger } from './utils/Logger'
import { productRouter } from "./routes/product.router"
import { userRouter } from "./routes/user.router"

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
  origin: '*'
}))

app.use("/api/products", productRouter)
app.use("/api/user", userRouter)

const PORT = process.env.PORT || 3000

const start = async() => {
  try {
    app.listen(PORT, () => {
      Logger.info(`Server listening on port ${PORT}`)
    })
  } catch (err) {
    Logger.error(err)
  }
}

start()