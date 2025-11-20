'use client';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import styles from '@/styles/Benefits.module.css';

const benefits = [
  {
    title: 'Рост конверсии до +30%',
    description: 'AI-агент не спит, не болеет и обрабатывает 100% входящих обращений, доводя каждого клиента до целевого действия.',
    icon: '/globe.svg',
  },
  {
    title: 'Снижение затрат на ФОТ',
    description: 'Один AI-агент заменяет до 5 линейных менеджеров, выполняя рутинные задачи по квалификации и общению с лидами.',
    icon: '/window.svg',
  },
  {
    title: 'Масштабируемость 24/7',
    description: 'Система готова к любым нагрузкам. Увеличивайте рекламный бюджет — AI обработает любой поток заявок без потери качества.',
    icon: '/file.svg',
  },
];

const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Ваш бизнес-результат через неделю</h2>
        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <div className={styles.cardIcon}>
                <Image src={benefit.icon} alt={`${benefit.title} icon`} width={40} height={40} />
              </div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardDescription}>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
