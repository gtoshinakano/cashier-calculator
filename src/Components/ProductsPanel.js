import React from 'react'
import {List, Image} from 'semantic-ui-react'


export default class ProductsPanel extends React.Component {

  constructor(){
    super()
    this.state = {

    }
  }

  renderList = () => {
    return this.props.products.map(p => {
      return(
        <List.Item>
          <Image avatar src={p.avatar} size="small" />
          <List.Content>
            <List.Header as='a'>{p.nome}</List.Header>
            <List.Description>
              <b>R$ {p.valor.toFixed(2)}</b>
            </List.Description>
          </List.Content>
        </List.Item>
      )
    })
  }

  render () {
    return (
      <List size="massive" divided>
        {this.renderList()}
      </List>
    )
  }
}
