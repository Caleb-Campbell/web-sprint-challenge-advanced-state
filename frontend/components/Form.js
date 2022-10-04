import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {

  const onChange = evt => {
    const {name, value} = evt.target
    props.inputChange({name, value})
  }

  const onSubmit = event => {
    const newQuestion = props.form.newQuestion
    const newTrueAnswer = props.form.newTrueAnswer
    const newFalseAnswer = props.form.newFalseAnswer
    event.preventDefault() 
    props.postQuiz(newQuestion, newTrueAnswer, newFalseAnswer)
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
