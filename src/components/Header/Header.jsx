import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
const Header = (props) => {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.navLink} href="#" to="/electricity">ЭЛЕКТРИЧЕСТВО</NavLink>

      <NavLink className={styles.navLink} href="#" to="/gas">ГАЗ</NavLink>
      <NavLink className={styles.navLink} href="#" to="/watter">ВОДА</NavLink>
    </nav>
  )
}

export default Header