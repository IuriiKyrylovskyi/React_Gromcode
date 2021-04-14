import React from 'react';
import Spinner from './Spinner';

const  withDataLoader = (data, Component) => {
  return class withDataLoader extends React.Component{
    state = {
      data,
    }

    componentDidMount() {
      fetch(data)
        .then(response => response.json())
        .then(loadedData => this.setState({ data: loadedData }))
    }
    
    render() {
      if (this.state.data !== loadedData) {
        return (
          <Spinner />
        )
      }
      return <Component data={this.state.data} {...this.props}/>;
    }
  }
}

export { withDataLoader } ;

