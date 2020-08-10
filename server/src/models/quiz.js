import Joi from '@hapi/joi'

const category = Joi.object({
  name: Joi.string().required()
})

const question = Joi.object({
  question: Joi.string().required(),
  category: Joi.string().required(),
  options: {
    a: Joi.string().required(),
    b: Joi.string().required(),
    c: Joi.string().required(),
    d: Joi.string().required(),
    ans: Joi.string().required()
  }
})

const quiz = Joi.object({
  category_id: Joi.string().required(),
  questions: Joi.array().required(),
  total_marks: Joi.number().required()
})

export const addCategory = async ctx=>{
  const { err, value } = category.validate(ctx.request.body)
  if(err){
    ctx.body = {
      status: false,
      error: err
    }
  }else{
    try {
      const result = await ctx.db.collection('category').inserOne({ ...value })
      if(result && result.insertedCount){
        ctx.body = {
          status: true,
          message: 'category added'
        }
      }else{
        ctx.body = {
          status: false,
          message: 'try again!'
        }
      }
    } catch (e) {
      ctx.body = {
        status: false,
        message: 'db error'
      }
    }
  }
}

export const categoryList = async ctx=>{
  try {
    const result = await ctx.db.collection('category').find({})
    if(result && result.length>0){
      ctx.body = {
        status: true,
        data: result
      }
    }else{
      ctx.body = {
        status: false,
        message: 'try again!'
      }
    }
  } catch (e) {
    ctx.body = {
      status: false,
      message: 'db error'
    }
  }
}

export const addQuestion = async ctx=>{
  const { err, value } = question.validate(ctx.request.body)
  if(err){
    ctx.body = {
      status: false,
      error: err
    }
  }else{
    try {
      const result = await ctx.db.collection('question').inserOne({ ...value })
      if(result && result.insertedCount){
        ctx.body = {
          status: true,
          message: 'question added'
        }
      }else{
        ctx.body = {
          status: false,
          message: 'try again!'
        }
      }
    } catch (e) {
      ctx.body = {
        status: false,
        message: 'db error'
      }
    }
  }
}

export const questionList = async ctx=>{
  try {
    const result = await ctx.db.collection('question').find({})
    if(result && result.length>0){
      ctx.body = {
        status: true,
        data: result
      }
    }else{
      ctx.body = {
        status: false,
        message: 'try again!'
      }
    }
  } catch (e) {
    ctx.body = {
      status: false,
      message: 'db error'
    }
  }
}

export const addQuiz = async ctx=>{
  const { err, value } = quiz.validate(ctx.request.body)
  if(err){
    ctx.body = {
      status: false,
      error: err
    }
  }else{
    try {
      const result = await ctx.db.collection('quiz').inserOne({ ...value })
      if(result && result.insertedCount){
        ctx.body = {
          status: true,
          message: 'quiz added'
        }
      }else{
        ctx.body = {
          status: false,
          message: 'try again!'
        }
      }
    } catch (e) {
      ctx.body = {
        status: false,
        message: 'db error'
      }
    }
  }
}

export const quizList = async ctx=>{
  let payload = {}
  if(ctx.params.category){
    payload = { category: ctx.params.category }
  }
  try {
    const result = await ctx.db.collection('quiz').find({})
    if(result && result.length>0){
      ctx.body = {
        status: true,
        data: result
      }
    }else{
      ctx.body = {
        status: false,
        message: 'try again!'
      }
    }
  } catch (e) {
    ctx.body = {
      status: false,
      message: 'db error'
    }
  }
}