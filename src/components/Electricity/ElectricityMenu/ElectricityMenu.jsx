import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './ElectricityMenu.module.scss'

const ElectricityMenu = (props) => {
  return (
    <div className={styles.nav}>
      <NavLink to="/" className={styles.navItem}>Однозонный</NavLink>
      <NavLink to="/dual" className={styles.navItem}>Двухзонный</NavLink>
      <NavLink to="/three" className={styles.navItem}>Трехзонный</NavLink>
    </div>

  )
}

export default ElectricityMenu