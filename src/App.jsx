import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'
import SocialProof from './socialProof/SocialProof'
import CtaOne from './ctaOne/CtaOne'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <SocialProof />
      <CtaOne />
    </div>
  );
}
export default App;
