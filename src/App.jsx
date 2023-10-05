import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'
import SocialProof from './socialProof/SocialProof'
import CtaOne from './ctaOne/CtaOne'
import CustomerLogos from './customerLogos/CustomerLogos'
import CtaTwo from './ctaTwo/CtaTwo'
import Blog from './blog/Blog'
import Contact from './contact/Contact'

import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <SocialProof />
      <CtaOne />
      <CustomerLogos />
      <CtaTwo />
      <Blog />
      <Contact />
    </div>
  );
}
export default App;
