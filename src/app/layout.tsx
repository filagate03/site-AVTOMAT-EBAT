import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'AI-автоматизация отдела продаж — ROI через неделю',
  description: 'Внедрим AI-автоматизацию в ваш отдел продаж за 3 дня. Увеличьте прибыль и сократите издержки. Попробуйте бесплатный аудит!',
  keywords: ['AI автоматизация продаж', 'бесплатный аудит', 'быстрый ROI', 'автоматизация отдела продаж'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
