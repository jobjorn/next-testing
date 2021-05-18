import { query } from 'lib/db';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

interface Props {
  test: string;
}

const IndexPage: NextPage<Props> = ({ test }) => {
  return (
    <div>
      <Head>
        <title>NextJS Typescript Starter</title>
      </Head>
      <p>Just a starter for creating NextJS Typescript apps.</p>
      <p>{test}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const result = await query('SELECT NOW() as now');
  console.log(result);
  return { props: { test: 'hej3' } };
};

export default IndexPage;
