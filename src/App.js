import React from 'react';
//import 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Menu from './Components/Menu'
import Calculator from './Components/Calculator'
import SignedIn from './Components/SignedIn'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      active: 0
    }
  }

  handleTabChange = (e, value) => {
    this.setState({active: value})
  }

  renderView = () => {
    switch (this.state.active) {
      case 0:
        return <Calculator />
        break
      case 1:
        return <SignedIn />
        break
      default:
        return <Calculator />
    }
  }

  render = () => {

    return (
      <>
        <Menu changeTab={this.handleTabChange} />
        {this.renderView()}
      </>
    );
  }
}

export default App;
