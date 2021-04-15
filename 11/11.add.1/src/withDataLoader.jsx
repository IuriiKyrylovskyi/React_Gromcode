import React from 'react';
import Spinner from './Spinner';

const  withDataLoader  = data => WrappedComponent => {
  return class extends React.Component{
    state = {
      data: [],
    }

    componentDidMount() {
      fetch(data)
        .then(response => response.json())
        .then(loadedData => this.setState({ data: loadedData }))
    }
    
    render() {
        return ( this.state.data.length === 0
         ? <Spinner />
         : <WrappedComponent data={this.state.data} />
        )
    }
  }
}

export { withDataLoader } ;

