import React, { Component } from 'react';
import Expand from './Expand';

class App extends Component{
  state = {
    isExpanded: true,
  }

  handleToggle = () => {
    this.setState({
      isExpanded: !this.state.isExpanded,
    })
  }

  render() {
    return (
      <div className="app">
        <Expand
          title={'Some title'}
          isExpanded={this.state.isExpanded}
          onToggle={this.handleToggle}
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