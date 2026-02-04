import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhySection } from './components/WhySection';
import { Deliverables } from './components/Deliverables';
import { Audience } from './components/Audience';
import { Process } from './components/Process';
import { SocialProof } from './components/SocialProof';
import { StJosephHistory } from './components/StJosephHistory';
import { RosaryGuide } from './components/RosaryGuide';
import { PrayerSection } from './components/PrayerSection';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WhySection />
        <Deliverables />
        <Audience />
        <Process />
        <SocialProof />
        <StJosephHistory />
        <RosaryGuide />
        <PrayerSection />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;