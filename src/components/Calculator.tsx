'use client';

import { useState, useMemo } from 'react';
import styles from '@/styles/Calculator.module.css';
import { motion } from 'framer-motion';

const CONVERSION_INCREASE_RATE = 0.15; // +15%
const WORK_AUTOMATION_RATE = 0.5; // 50% of routine work

const Calculator = () => {
  const [annualRevenue, setAnnualRevenue] = useState(3_000_000); // Changed initial state
  const [managers, setManagers] = useState(5);
  const [avgSalary, setAvgSalary] = useState(90_000);

  const { revenueIncrease, salarySavings, totalBenefit } = useMemo(() => {
    const revenueIncrease = annualRevenue * CONVERSION_INCREASE_RATE;
    const salarySavings = (avgSalary * managers * WORK_AUTOMATION_RATE) * 12;
    const totalBenefit = revenueIncrease + salarySavings;
    return { revenueIncrease, salarySavings, totalBenefit };
  }, [annualRevenue, managers, avgSalary]);

  const formatCurrency = (value: number) => {
    if (value >= 1_000_000) {
      return `${(value / 1_000_000).toFixed(2)} млн ₽`;
    }
    if (value >= 1_000) {
      return `${(value / 1_000).toFixed(0)} тыс ₽`;
    }
    return `${value} ₽`;
  };

  return (
    <section className={styles.calculator}>
      <div className={styles.container}>
        <div className={styles.textWrapper}>
          <h2 className={styles.sectionTitle}>Ваша новая реальность</h2>
          <p className={styles.sectionSubtitle}>
            AI — это не расход, а инвестиция с предсказуемым результатом. 
            Введите ваши данные, чтобы увидеть годовую выгоду.
          </p>
        </div>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.controls}>
            <div className={styles.control}>
              <label htmlFor="annualRevenue">Ваш годовой доход</label>
              <span className={styles.controlValue}>{formatCurrency(annualRevenue)}</span>
              <input
                type="range"
                id="annualRevenue"
                min="3000000" // Changed min value
                max="500000000"
                step="1000000"
                value={annualRevenue}
                onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                className={styles.slider}
              />
            </div>
            <div className={styles.control}>
              <label htmlFor="managers">Количество менеджеров</label>
              <span className={styles.controlValue}>{managers}</span>
              <input
                type="range"
                id="managers"
                min="1"
                max="50"
                value={managers}
                onChange={(e) => setManagers(Number(e.target.value))}
                className={styles.slider}
              />
            </div>
            <div className={styles.control}>
              <label htmlFor="avgSalary">Средняя ЗП менеджера</label>
              <span className={styles.controlValue}>{formatCurrency(avgSalary)}</span>
              <input
                type="range"
                id="avgSalary"
                min="40000"
                max="300000"
                step="10000"
                value={avgSalary}
                onChange={(e) => setAvgSalary(Number(e.target.value))}
                className={styles.slider}
              />
            </div>
          </div>

          <div className={styles.results}>
            <p className={styles.totalBenefitLabel}>Дополнительная выгода в год</p>
            <p className={styles.totalBenefitValue}>{formatCurrency(totalBenefit)}</p>
            <div className={styles.breakdown}>
              <div className={styles.breakdownItem}>
                <span className={styles.breakdownLabel}>Рост дохода</span>
                <span className={styles.breakdownValue}>+ {formatCurrency(revenueIncrease)}</span>
              </div>
              <div className={styles.breakdownItem}>
                <span className={styles.breakdownLabel}>Экономия на ФОТ</span>
                <span className={styles.breakdownValue}>+ {formatCurrency(salarySavings)}</span>
              </div>
            </div>
            <a href="https://t.me/hunt_tg" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              Получить индивидуальный расчет
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Calculator;
