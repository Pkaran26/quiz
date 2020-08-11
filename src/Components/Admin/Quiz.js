import React, { useState, useEffect } from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import Menu from './Menu'
import Cards from './Cards'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { TabView, TabPanel } from 'primereact/tabview'
import { Dropdown } from 'primereact/dropdown'
import { MultiSelect } from 'primereact/multiselect'
import { SERVER_URL } from '../../config'
import axios from 'axios'

const QuizManager = ()=>{
  const [activeIndex, setActiveIndex] = useState(0)
  const [quiz, setquiz] = useState({
    name: '',
    category_id: '',
    questions: [],
    total_marks: 0
  })
  const [quizes, setquizes] = useState([])
  const [categories, setCategories] = useState([])
  const [questions, setQuestions] = useState([])
  const columns = [
    { field: 'name', header: 'Name' },
    { field: 'category_id', header: 'Category' },
    { field: 'questions.length', header: 'Total Questions' },
    { field: 'total_marks', header: 'Total marks' }
  ]

  const quizSetter = (key, value)=>{
    setquiz({
      ...quiz,
      [key]: value
    })
    if(key === 'category_id'){
      getQuestions(value)
    }
  }

  useEffect(()=>{
    getCategories()
    getQuiz()
  }, [])

  const getCategories = ()=>{
    axios.get(`${ SERVER_URL }/quiz/category`)
    .then(res=>{
      if(res.data && res.data.status){
        setCategories(res.data.data)
      }
    })
    .catch(err=>{

    })
  }

  const getQuestions = ()=>{
    axios.get(`${ SERVER_URL }/quiz/question`)
    .then(res=>{
      console.log(res.data);
      if(res.data && res.data.status){
        setQuestions(res.data.data)
      }
    })
    .catch(err=>{

    })
  }

  const getQuiz = ()=>{
    axios.get(`${ SERVER_URL }/quiz`)
    .then(res=>{
      if(res.data && res.data.status){
        setquizes(res.data.data)
      }
    })
    .catch(err=>{

    })
  }

  const quizSubmit = (e)=>{
    e.preventDefault()
    axios.post(`${ SERVER_URL }/quiz`, quiz)
    .then(res=>{
      if(res.data && res.data.status){
        setquiz({
          name: '',
          category_id: '',
          questions: [],
          total_marks: 0
        })
        getQuiz()
        alert(res.data.message)
      }else{
        alert(res.data.message)
      }
    })
    .catch(err=>{
      alert('error')
    })
  }

  return (
    <div className="p-grid">
      <div className="p-col-2">
        <Menu />
      </div>
      <div className="p-col-10">
        <Card style={{ height: '500px' }}>
          <h2>Quiz</h2>
          <hr />
          <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
            <TabPanel header="Add Quiz">
              <form className="p-fluid" onSubmit={ quizSubmit }>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <div className="p-field">
                          <label htmlFor="name">Name</label>
                          <InputText
                            id="name"
                            type="text"
                            value={ quiz.name }
                            onChange={(e) => { quizSetter('name', e.target.value)} }
                            required={ true }
                          />
                        </div>
                      </td>
                      <td>
                        <div className="p-field">
                          <label htmlFor="category">Category</label>
                          <Dropdown
                            optionLabel="name"
                            optionValue="_id"
                            value={ quiz.category_id }
                            options={ categories }
                            onChange={(e) => { quizSetter('category_id', e.value) } }
                            placeholder="Select a Category"
                            required={ true }
                          />
                        </div>
                      </td>
                      <td>
                        <div className="p-field">
                          <label htmlFor="opd">Total marks</label>
                          <InputText
                            id="opd"
                            type="text"
                            value={ quiz.total_marks }
                            onChange={(e) => { quizSetter('total_marks', e.target.value)} }
                            required={ true }
                          />
                        </div>
                      </td>
                      <td>
                        <div className="p-field">
                          <label htmlFor="opb">Questions</label>
                          <MultiSelect
                            optionLabel="question"
                            optionValue="_id"
                            value={ quiz.questions }
                            options={ questions }
                            onChange={(e) => quizSetter('questions', e.value)}
                            filter={true}
                            filterPlaceholder="Search"
                            placeholder="Choose Questions"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="p-field">
                  <Button label="Add Question" style={{ width: '140px' }} />
                </div>
              </form>
            </TabPanel>
            <TabPanel header="Quiz List">
              <DataTable value={ quizes }>
                { columns.map((e, i)=>(
                  <Column key={ i } field={ e.field } header={ e.header } />
                ))}
              </DataTable>
            </TabPanel>
          </TabView>
        </Card>
      </div>
    </div>
  )
}

export default QuizManager
