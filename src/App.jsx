import { Navbar } from './components/header/Navbar';
import { Cta } from './components/main/cta/Cta';
import { CustomerLogos } from './components/main/customerLogos/CustomerLogos';
import { Hero } from './components/main/hero/Hero';
import { SocialProof } from './components/main/social_proof/SocialProof';
import { Fundraising } from './components/main/fundraising/Fundraising';
import { Blog } from './components/main/blog/Blog';
import useArrDataForBlog from './hooks/useArrDataForBlog';
import './App.css';
import { Contact } from './components/main/contact/Contact';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialProof />
      <Cta />
      <CustomerLogos />
      <Fundraising />
      <Blog
        arr1={useArrDataForBlog().arr1WithDataForBlog}
        arr2={useArrDataForBlog().arr2WithDataForBlog}
        arr3={useArrDataForBlog().arr3WithDataForBlog}
      />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
