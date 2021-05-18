import { query } from 'lib/db';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

interface Props {
  test: Fruit[];
}

interface Fruit {
  id: number;
  fruit: string;
}

const IndexPage: NextPage<Props> = ({ test }) => {
  return (
    <div>
      <Head>
        <title>NextJS Typescript Starter</title>
      </Head>

      <p>Just a starter for creating NextJS Typescript apps.</p>
      <pre>{JSON.stringify(test, null, 2)}</pre>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const result = await query('SELECT * FROM fruits');
  const { rows }: { rows: Fruit[] } = result;
  console.log(result);
  return { props: { test: rows } };
};

export default IndexPage;
