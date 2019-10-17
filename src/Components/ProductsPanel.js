import React from 'react'
import {List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import {Delete} from '@material-ui/icons'
import EdiText from 'react-editext'

export default class ProductsPanel extends React.Component {

  constructor(){
    super()
    this.state = {

    }
  }

  renderList = () => {
    return this.props.products.map((p,i) => {
      return(
        <ListItem key={i}>
          <ListItemAvatar>
            <Avatar src={p.avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={<EdiText
              type="text"
              value={p.nome}
              onSave={this.onSave}
            />}
            secondary={<EdiText
              type="number"
              value={p.valor.toFixed(2)}
              onSave={this.onSave}
            />}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )
    })
  }

  render () {
    return (
      <List>
        {this.renderList()}
      </List>
    )
  }
}
