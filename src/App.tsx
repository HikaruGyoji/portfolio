import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Works from './components/Works';
import Profile from './components/Profile';
import Contact from './components/Contact';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Layout>
        <Hero />
        <Works />
        <Profile />
        <Contact />
      </Layout>
    </LanguageProvider>
  );
}

export default App;