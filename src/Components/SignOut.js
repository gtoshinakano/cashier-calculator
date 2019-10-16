import React from 'react'
import firebase from '../FirebaseConfig'
import {Button, Icon} from 'semantic-ui-react'

export default function SignOut()  {

  return (
    <Button icon onClick={() => firebase.auth().signOut() } fluid size="huge" color="red">
      <Icon name="sign out" /> SAIR DO PAINEL
    </Button>
  )

}
