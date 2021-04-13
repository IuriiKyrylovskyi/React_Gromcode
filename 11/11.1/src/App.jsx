import React, { Component } from 'react';
import Numbers from './Numbers';
import EvenNumbers from './EvenNumbers';
import OddNumbers from './OddNumbers';

class App extends Component{
  state = {
    number: 0,
  }

  render() {
    return (
      <div className="app">
        <OddNumbers
          title={'Odd number.'}
          number={this.state.number}
        />
        <EvenNumbers
          title={'Even number.'}
          number={this.state.number}
        />
        <Numbers
          title={this.state.title}
          number={this.state.number}
        />
        <Numbers
          title={this.state.title}
          number={this.state.number}
        />
      </div>
    )
  }
}

export default App;