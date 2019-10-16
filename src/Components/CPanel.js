import React from 'react'
import firebase from '../FirebaseConfig'
import {Loader, Dimmer} from 'semantic-ui-react'
import SignOut from './SignOut'

export default class CPanel extends React.Component {

  constructor(){
    super()
    this.state = {
      loading: false,
      products: []
    }
  }

  componentDidMount() {
    firebase.database().ref('produtos').on('value', (product) =>{
      if(product.exists()){
        let products = []
        product.forEach(p => {
          products.push(p.val())
        })
        this.setState({products: products})
      }
    })
  }

  render () {
    if(this.state.loading)
      return (
        <Dimmer active>
          <Loader content='Verificando Usuário' />
        </Dimmer>
      )
    else{
      return(
        <>
          <SignOut />
        </>
      )
    }
  }
}
