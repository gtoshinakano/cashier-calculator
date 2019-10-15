import React from 'react'
import {Form, Button, Segment} from 'semantic-ui-react'
import firebase from '../FirebaseConfig'

export default class Signin extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: "",
      loading: false
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    console.log(this.state);
    this.setState({loading: true})
    if(this.state.email !== "" && this.state.password !== ""){
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    }
    this.setState({email: "", password: ""})
  }

  render () {
    return (
      <Segment basic onSubmit={this.handleSubmit}>
        <Form size="huge" >
          <Form.Field>
            <label>Email Cadastrado</label>
            <Form.Input placeholder='Email' type="email" name="email" onChange={this.handleChange} value={this.state.email} />
          </Form.Field>
          <Form.Field>
            <label>Senha</label>
            <Form.Input placeholder='Senha' type="password" name="password" onChange={this.handleChange} value={this.state.password} />
          </Form.Field>
          <Button fluid type='submit' primary size="huge">LOGIN</Button>
        </Form>
      </Segment>
    )
  }
}
