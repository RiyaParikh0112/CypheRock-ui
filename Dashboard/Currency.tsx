import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Coins from './Coins'

type Props = {
  
}

function Currency({}: Props) {

    const [coins,setCoins]:any=useState([])
    const url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=BTC&order=market_cap_desc&per_page=4&page=1&sparkline=false'
    useEffect(()=>{
        axios.get(url).then((response )=>{
            setCoins(response.data)
            console.log(response.data[0])
            // .catch((error:any)=>{
            //     console.log(error)
            // })
            // first item of the array
        })
    },[])
  return (
    <div>
       <Coins coins={coins}key={coins.id}/>
       {/* Passed in the parent component(Coins) the type of Prop coins=any */}
    </div>


  )
}


export default Currency