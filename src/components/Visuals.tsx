'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/Visuals.module.css';

const images = [
  {
    src: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Abstract AI visualization',
  },
  {
    src: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Code on a screen',
  },
  {
    src: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Team collaborating with technology',
  },
];

const Visuals = () => {
  return (
    <section className={styles.visuals}>
      <div className={styles.container}>
        <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
        >
          Интеграция будущего в ваш бизнес
        </motion.h2>
        <div className={styles.grid}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`${styles.gridItem} ${styles[`item${index}`]}`}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Visuals;
