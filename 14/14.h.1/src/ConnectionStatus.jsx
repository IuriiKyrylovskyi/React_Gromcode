import React, {useState, useEffect} from 'react';

const ConnectionStatus = () => {
  const [status, handleStatus] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', e => handleStatus(e.target.navigator.onLine))
    window.addEventListener('offline', e => handleStatus(e.target.navigator.offline))

    return () => {
      window.removeEventListener('online', e => handleStatus(e.target.navigator.onLine))
      window.removeEventListener('offline', e => handleStatus(e.target.navigator.offline))
    }
  },[])

  const statusClasses = `status ${status ? '' : 'status_offline'}`;
  const statusText = status ? 'online' : 'offline';

  return (
    <div
      className={statusClasses}
    >
      {statusText}
    </div>
  )
}

export default ConnectionStatus;