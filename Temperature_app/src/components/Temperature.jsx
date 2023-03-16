import React, {useState} from 'react'
import '../App.css'

function temperature({initialCount = 15} ) {
    const [temperatureValue, settemperatureValue] = useState(initialCount)
    let [temperatureColor, settemperatureColor] = useState('blue')


    const incTemp = () => {
        settemperatureValue((prev) => prev + 1);

        if(settemperatureValue < 15){
            settemperatureColor('green')
        }
        
    }

    const decTemp = () => {
        settemperatureValue((prev) => prev - 1)
    }
  return (
    <div className='container'>
      <div className='card'>
        <div className={`temperature ${temperatureColor}`}>{temperatureValue}</div>
        <div className='control-container'>
          <div className='controller plus'  onClick={incTemp}>+</div>
          <div className='controller minus' onClick={decTemp}>-</div>
        </div>
      </div>
    </div>
  )
}

export default temperature