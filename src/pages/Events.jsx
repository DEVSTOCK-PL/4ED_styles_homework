import { Layout, CTA2Component, Blog } from "../components/index";

function EventsPage({ cta2, blog }) {
  return (
    <Layout>
      <CTA2Component cta2={cta2} displayCards={4} displayButtons={true} />
      <Blog blogData={blog} />
    </Layout>
  );
}

export default EventsPage;
