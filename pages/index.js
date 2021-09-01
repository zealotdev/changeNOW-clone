import Head from 'next/head';

import { Hero } from '../components/hero';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>
          Best Crypto Exchange | Top Cryptocurrency Rates and Fees | ChangeNOW
        </title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <Hero />
      </main>
    </div>
  );
}
