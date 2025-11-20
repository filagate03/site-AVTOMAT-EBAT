'use client';

import { useState } from 'react';
import styles from '@/styles/Faq.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'Чем ваша AI-автоматизация отличается от CRM?',
    answer: 'CRM — это система для ведения базы клиентов. Наш AI — это активный продавец, который живет ВНУТРИ вашей CRM. Он сам общается с клиентами, квалифицирует их и подогревает, а не просто хранит данные.'
  },
  {
    question: 'Мои сотрудники будут саботировать внедрение?',
    answer: 'Нет. Мы не усложняем, а упрощаем их работу. Менеджеры избавляются от рутины и получают в работу уже готовых, горячих лидов. Их KPI (и бонусы) растут. Они будут в восторге.'
  },
  {
    question: 'Насколько это безопасно для моей клиентской базы?',
    answer: 'Мы работаем по договору о неразглашении (NDA). Все данные шифруются и хранятся на защищенных серверах в РФ. Доступ к базе есть только у вас и у AI-агента, который является частью вашей системы.'
  },
  // Removed the question about weekly subscription
];

const FaqItem = ({ item }: { item: { question: string, answer: string } }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      layout 
      className={styles.faqItem}
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.h3 layout className={styles.question}>
        {item.question}
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} className={styles.icon}>+</motion.div>
      </motion.h3>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.answer}
          >
            <p>{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


const Faq = () => {
  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Ответы на главные вопросы</h2>
        <motion.div 
          className={styles.accordion}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {faqData.map((item, index) => (
             <motion.div key={index} variants={{ offscreen: { opacity: 0, y: 30 }, onscreen: { opacity: 1, y: 0 } }}>
              <FaqItem item={item} />
            </motion.div>
          ))}
        </motion.div>
         <div className={styles.ctaSection}>
          <h3>Не нашли свой вопрос?</h3>
          <p>Напишите мне напрямую в Telegram, и я лично отвечу в течение 15 минут.</p>
          <a href="https://t.me/hunt_tg" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
            Задать вопрос в Telegram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
