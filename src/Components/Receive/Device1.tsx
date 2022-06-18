import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import DoneIcon from '@mui/icons-material/Done'
import './Device1.css'

type Props = {}

const Device1 = (props: Props) => {
  return (
    <div>
      <div className='device_container'>
        <p>Follow the instruction on device</p>
        <div className='device_container__list'>
          <div className='device_container_left'>
            <ArrowRightAltIcon />
            <h4>Select the Wallet On device</h4>
          </div>
          <div className='device_container_right'>
            <DoneIcon />
          </div>
        </div>
        <div className='device_container__list'>
          <div className='device_container_left'>
            <ArrowRightAltIcon />
            <h4>Select the Coin on device</h4>
          </div>
          <div className='device_container_right'>
            <DoneIcon />
          </div>
        </div>
        <div className='device_container__list'>
          <div className='device_container_left'>
            <ArrowRightAltIcon />
            <h4>Tap 1 card of any 4 Cards</h4>
          </div>
          <div className='device_container_right'>
            <DoneIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Device1
