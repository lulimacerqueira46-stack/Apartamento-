/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { Floorplans } from './components/Floorplans';
import { Amenities } from './components/Amenities';
import { LocationSection } from './components/LocationSection';
import { FinancingCalculator } from './components/FinancingCalculator';
import { TrustSection } from './components/TrustSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { MobileStickyCta } from './components/MobileStickyCta';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col selection:bg-amber-400/30 selection:text-amber-200">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <Floorplans />
        <Amenities />
        <LocationSection />
        <FinancingCalculator />
        <TrustSection />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
      <MobileStickyCta />
    </div>
  );
}
