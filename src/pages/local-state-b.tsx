import { NextPage } from 'next';
import { LocalStateB } from '../components/LocalStateB';
import { Layout } from '../components/Layout';

const LocalStatePageB: NextPage = () => {
  return (
    <Layout title="Local State B">
      <LocalStateB />
    </Layout>
  );
};

export default LocalStatePageB;
