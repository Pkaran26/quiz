import Joi from '@hapi/joi'

const user = Joi.object({
  email: Joi.string().email().required(),
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  password: Joi.string().required()
})

const userLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

export const userQuiz = Joi.object({
  user_id: Joi.string().required(),
  quiz_id: Joi.string().required(),
  answers: Joi.array().required(), //{ question_id, ans }
  marks: {
    total: Joi.number().required(),
    obtain: Joi.number().required()
  }
})

export const signup = async ctx=>{
  const { err, value } = user.validate(ctx.request.body)
  if(err){
    ctx.body = {
      status: false,
      error: err
    }
  }else{
    try {
      const result = await ctx.db.collection('user').insertOne({ ...value })
      if(result && result.insertedCount){
        ctx.body = {
          status: true,
          message: 'user added'
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

export const login = async ctx=>{
  const { err, value } = userLogin.validate(ctx.request.body)
  if(err){
    ctx.body = {
      status: false,
      error: err
    }
  }else{
    try {
      const result = await ctx.db.collection('user').find({ ...value }).toArray()
      if(result && result.length>0){
        ctx.body = {
          status: true,
          user: result[0]
        }
      }else{
        ctx.body = {
          status: false,
          message: 'invalid details'
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

export const addUserQuiz  = async ctx=>{
  const { err, value } = userQuiz.validate(ctx.request.body)
  if(err){
    ctx.body = {
      status: false,
      error: err
    }
  }else{
    try {
      const result = await ctx.db.collection('userQuiz').inserOne({ ...value })
      if(result && result.insertedCount){
        ctx.body = {
          status: true,
          message: 'user quiz added'
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

export const userQuizList = async ctx=>{
  try {
    const result = await ctx.db.collection('userQuiz').find({}).toArray()
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
