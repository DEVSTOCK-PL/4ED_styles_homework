import { Fundraising } from '../components/main/fundraising/Fundraising';
import { Blog } from '../components/main/blog/Blog';
import useArrDataForBlog from '../hooks/useArrDataForBlog';
import { Layout } from '../components/Layout';

function Events() {
  return (
    <Layout>
      <Fundraising forEvents />
      <Blog
        arr1={useArrDataForBlog().arr1WithDataForBlog}
        arr2={useArrDataForBlog().arr2WithDataForBlog}
        arr3={useArrDataForBlog().arr3WithDataForBlog}
      />
    </Layout>
  );
}

export default Events;
