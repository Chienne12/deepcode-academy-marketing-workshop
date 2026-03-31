/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Audience from './components/Audience';
import Outcomes from './components/Outcomes';
import Differences from './components/Differences';
import Deliverables from './components/Deliverables';
import Curriculum from './components/Curriculum';
import Methods from './components/Methods';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Audience />
        <Outcomes />
        <Differences />
        <Deliverables />
        <Curriculum />
        <Methods />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

