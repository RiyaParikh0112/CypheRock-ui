import React from 'react'
import CoinItem from './CoinItem'
import './Coins.css'

type Props = {
    coins:any
}

const Coins = (props: Props) => {
  return (
    <div className='cointainer'>
        {/* <div className="cointainer__heading">
             
        </div> */}
        {props.coins.map( (coins: any)=>{
            return (
                <CoinItem coins={coins} key={coins.id}/>
            )
        })}
    </div>
  )
}

export default Coins