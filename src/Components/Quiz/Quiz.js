import React, { useState, useEffect } from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { RadioButton } from 'primereact/radiobutton'
import { ProgressBar } from 'primereact/progressbar'

const Quiz = ({ match })=>{
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  const [marks, setMarks] = useState(0)
  const [selectedAns, setSelectedAns] = useState([])

  return (
    <Card>
      <h3>Q. { index + 1 } { questions[index].question }</h3>
      <div className="p-grid">
        <div className="p-col-4">
          <div className="p-fluid">
            <div className="p-field">
              <RadioButton
                value={ questions[index].options.a }
                name="a"
                onChange={(e) => setSelectedAns([...selectedAns, { question_id: index, ans: e.value }])}
                checked={ selectedAns[index].ans === questions[index].options.a }
              />
            </div>
            <div className="p-field">
              <RadioButton
                value={ questions[index].options.b }
                name="b"
                onChange={(e) => setSelectedAns([...selectedAns, { question_id: index, ans: e.value }])}
                checked={ selectedAns[index].ans === questions[index].options.b }
              />
            </div>
            <div className="p-field">
              <Button label="Next" />
            </div>
          </div>
        </div>
        <div className="p-col-4">
          <div className="p-fluid">
            <div className="p-field">
              <RadioButton
                value={ questions[index].options.c }
                name="c"
                onChange={(e) => setSelectedAns([...selectedAns, { question_id: index, ans: e.value }])}
                checked={ selectedAns[index].ans === questions[index].options.c }
              />
            </div>
            <div className="p-field">
              <RadioButton
                value={ questions[index].options.d }
                name="d"
                onChange={(e) => setSelectedAns([...selectedAns, { question_id: index, ans: e.value }])}
                checked={ selectedAns[index].ans === questions[index].options.d }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-grid">
        <div className="p-col-12">
          <ProgressBar value="10" />
        </div>
      </div>
    </Card>
  )
}

export default Quiz
