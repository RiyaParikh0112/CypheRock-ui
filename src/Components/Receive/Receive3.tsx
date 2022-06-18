import React from 'react'
import './Receive3.css'

type Props = {}
const makeid = (length: any) => {
  var result = ''
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < 20; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

function Receive3({}: Props) {
  return (
    <div className='receive_container'>
      <p>Coin Address</p>
      <div className='receive_copy'>
        <h2>{makeid(20)}</h2>
        <button>Copy</button>
      </div>
      <h4> ! address verified</h4>
      <div className='receive_reverify'>
        <button>Re-verify</button>
      </div>
    </div>
  )
}

export default Receive3
