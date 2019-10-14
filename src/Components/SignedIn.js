import React from 'react'
import firebase from '../FirebaseConfig'
import {Loader, Dimmer} from 'semantic-ui-react'
import Signin from './Signin'

export default class SignedIn extends React.Component {

  constructor(){
    super()
    this.state = {
      isSignedIn: false,
      user: {},
      loading: true
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) this.setState({isSignedIn: true, user: user, loading: false})
      else this.setState({loading: false})
    })
  }

  render () {
    if(this.state.loading)
      return (
        <Dimmer active>
          <Loader content='Loading' />
        </Dimmer>
      )
    else if(this.state.isSignedIn) return "Logged" //CONTROL PANNEL Component
    else return <Signin />
  }
}
