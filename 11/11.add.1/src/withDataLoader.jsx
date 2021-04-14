import React, { Component } from 'react';
import Spinner from './Spinner';

export const withDataLoader = data => {
  return class extends Component{
    state = {
      data,
    }

    handleChange = () => {
      const loadedData = fetch(data).then(response => response.json())
      this.setState({
        data: loadedData,
      })
    }
    
    render() {
      if (!data) {
        return (
          <Spinner />
        )
      }
      return <withDataLoader data={this.state.data} {...this.props}/>;
    }
  }
}

// export withDataLoader;

