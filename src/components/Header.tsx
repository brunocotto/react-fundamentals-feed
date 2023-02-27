import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
      <div className={styles.title}>
        <span>React Fundamentals Feed</span>
      </div>    
    </header>
  )
}