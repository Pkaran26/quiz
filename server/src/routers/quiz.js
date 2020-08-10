import Router from 'koa-router'
import {
  addCategory,
  categoryList,
  addQuestion,
  questionList,
  addQuiz,
  quizList
} from '../models/quiz.js'

const quizRouter = new Router({ prefix: '/quiz' })

quizRouter.get('/category', categoryList)
quizRouter.post('/category', addCategory)

quizRouter.get('/question', questionList)
quizRouter.get('/question/:category', questionList)
quizRouter.post('/question', addQuestion)

quizRouter.get('/', quizList)
quizRouter.post('/', addQuiz)

export default quizRouter
