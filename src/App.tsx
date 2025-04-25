import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import InstallationGuide from './components/InstallationGuide';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <InstallationGuide />
      </main>
    </div>
  );
}

export default App;