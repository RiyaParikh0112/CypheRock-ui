import React, { useState } from 'react'
import Coins from './Coins'
import './Coins.css'

import SouthWestIcon from '@mui/icons-material/SouthWest'
import NorthEastIcon from '@mui/icons-material/NorthEast'
import ReceiveMain from '../Receive/ReceiveMain'
type Props = {
  coins: any
  prev: any
}

const CoinItem: any = (props: Props) => {
  const [showModal, setShowModal]: any = useState(false)

  const openModal = () => {
    setShowModal((prev: any) => !prev)
  }
  return (
    <div className='coin_row'>
      <div className='coin_row__imagesymbol'>
        <img src={props.coins.image} alt='image' className='coin_logo' />
        <p>{props.coins.name}</p>
      </div>
      <p className='coin_symbol'>{props.coins.symbol}</p>
      <p className='coin_price'>$ {props.coins.current_price}</p>
      <button
        onClick={() => {
          setShowModal((prev: any) => !prev)
        }}
        className='coin_row__receive'
      >
        <SouthWestIcon /> RECEIVE
      </button>
      {showModal && <ReceiveMain closeModal={setShowModal} />}
      <button className='coin_row__send'>
        <NorthEastIcon />
        SEND
      </button>
    </div>
  )
}

export default CoinItem
