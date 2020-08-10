import React, { useState } from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import Menu from './Menu'
import Cards from './Cards'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { TabView, TabPanel } from 'primereact/tabview'

const Questions = ()=>{
  const [questions, setQuestions] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)
  const columns = [
    { field: 'question', header: 'Question' },
    { field: 'category', header: 'Category' },
    { field: 'options.a', header: 'Option A' },
    { field: 'options.b', header: 'Option B' },
    { field: 'options.c', header: 'Option C' },
    { field: 'options.d', header: 'Option D' },
    { field: 'options.ans', header: 'Answer' },
  ]

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
            <TabPanel header="Question List" leftIcon="pi pi-calendar">
              <DataTable value={ questions }>
                { columns.map((e, i)=>(
                  <Column key={ i } field={ e.field } header={ e.header } />
                ))}
              </DataTable>
            </TabPanel>
            <TabPanel header="Add New Question" rightIcon="pi pi-user">
              <div className="p-fluid">
                <div className="p-field">
                  <label htmlFor="question">Question</label>
                  <InputText id="question" type="text"/>
                </div>
                <div className="p-field">
                  <label htmlFor="category">Category</label>
                  <InputText id="category" type="text"/>
                </div>
                <div className="p-field">
                  <label htmlFor="answer">Answer</label>
                  <InputText id="answer" type="text"/>
                </div>
                <div className="p-field">
                  <label htmlFor="opa">Option A</label>
                  <InputText id="opa" type="text"/>
                </div>
                <div className="p-field">
                  <label htmlFor="opb">Option B</label>
                  <InputText id="opb" type="text"/>
                </div>
                <div className="p-field">
                  <label htmlFor="opc">Option C</label>
                  <InputText id="opc" type="text"/>
                </div>
                <div className="p-field">
                  <label htmlFor="opd">Option D</label>
                  <InputText id="opd" type="text"/>
                </div>
                <div className="p-field">
                  <Button label="Add Question" />
                </div>
              </div>
            </TabPanel>
          </TabView>
        </Card>
      </div>
    </div>
  )
}

export default Questions
