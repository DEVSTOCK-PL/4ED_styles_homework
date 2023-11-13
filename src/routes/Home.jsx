import { Hero } from '../components/main/hero/Hero';
import { SocialProof } from '../components/main/social_proof/SocialProof';
import { Fundraising } from '../components/main/fundraising/Fundraising';
import { Layout } from '../components/Layout';

function Home() {
  return (
    <Layout>
      <Hero />
      <SocialProof />
      <Fundraising disabledButton={true} />
    </Layout>
  );
}

export default Home;
