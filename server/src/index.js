import koa from 'koa'
import http from 'http'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import mongodb from 'mongodb'
import cors from '@koa/cors'
import DBPool from './utils/db.js'
import userRouter from './routers/user.js'
import quizRouter from './routers/quiz.js'

const app = new koa()
const server = http.createServer(app.callback())
server.listen(8080)
console.log('Server running...')

app.use(logger())
app.use(cors())
app.use(bodyParser())
app.use( async (ctx, next)=>{
  ctx.db = await DBPool()
  ctx.ObjectId = mongodb.ObjectId
  await next()
})

app.use(userRouter.routes()).use(userRouter.allowedMethods())
app.use(quizRouter.routes()).use(quizRouter.allowedMethods())
