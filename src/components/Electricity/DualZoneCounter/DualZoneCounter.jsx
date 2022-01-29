import React, { useState } from 'react'
import styles from '../DualZoneCounter/DualZoneCounter.module.scss'
import TariffElectricity from '../TariffElectricity/TariffElectricity'

const DualZoneCounter = (props) => {
  const [counter, setCounter] = useState({
    nightCurrent: '',
    nightPrevious: '',
    dayCurrent: '',
    dayPrevious: '',
    result: '',
    differenceDay: '',
    differenceNight: ''
  })
  const tariff = (counter.dayCurrent - counter.dayPrevious) + (counter.nightCurrent - counter.nightPrevious) > 250 ? '1.68 грн, если вы использовали более 250 кВт-час в месяц' : (counter.dayCurrent - counter.dayPrevious) + (counter.nightCurrent - counter.nightPrevious) > 0 ? '1.44 грн, если вы использовали менее или 250 кВт-час в месяц' : 0
  const handleChangeNightCurrent = (e) => {
    setCounter({ ...counter, nightCurrent: e.target.value })
  }

  const handleChangeNightPrevious = (e) => {
    setCounter({ ...counter, nightPrevious: e.target.value })
  }
  const handleChangeDayCurrent = (e) => {
    setCounter({ ...counter, dayCurrent: e.target.value })
  }
  const handleChangeDayPrevious = (e) => {
    setCounter({ ...counter, dayPrevious: e.target.value })
  }

  const handleChangeDifferenceNight = (e) => {
    setCounter({ ...counter, differenceDay: e.target.value })
  }

  const handleChangeDifferenceDay = (e) => {
    setCounter({ ...counter, differenceNight: e.target.value })
  }

  const handleClick = () => {
    const sumDayNight = (counter.dayCurrent - counter.dayPrevious) + (counter.nightCurrent - counter.nightPrevious)
    const dayCurrentMinPrevious = counter.dayCurrent - counter.dayPrevious
    const nightCurrentMinPrevious = counter.nightCurrent - counter.nightPrevious

    if (sumDayNight > 250) {
      setCounter({
        ...counter,
        result: dayCurrentMinPrevious * 1.68 + nightCurrentMinPrevious * 0.84
      })
    } else {
      setCounter({
        ...counter,
        result: (counter.dayCurrent - counter.dayPrevious) * 1.44 + (counter.nightCurrent - counter.nightPrevious) * 0.72
      })
    }
  }
  return (
    <div className={styles.calculationItems}>
      <h3>Двухзонный счётчик</h3>
      <h6>с 23:00 до 7:00(НОЧЬ)</h6>
      <div className={styles.calculationItem}>
        <div className={styles.current}>
          <label htmlFor="current">Текущие, кВт</label>
          <input className="inputs-item" type="number" placeholder="Текущие" id="current"
                 onChange={handleChangeNightCurrent}
                 value={counter.nightCurrent}
          />
        </div>
        <div className={styles.previous}>
          <label htmlFor="previous">Предыдущие, кВт</label>
          <input placeholder="Предыдущие" type="number" id="previous"
                 onChange={handleChangeNightPrevious}
                 value={counter.nightPrevious}
          />
        </div>
        <div>
          <label htmlFor="difference">Разница, кВт</label>
          <input className="inputs-item" type="number" id="difference"
                 onChange={handleChangeDifferenceNight}
                 value={counter.nightCurrent - counter.nightPrevious}/>
        </div>
      </div>

      <h6>с 7:00 до 23:00(ДЕНЬ)</h6>

      <div className={styles.calculationItem}>
        <div className={styles.current}>
          <label htmlFor="current">Текущие, кВт</label>
          <input className="inputs-item" type="number" placeholder="Текущие" id="current"
                 onChange={handleChangeDayCurrent}
                 value={counter.dayCurrent}
          />
        </div>
        <div className={styles.previous}>
          <label htmlFor="previous">Предыдущие, кВт</label>
          <input placeholder="Предыдущие" type="number" id="previous"
                 onChange={handleChangeDayPrevious}
                 value={counter.dayPrevious}
          />
        </div>
        <div>
          <label htmlFor="difference">Разница, кВт</label>
          <input className="inputs-item" type="number" id="difference"
                 onChange={handleChangeDifferenceDay}
                 value={counter.dayCurrent - counter.dayPrevious}/>
        </div>
      </div>
      <button className={styles.btn} onClick={handleClick}>Рассчитать</button>
      <p className={styles.result}>К оплате: {Math.floor(counter.result * 100) / 100} грн</p>
      <p className={styles.tariff}>Ваш тариф: {tariff}</p>
      <TariffElectricity/>
    </div>
  )
}
export default DualZoneCounter