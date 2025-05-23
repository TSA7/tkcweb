import { useScreen } from '@/Hooks/useScreen'
import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SwitchAccessShortcutIcon from '@mui/icons-material/SwitchAccessShortcut';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import useAuth from '@/Hooks/useAuth';

function Avatar({handleShow, show}) {
    const large = useScreen()
    const {username, email} = useAuth()
    const handleLogout = ()=>{
        localStorage.removeItem('tkc_token')
        if(typeof window !== 'undefined'){
            window.location.reload()
        }
    }
  return (
    <div className='relative' onClick={(e)=> e.stopPropagation()}>
      <button onClick={()=> handleShow()} className={`${large? 'w-11 h-11':'w-8 h-8'} flex items-center justify-center border-2 rounded-full`} style={{borderColor:'rgba(85, 17, 168, 0.95)', backgroundColor:'rgba(85, 17, 168, 0.07)', color:'rgba(85, 17, 168, 1)'}}>
              <p>S</p>
        </button>
    {show && <div style={{borderColor:'rgba(0, 0, 0, 0.22)'}} className={`border-2 rounded-lg bg-white  absolute  divide-gray-200 cursor-pointer flex flex-col divide-y w-62 h-52 ${large? 'left-13 -top-0':'right-1 top-10'}`}>
                <div className=' p-2 w-full flex flex-row items-center gap-3'>
                    <button className={`${large? 'w-8 h-8':'w-7 h-7'} flex items-center justify-center border-2 rounded-full`} style={{borderColor:'rgba(85, 17, 168, 0.95)', backgroundColor:'rgba(85, 17, 168, 0.07)', color:'rgba(85, 17, 168, 1)'}}><p>S</p></button>
                    <div>
                        <p className=' font-bold text-[15px]'>{email}</p>
                        <p className='text-[15px] relative bottom-1'>{username}</p>
                    </div>
                </div>
                <button className=' flex justify-between flex-row py-1 px-2 items-center'>
                    <div className=' flex flex-row gap-4 items-center'>
                        <DarkModeIcon sx={{fontSize:28, color:'rgba(95, 99, 104, 1)'}}/>
                        <p className=' text-[15px]'>Theme</p>
                    </div>
                   <div>
                    <KeyboardArrowRightIcon sx={{fontSize:28, color:'rgba(95, 99, 104, 1)'}}/>
                   </div>
                </button>
                <button className=' flex justify-between flex-row py-1 px-2 items-center'>
                    <div className=' flex flex-row gap-4 items-center'>
                        <SwitchAccessShortcutIcon sx={{fontSize:28, color:'rgba(95, 99, 104, 1)'}}/>
                        <p className=' text-[15px]'>Switch account</p>
                    </div>
                   <div>
                    <KeyboardArrowRightIcon sx={{color:'rgba(95, 99, 104, 1)'}}/>
                   </div>
                </button>
                <button className=' flex flex-row gap-4 items-center py-1 px-2'>
                    <SettingsIcon sx={{color:'rgba(95, 99, 104, 1)'}}/>
                    <p className=' text-[15px]'>Settings</p>                   
                </button>
                <button onClick={()=> handleLogout()} className=' flex flex-row gap-4 py-2 px-3 text-red-800 items-center'>
                    <LogoutIcon/>
                    <p className=' text-[15px]'>Logout</p>
                </button>
            </div>
    }
    </div>
  )
}

export default Avatar
