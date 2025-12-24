import type { Metadata } from 'next';
import './layout.css';

export const metadata: Metadata = {
  title: 'Premium Auto - Премиум коллекция автомобилей',
  description: 'Откройте для себя совершенство в каждой детали. Эксклюзивная коллекция выбранных автомобилей.',
  keywords: 'автомобили, премиум авто, коллекция, куплю авто',
  openGraph: {
    title: 'Premium Auto - Премиум коллекция автомобилей',
    description: 'Откройте для себя совершенство в каждой детали. Эксклюзивная коллекция выбранных автомобилей.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        {/* American highway background (CSS-render, no photo) */}
        <div className="road-scene" aria-hidden="true">
          <div className="road-ground" />
          <div className="road-castshadows" />
          <div className="road-reflections" />
          <div className="road-atmosphere" />
          <div className="road-filmgrain" />
        </div>
        {process.env.NODE_ENV !== 'production' ? (
          <div className="road-debug-badge" aria-hidden="true">
            road v2
          </div>
        ) : null}
        <div className="app-content">{children}</div>
      </body>
    </html>
  );
}

