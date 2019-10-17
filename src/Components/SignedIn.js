import React from 'react'
import firebase from '../FirebaseConfig'
import {Loader, Dimmer} from 'semantic-ui-react'
import Signin from './Signin'
import CPanel from './CPanel'

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
      else this.setState({loading: false, isSignedIn: false, user: {}})
    })
  }

  render () {
    if(this.state.loading)
      return (
        <Dimmer active>
          <Loader content='Verificando Usuário' />
        </Dimmer>
      )
    else if(this.state.isSignedIn) return (
      <CPanel />
    )
    else return <Signin />
  }
}
