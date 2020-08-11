import Router from 'koa-router'
import {
  signup,
  login,
  getUsers,
  addUserQuiz,
  userQuizList
} from '../models/user.js'

const userRouter = new Router({ prefix: '/user' })

userRouter.post('/signup', signup)
userRouter.post('/login', login)
userRouter.get('/', getUsers)

userRouter.get('/quiz', userQuizList)
userRouter.post('/quiz', addUserQuiz)

export default userRouter
