import styles from '@/styles/Cases.module.css';
import Image from 'next/image';

const cases = [
  {
    title: 'Таксомоторная компания',
    description: 'Обработка 200+ заявок в день. Маршрутизация и назначение водителей в 3 клика.',
    icon: '/file.svg', // Placeholder icon
  },
  {
    title: 'Интернет-магазин',
    description: 'Рост конверсии на 15% за счет автоматических допродаж и персонализированных рекомендаций.',
    icon: '/file.svg',
  },
  {
    title: 'B2B-поставщик',
    description: 'Сокращение цикла сделки на 40% благодаря автоматической квалификации лидов.',
    icon: '/file.svg',
  }
];

const Cases = () => {
  return (
    <section className={styles.cases}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Кейсы внедрения</h2>
        <div className={styles.grid}>
          {cases.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src={item.icon} alt={`${item.title} icon`} width={40} height={40} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
