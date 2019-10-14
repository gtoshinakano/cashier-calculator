import React from 'react';
//import 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Menu from './Menu'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      active: 'calculator'
    }
  }

  handleTabChange = (e, value) => {
    this.setState({active: value})
  }

  render = () => {

    return (
      <>
        <Menu changeTab={this.handleTabChange} />
        {this.state.active}
      </>
    );
  }
}

export default App;
