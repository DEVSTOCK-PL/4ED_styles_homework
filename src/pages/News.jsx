import { Layout, CTA1Component } from "../components/index";

function NewsPage({ cta1 }) {
  return (
    <Layout>
      <CTA1Component cta1={cta1} />
    </Layout>
  );
}

export default NewsPage;
