import React from 'react'
import styles from './TariffElectricity.module.scss'

const TariffElectricity = () => {
  return (
    <div className={styles.electricityTariff}>
      <h5 className={styles.title}>Тарифы на электроэнергию для населения
        (с 1.10.2021 по настоящее время)</h5>
      <table>
        <tfoot>
        <tr>
          <th colSpan={2}>Категория потребителей</th>
          <th>Тариф (коп. за 1 кВт⋅час, с НДС)
          </th>
        </tr>
        <tr>
          <td rowSpan={3}>1</td>
          <td>Для индивидуальных бытовых потребителей</td>
          <td>
          </td>
        </tr>
        <tr>
          <td>– за объем, употребленный до 250 кВт⋅час (включительно, за весь объем потребления)</td>
          <td>144,0</td>
        </tr>
        <tr>
          <td>– за объем, употребленный свыше 250 кВт⋅час (за весь объем потребления)</td>
          <td>168,0</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Для коллективных бытовых потребителей (за весь объем потребления)</td>
          <td>168,0</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Для общежитий (за весь объем потребления)</td>
          <td>168,0</td>
        </tr>
        </tfoot>

      </table>
    </div>
  )
}

export default TariffElectricity