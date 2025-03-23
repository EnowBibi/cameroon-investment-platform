import React from 'react'
import logo from './assets/logo.png'
import chartBar from "./assets/ChartBar.png"
import magnify from "./assets/magnify.png"
import magnify2 from "./assets/MagnifyingGlass.png"
import chat from "./assets/ChatCircleDots.png"
import creditCard from "./assets/CreditCard.png"
import gear from "./assets/Gear.png"
import history from "./assets/history.png" 
import bell from "./assets/bell.png" 
import dummy from "./assets/dummy.png" 
import usersIcon from './assets/users.png'
import group from './assets/account-group-outline.png'
import stack from './assets/stack.png'
import dots from './assets/dots-vertical-circle-outline.png'
import NavBar from './components/NavBar'
import { useLocation } from 'react-router-dom'
function App() {
  const screenLocation=useLocation();
  return (
    <div className='h-full min-h-screen w-full flex  flex-row'>
          {/*nav bar*/}
      <NavBar screen={screenLocation.pathname}/>
          {/*body */}
      <div>
        <div className='flex flex-row mx-12 my-8 gap-5'>
          <div className=' flex  py-1 px-65 bg-gray-200 items-center'>
            <span className='text-secondary-500 text-3xl'>Welcome! Tambe</span>
          </div>
          <div className='bg-gray-200 p-4 flex items-center justify-center'>
            <img src={bell}  className='w-8 h-8'/>
          </div>
          <img src={dummy} className='w-17 h-17 rounded-full'/>
        </div>
        <div className='flex justify-start'>
          <div className=' flex  mx-12 my-8 flex-row gap-5  rounded overflow-hidden py-3 px-5 bg-gray-200 items-center'>
            <div className='bg-white shadow-xl rounded flex flex-row px-3 py-2'>
              <img src={usersIcon} className='w-8 h-8 mr-3' />
              <div className='flex flex-col'>
                <span className='text-secondary-500 text-xl font-bold'>Partners</span>
                <span className='text-secondary-500 text-xl'>+20</span>
              </div>
            </div>
            <div className='bg-white shadow-xl rounded flex flex-row px-3 py-2'>
              <img src={group} className='w-8 h-8 mr-3' />
              <div className='flex flex-col'>
                <span className='text-secondary-500 text-xl font-bold'>Employees</span>
                <span className='text-secondary-500 text-xl'>+50</span>
              </div>
            </div>
            <div className='bg-white shadow-xl rounded flex flex-row px-3 py-2'>
              <img src={stack} className='w-8 h-8 mr-3' />
              <div className='flex flex-col'>
                <span className='text-secondary-500 text-xl font-bold'>Products</span>
                <span className='text-secondary-500 text-xl'>+10</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row mx-12 items-center'>
          <span className='rounded text-secondary-500 text-2xl'>Categories</span>
          <select className='flex items-center bg-gray-200 px-3 outline-none py-2 mx-5 rounded text-secondary-500 font-bold'>
            <option>Angel Investor</option>
            <option>Share Holders</option>
          </select>
          <div className='flex-1 flex items-center flex-row border border-gray-200 py-1 rounded'>
            <img src={magnify2} className='w-6 h-6 mx-3'/> 
            <input placeholder='search' className='flex-1 outline-none'/>
          </div>
        </div>
        <div className='m-12  '>
          <div className='flex flex-row items-center mb-5'>
            <img src={dummy} className='w-17 h-17'/>
            <div className='mx-5 flex flex-col max-w-104 mr-auto'>
              <span className='text-xl font-bold mb-1'>Jace Kayode</span>
              <span className='text-gray-500'>I'm an investor look for promising startups with the potential for high growth and significant returns.</span>
            </div>
            <div className='flex flex-col items-end  gap-2'>
              <img src={dots} className='h-6 w-6'/>
              <span className='text-white bg-main-500 px-2 py-1 rounded'>Visit Profile</span>
            </div>
          </div>
          <div className='flex flex-row items-center mb-5'>
            <img src={dummy} className='w-17 h-17'/>
            <div className='mx-5 flex flex-col max-w-104 mr-auto'>
              <span className='text-xl font-bold mb-1'>Jace Kayode</span>
              <span className='text-gray-500'>I'm an investor look for promising startups with the potential for high growth and significant returns.</span>
            </div>
            <div className='flex flex-col items-end  gap-2'>
              <img src={dots} className='h-6 w-6'/>
              <span className='text-white bg-main-500 px-2 py-1 rounded'>Visit Profile</span>
            </div>
          </div>
          <div className='flex flex-row items-center mb-5'>
            <img src={dummy} className='w-17 h-17'/>
            <div className='mx-5 flex flex-col max-w-104 mr-auto'>
              <span className='text-xl font-bold mb-1'>Jace Kayode</span>
              <span className='text-gray-500'>I'm an investor look for promising startups with the potential for high growth and significant returns.</span>
            </div>
            <div className='flex flex-col items-end  gap-2'>
              <img src={dots} className='h-6 w-6'/>
              <span className='text-white bg-main-500 px-2 py-1 rounded'>Visit Profile</span>
            </div>
          </div>
          <div className='flex flex-row items-center mb-5'>
            <img src={dummy} className='w-17 h-17'/>
            <div className='mx-5 flex flex-col max-w-104 mr-auto'>
              <span className='text-xl font-bold mb-1'>Jace Kayode</span>
              <span className='text-gray-500'>I'm an investor look for promising startups with the potential for high growth and significant returns.</span>
            </div>
            <div className='flex flex-col items-end  gap-2'>
              <img src={dots} className='h-6 w-6'/>
              <span className='text-white bg-main-500 px-2 py-1 rounded'>Visit Profile</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App