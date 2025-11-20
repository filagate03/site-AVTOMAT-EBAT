'use client';

import { useState, FormEvent } from 'react';
import styles from '@/styles/ContactForm.module.css';

// This is a mock function. In a real application, this would send the data
// to a backend endpoint which then communicates with the Telegram Bot API and an SMS service.
const handleFormSubmit = async (name: string, phone: string) => {
  console.log('Form submitted:', { name, phone });
  
  // The backend endpoint would look something like this:
  // await fetch('/api/notify', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     message: `Новая заявка!\nИмя: ${name}\nТелефон: ${phone}`,
  //     phone: phone, // For SMS
  //   }),
  // });

  // Simulate an API call
  return new Promise(resolve => setTimeout(resolve, 1000));
};


const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setStatus('loading');
    try {
      await handleFormSubmit(name, phone);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className={styles.contactForm}>
      <div className={styles.container}>
        <h2 className={styles.title}>Получите бесплатный аудит</h2>
        <p className={styles.subtitle}>
          Оставьте заявку, и мы свяжемся с вами, чтобы обсудить, как AI может усилить ваш отдел продаж.
        </p>

        {status === 'success' ? (
          <div className={styles.successMessage}>
            <h3>Спасибо за вашу заявку!</h3>
            <p>Мы скоро свяжемся с вами. SMS с подтверждением уже в пути.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder="Ваше имя"
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Номер телефона"
                className={styles.input}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={styles.button} disabled={status === 'loading'}>
              {status === 'loading' ? 'Отправка...' : 'Отправить заявку'}
            </button>
            {status === 'error' && <p className={styles.error}>Что-то пошло не так. Попробуйте снова.</p>}
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
