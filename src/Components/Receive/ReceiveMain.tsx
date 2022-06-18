import React, { useState } from 'react'
import './ReceiveMain.css'
import Stepper_main from './Stepper_main'
import Verification2 from './Verification2'

type Props = {
  // showModal: any
  // setShowModal: any
  closeModal: any
}

const ReceiveMain = ({ closeModal }: Props) => {
  return (
    <div className='modal_background'>
      <div className='modal_container'>
        <div className='modal_close_button'>
          <button
            onClick={() => {
              closeModal((prev: any) => !prev)
            }}
          >
            X
          </button>
        </div>

        <div className='modal_title'>
          <h2>Receive</h2>
        </div>
        <div className='modal_stepper'>
          <Stepper_main />
        </div>
        <div className='modal_process'></div>
      </div>
    </div>
  )
}

export default ReceiveMain
