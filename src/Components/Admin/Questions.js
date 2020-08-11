import React, { useState, useEffect } from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import Menu from './Menu'
import Cards from './Cards'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { TabView, TabPanel } from 'primereact/tabview'
import { ListBox } from 'primereact/listbox'
import { Dropdown } from 'primereact/dropdown'
import { SERVER_URL } from '../../config'
import axios from 'axios'

const Questions = ()=>{
  const [activeIndex, setActiveIndex] = useState(0)
  const [category, setCategory] = useState('')
  const [categories, setCategories] = useState([])
  const [question, setQuestion] = useState({ question: '', category: '', a: '', b: '', c: '', d: '', ans: '' })
  const [questions, setQuestions] = useState([])
  const columns = [
    { field: 'question', header: 'Question' },
    { field: 'category', header: 'Category' },
    { field: 'a', header: 'Option A' },
    { field: 'b', header: 'Option B' },
    { field: 'c', header: 'Option C' },
    { field: 'd', header: 'Option D' },
    { field: 'ans', header: 'Answer' },
  ]

  useEffect(()=>{
    getCategories()
    getQuestions()
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

  const categorySubmit = (e)=>{
    e.preventDefault()
    axios.post(`${ SERVER_URL }/quiz/category`, { name: category })
    .then(res=>{
      if(res.data && res.data.status){
        setCategory('')
        getCategories()
        alert(res.data.message)
      }else{
        alert(res.data.message)
      }
    })
    .catch(err=>{
      alert('error')
    })
  }

  const questionSetter = (key, value)=>{
    setQuestion({
      ...question,
      [key]: value
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

  const questionSubmit = (e)=>{
    e.preventDefault()
    axios.post(`${ SERVER_URL }/quiz/question`, question)
    .then(res=>{
      if(res.data && res.data.status){
        setQuestion({ question: '', category: '', a: '', b: '', c: '', d: '', ans: '' })
        getQuestions()
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
        <Card>
          <h2>Questions</h2>
          <hr />
          <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
            <TabPanel header="Categories">
              <table style={{ width: '100%' }}>
                <tbody>
                  <tr>
                    <td style={{ width: '33%' }}>
                      <form className="p-fluid" onSubmit={ categorySubmit }>
                        <div className="p-field">
                          <label htmlFor="category">Category</label>
                          <InputText
                            id="category"
                            type="text"
                            onChange={ (e)=> setCategory(e.target.value) }
                            value={ category }
                            required={ true }
                          />
                        </div>
                        <div className="p-field">
                          <Button label="Add Category" type="submit" />
                        </div>
                      </form>
                    </td>
                    <td style={{ width: '5%' }}></td>
                    <td style={{ width: '33%' }}>
                    <div className="p-fluid">
                      <div className="p-field">
                        <label htmlFor="category">Category</label>
                        <ListBox optionLabel="name" optionValue="name" options={ categories } />
                      </div>
                    </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </TabPanel>
            <TabPanel header="Question List">
              <DataTable value={ questions }>
                { columns.map((e, i)=>(
                  <Column key={ i } field={ e.field } header={ e.header } />
                ))}
              </DataTable>
            </TabPanel>
            <TabPanel header="Add New Question">
              <form className="p-fluid" onSubmit={ questionSubmit }>
                <div className="p-field">
                  <label htmlFor="question">Question</label>
                  <InputText
                    id="question"
                    type="text"
                    value={ question.question }
                    onChange={(e) => { questionSetter('question', e.target.value)} }
                    required={ true }
                  />
                </div>
                <div className="p-field">
                  <label htmlFor="category">Category</label>
                  <Dropdown
                    optionLabel="name"
                    optionValue="name"
                    value={ question.category }
                    options={ categories }
                    onChange={(e) => { questionSetter('category', e.value) } }
                    placeholder="Select a Category"
                    required={ true }
                  />
                </div>
                <div className="p-field">
                  <label htmlFor="answer">Answer</label>
                  <InputText
                    id="answer"
                    type="text"
                    value={ question.ans }
                    onChange={(e) => { questionSetter('ans', e.target.value)} }
                    required={ true }
                  />
                </div>
                <div className="p-field">
                  <label htmlFor="opa">Option A</label>
                  <InputText
                    id="opa"
                    type="text"
                    value={ question.a }
                    onChange={(e) => { questionSetter('a', e.target.value)} }
                    required={ true }
                  />
                </div>
                <div className="p-field">
                  <label htmlFor="opb">Option B</label>
                  <InputText
                    id="opb"
                    type="text"
                    value={ question.b }
                    onChange={(e) => { questionSetter('b', e.target.value)} }
                    required={ true }
                  />
                </div>
                <div className="p-field">
                  <label htmlFor="opc">Option C</label>
                  <InputText
                    id="opc"
                    type="text"
                    value={ question.c }
                    onChange={(e) => { questionSetter('c', e.target.value)} }
                    required={ true }
                  />
                </div>
                <div className="p-field">
                  <label htmlFor="opd">Option D</label>
                  <InputText
                    id="opd"
                    type="text"
                    value={ question.d }
                    onChange={(e) => { questionSetter('d', e.target.value)} }
                    required={ true }
                  />
                </div>
                <div className="p-field">
                  <Button label="Add Question" />
                </div>
              </form>
            </TabPanel>
          </TabView>
        </Card>
      </div>
    </div>
  )
}

export default Questions
