'use client';
import { motion } from 'framer-motion';
import styles from '@/styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.backgroundShapes}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={`${styles.shape} ${styles.shape3}`}></div>
      </div>
      <div className={styles.container}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AI-автоматизация отдела продаж.
          <br />
          <span className={styles.highlight}>Результат через неделю.</span>
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Внедрим AI, который сам квалифицирует лидов, отвечает на вопросы и доводит до сделки.
          <br/>
          Ваши менеджеры будут общаться только с горячими клиентами.
        </motion.p>
        <motion.a 
          href="https://t.me/hunt_tg"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Обсудить проект в Telegram
        </motion.a>
      </div>
    </header>
  );
};

export default Header;