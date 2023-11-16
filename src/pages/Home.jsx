import {
  Layout,
  HeroComponent,
  SocialProofComponent,
  CTA2Component,
} from "../components/index";
import { SpecialCointaner } from "../App";

function HomePage({ hero, socialProof, cta2 }) {
  return (
    <Layout>
      <HeroComponent {...hero} />
      <SpecialCointaner>
        <SocialProofComponent socialProof={socialProof} />
      </SpecialCointaner>
      <CTA2Component cta2={cta2} displayCards={2} displayButtons={false} />
    </Layout>
  );
}

export default HomePage;
