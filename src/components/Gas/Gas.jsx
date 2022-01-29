import React, { useState } from 'react'
import styles from '../Electricity/DualZoneCounter/DualZoneCounter.module.scss'
import TariffGas from './TariffGas/TariffGas'

const Gas = (props) => {
  const [gasCounter, setGasCounter] = useState({
    current: '',
    previous: '',
    difference: '',
    result: '',
  })

  const handleChangeGasCurrent = (e) => {
    setGasCounter({ ...gasCounter, current: e.target.value })
  }
  const handleChangeGasPrevious = (e) => {
    setGasCounter({ ...gasCounter, previous: e.target.value })
  }
  const handleChangeDifference = (e) => {
    setGasCounter({ ...gasCounter, difference: e.target.value })
  }

  const handleClick = () => {
    setGasCounter({ ...gasCounter, result: (gasCounter.current - gasCounter.previous) * 7.99 })
  }
  return (<div>
      <h3>Газ</h3>
      <div className={styles.calculationItem}>
        <div className={styles.current}>
          <label htmlFor="current">Текущие, кВт</label>
          <input className="inputs-item" type="number" placeholder="Текущие" id="current"
                 onChange={handleChangeGasCurrent}
                 value={gasCounter.current}
          />
        </div>
        <div className={styles.previous}>
          <label htmlFor="previous">Предыдущие, кВт</label>
          <input placeholder="Предыдущие" type="number" id="previous"
                 onChange={handleChangeGasPrevious}
                 value={gasCounter.previous}/>
        </div>
        <div>
          <label htmlFor="difference">Разница, кВт</label>
          <input className="inputs-item" type="number" id="difference"
                 onChange={handleChangeDifference}
                 value={gasCounter.current - gasCounter.previous}
          />
        </div>
      </div>
      <button className={styles.btn} onClick={handleClick}>Рассчитать</button>
      <p className={styles.result}>К оплате: {Math.floor(gasCounter.result * 100) / 100} грн</p>
      <TariffGas/>
    </div>
  )
}

export default Gas