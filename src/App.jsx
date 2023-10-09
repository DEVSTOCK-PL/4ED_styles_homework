// import reactLogo from './assets/react.svg';
import './App.css';
// import styled from 'styled-components';
import { Navbar } from './components/header/Navbar';
import { Cta } from './components/main/cta/Cta';
import { Hero } from './components/main/hero/Hero';
import { SocialProof } from './components/main/social_proof/SocialProof';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialProof />
      <Cta />
    </>
  );
}

export default App;
