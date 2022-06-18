import React from 'react'
import './Verification2.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import DoneIcon from '@mui/icons-material/Done'

type Props = {
  handleNext: any
}

const handleNext = () => {
  handleNext()
}
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

const Verification2 = (props: Props) => {
  return (
    <div className='verification'>
      <div className='verification_copy'>
        <h2>{makeid(20)}</h2>
      </div>
      <div className='verfication_below'>
        <p>Verify address on device</p>
        <div className='verification_below__box'>
          <div className='verification_below__left'>
            <ArrowRightAltIcon />
            <h4>Select the Wallet On device</h4>
          </div>
          <div className='verification_below__right'>
            <DoneIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Verification2
