import React from 'react'
import {Form, Button, Segment} from 'semantic-ui-react'

export default class Signin extends React.Component {


  render () {
    return (
      <Segment basic>
        <Form size="huge">
          <Form.Field>
            <label>Email Cadastrado</label>
            <input placeholder='Email' type="email" />
          </Form.Field>
          <Form.Field>
            <label>Senha</label>
            <input placeholder='Last Name' type="password" />
          </Form.Field>
          <Button fluid type='submit' primary size="huge">LOGIN</Button>
        </Form>
      </Segment>
    )
  }
}
