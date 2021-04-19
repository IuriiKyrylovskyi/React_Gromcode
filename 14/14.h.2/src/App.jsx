import React, {useState} from 'react';
import Clock from './Clock'

const locations = [
  {
    location: 'Irpin\'',
    offset: 3,
    id: 1
  },
  {
    location: 'NewYork',
    offset: -7,
    id: 2
  },
  {
    location: 'Barselona',
    offset: -1,
    id: 3
  }
  
]

const App = () => {
  const [isHidden, setHiddenStatus] = useState(false);

  // const handleHiddenStatus = () => {
  //   setHiddenStatus(!isHidden);
  // }
  // console.log(isHidden);
  return (
    <div className="page">
      <div className="clocks">
        {!isHidden && (
          locations
            .map(city => <Clock
              key={city.id}
              location={city.location}
              offset={city.offset}
            />)
        )}
      </div>
      <button
        className="btn"
        onClick={() => setHiddenStatus(!isHidden)}
      >
        {`${!isHidden ? 'Hide' : 'Show'} clocks`}
      </button>
    </div>
  )
}

export default App;