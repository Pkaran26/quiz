import MongoClient from 'mongodb'
import {
  MONGO_URL
} from './config.js'

const DBPool = async () => {
  const client = await MongoClient.connect(MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  try {
    return client.db('blog_koa')
  } catch (error) {
    console.log(error)
    return null
  }
}

export default DBPool
