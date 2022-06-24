import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { prisma } from '../utils/prisma';

const Home: NextPage<{ users: any[] }> = ({ users }) => {
  const { data, status } = useSession();

  return (
    <div>
      <h1>Hey!</h1>
      {JSON.stringify(users)}
    </div>
  );
};

export const getServerSideProps = async () => {
  const users = await prisma.user.findMany();

  return {
    props: {
      users,
    },
  };
};

export default Home;
