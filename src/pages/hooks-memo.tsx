import { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { CreateUser } from '../components/CreateUser';

const HooksMemo: NextPage = () => {
  return (
    <Layout title="Hooks memo">
      <CreateUser />
    </Layout>
  );
};

export default HooksMemo;
