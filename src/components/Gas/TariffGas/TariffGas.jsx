import React from 'react'
import styles from './TariffGas.module.scss'
const TariffGas = (props) => {
  return (<div>
      <table className={styles.table}>
        <tr>
          <th>Название предприятия</th>
          <th>Тариф</th>
        </tr>
        <tr>
          <td>ТОВ «Дніпропетровськгаз Збут»</td>
          <td>7,99</td>
        </tr>

      </table>
    </div>
  )
}

export default TariffGas