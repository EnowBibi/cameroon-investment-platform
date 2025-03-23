import React from 'react'
import logo from '../assets/logo.png'
import chartBar from "../assets/ChartBar.png"
import magnify from "../assets/magnify.png"
import chat from "../assets/ChatCircleDots.png"
import creditCard from "../assets/CreditCard.png"
import gear from "../assets/Gear.png"
import history from "../assets/history.png" 
import { useNavigate } from 'react-router-dom'
function NavBar({screen}) {
    const navigate=useNavigate();
    console.log(screen);
  return (
     <div className="flex flex-col items-center px-5 py-10 bg-main-500 flex-grow max-w-3/12 min-h-screen">
           <img src={logo} className='w-72 h-40'/>
           <div className={screen==='/'?
            'flex flex-row px-6 py-3 items-center text-white bg-gray-400 w-full'
                :
            'flex flex-row px-6 py-3 items-center text-white  w-full cursor-pointer'
           }
           onClick={()=>navigate('/')}
            >
              <img src={chartBar} className='w-6 h-6 mx-3'/>
              <span>Dashboard</span>
           </div>
           <div className={screen==='/findInvestors'?
            'flex flex-row px-6 py-3 items-center text-white bg-gray-400 w-full'
                :
           'flex flex-row px-6 py-3 items-center text-white  w-full cursor-pointer'
           }
            onClick={()=>navigate("/findInvestors")}
            >
              <img src={magnify} className='w-6 h-6 mx-3'/>
              <span>Find Investors</span>
           </div>
           <div className={screen==='/messages'?
                'flex flex-row px-6 py-3 items-center text-white bg-gray-400 w-full'
                        :
                'flex flex-row px-6 py-3 items-center text-white  w-full cursor-pointer'
                }
            >
              <img src={chat} className='w-6 h-6 mx-3'/>
              <span>Messages</span>
           </div>
           <div className={screen==='/statistics'?
                    'flex flex-row px-6 py-3 items-center text-white bg-gray-400 w-full'
                        :
                'flex flex-row px-6 py-3 items-center text-white  w-full cursor-pointer'
                }
                    >
              <img src={gear} className='w-6 h-6 mx-3'/>
              <span>Statistics</span>
           </div>
           <div className={screen==='/wallet'?
                'flex flex-row px-6 py-3 items-center text-white bg-gray-400 w-full'
                    :
            'flex flex-row px-6 py-3 items-center text-white  w-full cursor-pointer'
            }
                >
              <img src={creditCard} className='w-6 h-6 mx-3'/>
              <span>Wallet</span>
           </div>
           <div className={screen==='/settings'?
                'flex flex-row px-6 py-3 items-center text-white bg-gray-400 w-full'
                    :
            'flex flex-row px-6 py-3 items-center text-white  w-full cursor-pointer'
            }
                >
              <img src={history} className='w-6 h-6 mx-3'/>
              <span>Settings</span>
           </div>
          </div>
  )
}

export default NavBar