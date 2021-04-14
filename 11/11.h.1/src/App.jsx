import React, { Component } from 'react';
import Expand from './Expand';

class App extends Component{
  state = {
    isExpand: false,
  }

  handleToggle = () => {
    this.setState({
      isExpand: !this.state.isExpand,
    })
  }

  render() {
    return (
      <div className="app">
        <Expand
          title={'Some title'}
          isExpand={this.state.isExpand}
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