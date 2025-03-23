import React from 'react'
import NavBar from './components/NavBar'
import { useLocation } from 'react-router-dom';

function FindIvestors() {
    const screenLocation=useLocation();
  return (
    <div className='h-full min-h-screen w-full flex  flex-row'>
          {/*nav bar*/}
          <NavBar screen={screenLocation.pathname}/>
          {/*body*/}
          <div className='flex-1'>

          </div>
    </div>
  )
}

export default FindIvestors