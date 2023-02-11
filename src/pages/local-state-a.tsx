import { NextPage } from 'next';
import { LocalStateA } from '../components/LocalStateA';
import { Layout } from '../components/Layout';

const LocalStatePageA: NextPage = () => {
  return (
    <Layout title="Local State A">
      <LocalStateA />
    </Layout>
  );
};

export default LocalStatePageA;
