import React, { Component } from 'react';
import Expand from './Expand';

class App extends Component{
  state = {
    isOpen: false,
    degrees: 180,
  }

  onToggle = () => {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false,
        degrees: 180,
      })
    } else {
       this.setState({
         isOpen: true,
         degrees: 0,
      })
    }
  }

  render() {
    return (
      <div className="app">
        <Expand
          isOpen={this.state.isOpen}
          title={'Some title'}
          handleToggle={this.onToggle}
          degrees={this.state.degrees}
        >
          <p>
            Hooks are a new addition in React 16.8. They let you use state and other React features
            without writing a class.
          </p>
        </Expand>
     </div>
    )
  }
}

export default App;