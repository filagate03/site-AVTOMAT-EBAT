import Header from '@/components/Header';
import Benefits from '@/components/Benefits';
import Visuals from '@/components/Visuals'; // New component
import Calculator from '@/components/Calculator';
import HowItWorks from '@/components/HowItWorks';
import Faq from '@/components/Faq';
import styles from '@/app/page.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <p>© {new Date().getFullYear()} AI Sales Automation. Все права защищены.</p>
      <a href="https://t.me/hunt_tg" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
        Связаться в Telegram
      </a>
    </div>
  </footer>
);

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Benefits />
      <HowItWorks />
      <Visuals />
      <Calculator />
      <Faq />
      <Footer />
    </main>
  );
}