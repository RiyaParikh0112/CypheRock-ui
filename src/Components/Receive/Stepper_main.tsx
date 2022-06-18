import React from 'react'
import './Stepper_main.css'

import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Device1 from './Device1'
import Verification2 from './Verification2'
import Receive3 from './Receive3'
type Props = {}
function getSteps() {
  return ['Device', 'Verification', 'Receive']
}

function Stepper_main({}: Props) {
  const [activeStep, setActiveStep] = React.useState(0)
  const [autoPopulateData, setAutoPopulateData] = React.useState([])
  const steps = getSteps()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }
  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel className='stepper'>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel className='stepper_name'>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep < 1 ? (
        <div className='page1'>
          <Device1 />
          <button className='button' onClick={handleNext}>
            Next
          </button>
        </div>
      ) : activeStep === 1 ? (
        <div className='page2'>
          <Verification2 handleNext={handleNext} />
          <button className='button' onClick={handleNext}>
            Next
          </button>
        </div>
      ) : (
        <div>
          <Receive3 />
        </div>
      )}
    </div>
  )
}

export default Stepper_main
