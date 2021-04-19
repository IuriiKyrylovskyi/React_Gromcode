import React, {useState, useEffect} from 'react';

const ConnectionStatus = () => {
  const [status, handleStatus] = useState(window.navigator.online);

  useEffect(() => {
    // const { status } = window.navigator.online;
    window.addEventListener('online', handleStatus(window.navigator.online))

    return () => {
      window.removeEventListener('online', handleStatus(window.navigator.online))
    }
  },[])

  const statusClasses = `status ${status ? '' : 'status_offline'}`;
  console.log(navigator.online);
  return (
    <div
      className={statusClasses}
    >
      {status}
    </div>
  )
}

export default ConnectionStatus;