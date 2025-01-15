import React from 'react'
import "./AppDownload.css"
import { assets } from '../../assets/frontend_assets/assets'


const AppDownload = () => {
  return (
    <div className='app-doawnload' id='app-download'>
        <p>
            For better experience Downloa <br/> Master Chef App
        </p>
      <div className="app-downloa-platforms">

        <img src={assets.play_store} alt="" />
        <img src={assets.app_store}  alt="" />
         
      </div>

    </div>
  )
}

export default AppDownload
