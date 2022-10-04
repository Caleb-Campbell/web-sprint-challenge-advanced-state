import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

export function Message(props) {



  useEffect(() => {
    console.log(`Message component rendered`)
  }, [])

  return (
  <div id="message">{props.infoMessage}</div>
  )
}

const mapStateToProps = (store) => {
  return store
}
export default connect(mapStateToProps, actions)(Message)