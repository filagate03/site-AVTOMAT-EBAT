'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/HowItWorks.module.css';

const steps = [
  {
    number: '01',
    title: 'Бесплатный аудит и стратегия',
    description: 'За 1 день анализируем ваш бизнес-процесс и разрабатываем AI-стратегию. Никаких обязательств.',
  },
  {
    number: '02',
    title: 'Настройка и интеграция',
    description: 'В течение 2-3 дней настраиваем AI-агентов и бесшовно интегрируем их в вашу CRM-систему.',
  },
  {
    number: '03',
    title: 'Запуск и получение прибыли',
    description: 'Вы получаете первых обработанных лидов и видите рост прибыли. ROI заметен уже через неделю.',
  },
];

const HowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>От идеи до результата за 3 дня</h2>
        <div className={styles.timeline}>
          {steps.map((step, index) => (
             <motion.div 
              key={index} 
              className={styles.step}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;