import React, { useState } from 'react'
import styles from '../ThreeZoneCounter/ThreeZoneCounter.module.scss'
import TariffElectricity from '../TariffElectricity/TariffElectricity'

const ThreeZoneCounter = (props) => {

  const [counter, setCounter] = useState({
    peakCurrent: '',
    peakPrevious: '',
    halfPeakCurrent: '',
    halfPeakPrevious: '',
    nightCurrent: '',
    nightPrevious: '',
    differencePeak: '',
    differenceHalfPeak: '',
    differenceNight: '',
    result: ''
  })
  const tariff = (counter.peakCurrent - counter.peakPrevious) + (counter.halfPeakCurrent - counter.halfPeakPrevious) + (counter.nightCurrent - counter.nightPrevious) > 250 ? '1.68 грн, если вы использовали более 250 кВт-час в месяц' : (counter.peakCurrent - counter.peakPrevious) + (counter.halfPeakCurrent - counter.halfPeakPrevious) + (counter.nightCurrent - counter.nightPrevious) > 0 ? '1.44 грн, если вы использовали менее или 250 кВт-час в месяц' : 0

  const handleChangePeakCurrent = (e) => {
    setCounter({ ...counter, peakCurrent: e.target.value })
  }

  const handleChangePeakPrevious = (e) => {
    setCounter({ ...counter, peakPrevious: e.target.value })
  }

  const handleChangeHalfPeakCurrent = (e) => {
    setCounter({ ...counter, halfPeakCurrent: e.target.value })
  }

  const handleChangeHalfPeakPrevious = (e) => {
    setCounter({ ...counter, halfPeakPrevious: e.target.value })
  }

  const handleChangeNight = (e) => {
    setCounter({ ...counter, nightCurrent: e.target.value })
  }

  const handleChangeNightPrevious = (e) => {
    setCounter({ ...counter, nightPrevious: e.target.value })
  }

  const handleChangeDifferencePeak = (e) => {
    setCounter({ ...counter, differencePeak: e.target.value })
  }

  const handleChangeDifferenceHalfPeak = (e) => {
    setCounter({ ...counter, differenceHalfPeak: e.target.value })
  }

  const handleChangeDifferenceNight = (e) => {
    setCounter({ ...counter, differenceNight: e.target.value })
  }

  const handleClick = () => {
    const sumPeakHalfNight = (counter.peakCurrent - counter.peakPrevious) + (counter.halfPeakCurrent - counter.halfPeakPrevious) + (counter.nightCurrent - counter.nightPrevious)
    const peakCurrentMinPrevious = counter.peakCurrent - counter.peakPrevious
    const halfCurrentMinPrevious = counter.halfPeakCurrent - counter.halfPeakPrevious
    const nightMinPrevious = counter.nightCurrent - counter.nightPrevious

    if (sumPeakHalfNight > 250) {
      setCounter({
        ...counter,
        result: peakCurrentMinPrevious * 2.52 + halfCurrentMinPrevious * 1.68 + nightMinPrevious * 0.672
      })
    } else {
      setCounter({
        ...counter,
        result: peakCurrentMinPrevious * 2.16 + halfCurrentMinPrevious * 1.44 + nightMinPrevious * 0.576
      })
    }
  }
  return (
    <div className={styles.calculationItems}>
      <h3>Трехзонный счётчик</h3>
      <h6>с 8:00 до 11:00 и с 20:00 до 22:00(ПИК)</h6>
      <div className={styles.calculationItem}>
        <div className={styles.current}>
          <label htmlFor="current">Текущие, кВт</label>
          <input className="inputs-item" type="number" placeholder="Текущие" id="current "
                 onChange={handleChangePeakCurrent}
                 value={counter.peakCurrent}
          />
        </div>
        <div className={styles.previous}>
          <label htmlFor="previous">Предыдущие, кВт</label>
          <input placeholder="Предыдущие" type="number" id="previous"
                 onChange={handleChangePeakPrevious}
                 value={counter.peakPrevious}/>
        </div>
        <div>
          <label htmlFor="difference">Разница, кВт</label>
          <input className="inputs-item" type="number" id="difference"
                 onChange={handleChangeDifferencePeak}
                 value={counter.peakCurrent - counter.peakPrevious}/>
        </div>
      </div>
      <h6>с 7:00 до 8:00, с 11:00 до 20:00 и с 22:00 до 23:00(ПОЛУПИК)</h6>
      <div className={styles.calculationItem}>

        <div className={styles.current}>
          <label htmlFor="current">Текущие, кВт</label>
          <input className="inputs-item" type="number" placeholder="Текущие" id="current"
                 onChange={handleChangeHalfPeakCurrent}
                 value={counter.halfPeakCurrent}
          />
        </div>
        <div className={styles.previous}>
          <label htmlFor="previous">Предыдущие, кВт</label>
          <input placeholder="Предыдущие" type="number" id="previous"
                 onChange={handleChangeHalfPeakPrevious}
                 value={counter.halfPeakPrevious}
          />
        </div>
        <div>
          <label htmlFor="difference">Разница, кВт</label>
          <input className="inputs-item" type="number" id="difference"
                 onChange={handleChangeDifferenceHalfPeak}
                 value={counter.halfPeakCurrent - counter.halfPeakPrevious}
          />
        </div>
      </div>
      <h6>с 23:00 до 7:00(НОЧЬ) </h6>
      <div className={styles.calculationItem}>
        <div className={styles.current}>
          <label htmlFor="current">Текущие, кВт</label>
          <input className="inputs-item" type="number" placeholder="Текущие" id="current"
                 onChange={handleChangeNight}
                 value={counter.nightCurrent}
          /></div>
        <div className={styles.previous}>
          <label htmlFor="previous">Предыдущие, кВт</label>
          <input placeholder="Предыдущие" type="number" id="previous"
                 onChange={handleChangeNightPrevious}
                 value={counter.nightPrevious}/>
        </div>
        <div>
          <label htmlFor="difference">Разница, кВт</label>
          <input className="inputs-item" type="number" id="difference"
                 onChange={handleChangeDifferenceNight}
                 value={counter.nightCurrent - counter.nightPrevious}/>
        </div>
      </div>
      <button className={styles.btn} onClick={handleClick}>Рассчитать</button>
      <p className={styles.result}>К оплате: {Math.floor(counter.result * 100) / 100} грн</p>
      <p
        className={styles.tariff}>Ваш тариф: {tariff}</p>
      <TariffElectricity/>
    </div>
  )
}
export default ThreeZoneCounter