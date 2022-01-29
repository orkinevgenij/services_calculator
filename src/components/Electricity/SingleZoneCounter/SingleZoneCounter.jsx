import React, { useState } from 'react'
import styles from '../SingleZoneCounter/SingleZoneCounter.module.scss'
import TariffElectricity from '../TariffElectricity/TariffElectricity'

const SingleZoneCounter = (props) => {
  const [counter, setCounter] = useState({
    current: '',
    previous: '',
    difference: '',
    result: ''
  })
  const tariff = counter.current - counter.previous > 250 ? '1.68 грн, если вы использовали более 250 кВт-час в месяц' : counter.current - counter.previous > 0 ? '1.44 грн, если вы использовали менее или 250 кВт-час в месяц' : 0

  function handleChangeCurrent (e) {
    setCounter({ ...counter, current: e.target.value })
  }

  function handleChangePrevious (e) {
    setCounter({ ...counter, previous: e.target.value })
  }

  function handleChangeDifference () {
    setCounter({ ...counter, difference: (counter.current - counter.previous) })
  }

  function handleClick () {
    if (counter.current - counter.previous > 250) {
      setCounter({ ...counter, result: (counter.current - counter.previous) * 1.68 })
    } else {
      setCounter({ ...counter, result: (counter.current - counter.previous) * 1.44 })
    }
  }

  return (
    <div className={styles.calculationItems}>
      <h3>Однозонный счётчик</h3>
      <div className={styles.calculationItem}>
        <div className={styles.current}>
          <label htmlFor="current">Текущие, кВт</label>
          <input className={styles.inputsItem} type="number" placeholder="Текущие" id="current"
                 onChange={handleChangeCurrent}
                 value={counter.current}
          />
        </div>
        <div className={styles.previous}>
          <label htmlFor="previous">Предыдущие, кВт</label>
          <input className={styles.inputsItem} placeholder="Предыдущие" type="number" id="previous"
                 onChange={handleChangePrevious}
                 value={counter.previous}
          />
        </div>
        <div>
          <label htmlFor="difference">Разница, кВт</label>
          <input className={styles.inputsItem} type="number" id="difference"
                 onChange={handleChangeDifference}
                 value={counter.current - counter.previous}
          />
        </div>
      </div>
      <button className={styles.btn} onClick={handleClick}>Рассчитать</button>
      <p className={styles.result}>К оплате: {Math.floor(counter.result * 100) / 100} грн</p>
      <p className={styles.tariff}>Ваш тариф: {tariff}</p>
      <TariffElectricity/>
    </div>
  )
}
export default SingleZoneCounter