import React, { useEffect, useState } from 'react'

const Notfound404: React.FC= () => {
    const [ currentURL, setCurrentURL] = useState(window.location.pathname)

  useEffect(() => {
    document.title = '404 Not Found';

  }, []);

  return (
    <div style={{padding: '0.5rem'}}>
        <h1 style={{marginBottom: '1rem'}}>Not Found</h1>
        <p>The requested URL <strong>{currentURL}</strong> was not found on this server.</p>
    </div>
  )
}

export default Notfound404