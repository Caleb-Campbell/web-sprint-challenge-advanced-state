// ❗ You don't need to add extra action creators to achieve MVP
const MOVE_CLOCKWISE = 'MOVE_CLOCKWISE'
const MOVE_COUNTER_CLOCKWISE = 'MOVE__COUNTER_CLOCKWISE'
const SELECT_ANSWER = 'SELECT_ANSWER'
const SET_MESSAGE = 'SET_MESSAGE'
const SET_QUIZ = 'SET_QUIZ'
const INPUT_CHANGE = 'INPUT_CHANGE'
const RESET_FORM = 'RESET_FORM'
const FETCH_QUIZ = 'FETCH_QUIZ'
const POST_ANSWER = 'FETCH_QUIZ'
const POST_QUIZ = 'FETCH_QUIZ'



export function moveClockwise() { 
  return {
    type: type.MOVE_CLOCKWISE,}
 }

export function moveCounterClockwise() { 
  return {
    type: type.MOVE_COUNTER_CLOCKWISE,
  }
 }

export function selectAnswer() { 
  return{
    type: SELECT_ANSWER
  }
 }

export function setMessage() { }

export function setQuiz() { }

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
