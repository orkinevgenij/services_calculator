import React, { useState } from 'react'
import './Water.module.scss'
import styles from '../Electricity/DualZoneCounter/DualZoneCounter.module.scss'
import TariffWater from './TariffWater/TariffWater'

const Water = (props) => {
  const [waterCounter, setWaterCounter] = useState({
    current: '',
    previous: '',
    difference: '',
    result: ''
  })

  const handleChangeCurrent = (e) => {
    setWaterCounter({ ...waterCounter, current: e.target.value })
  }
  const handleChangePrevious = (e) => {
    setWaterCounter({ ...waterCounter, previous: e.target.value })
  }
  const handleChangeDifference = (e) => {
    setWaterCounter({ ...waterCounter, difference: e.target.value })
  }

  const handleClick = () => {
    setWaterCounter({ ...waterCounter, result: (waterCounter.current - waterCounter.previous) * 31.36 })
  }
  return (
    <div className="water">
      <h3>Вода</h3>
      <div className={styles.calculationItem}>
        <div className={styles.current}>
          <label htmlFor="current">Текущие, кВт</label>
          <input className="inputs-item" type="number" placeholder="Текущие" id="current"
                 onChange={handleChangeCurrent}
                 value={waterCounter.current}
          />
        </div>
        <div className={styles.previous}>
          <label htmlFor="previous">Предыдущие, кВт</label>
          <input placeholder="Предыдущие" type="number" id="previous"
                 onChange={handleChangePrevious}
                 value={waterCounter.previous}

          />
        </div>
        <div>
          <label htmlFor="difference">Разница, кВт</label>
          <input className="inputs-item" type="number" id="difference"
                 onChange={handleChangeDifference}
                 value={waterCounter.current - waterCounter.previous}
          />
        </div>

      </div>
      <button className={styles.btn} onClick={handleClick}>Рассчитать</button>
      <p className={styles.result}>К оплате: {Math.floor(waterCounter.result * 100) / 100} грн</p>
      <TariffWater/>
    </div>
  )
}

export default Water