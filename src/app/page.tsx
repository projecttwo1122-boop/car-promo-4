'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CarShowroom from '@/components/CarShowroom';
import Footer from '@/components/Footer';
import RoadSigns from '@/components/RoadSigns';
import './layout.css';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CarShowroom />
      <Footer />
      <RoadSigns />
    </>
  );
}
