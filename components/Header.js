import React from 'react';
import styles from '@/styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="KukuFM Logo" className={styles.logo} />
      <input type="text" placeholder="Search audiobooks & stories" className={styles.searchBox} style={{ height: '40px' }} />
      <nav className={styles.nav}>
        <a href="/" className={styles.navLink}>Get Free Trial</a>
        <a href="/about" className={styles.navLink}>Buy Coins</a>
        <a href="/contact" className={styles.navLink}>Login/Signup</a>
        <a href="/download" className={styles.navLink}>
          <FontAwesomeIcon icon={faDownload} className={styles.downloadIcon} />
        </a>
      </nav>
    </header>
  );
};

export default Header;
