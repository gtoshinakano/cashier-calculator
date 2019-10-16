import React from 'react'
import firebase from '../FirebaseConfig'
import {Loader, Dimmer, Segment} from 'semantic-ui-react'
import SignOut from './SignOut'
import ProductsPanel from './ProductsPanel'

export default class CPanel extends React.Component {

  constructor(){
    super()
    this.state = {
      loading: true,
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
        this.setState({products: products, loading: false})
      } // else TODO EXCEPTION
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
        <Segment basic>
          <ProductsPanel products={this.state.products} />
          <SignOut />
        </Segment>
      )
    }
  }
}
