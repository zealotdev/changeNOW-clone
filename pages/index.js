import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>
          Best Crypto Exchange | Top Cryptocurrency Rates and Fees | ChangeNOW
        </title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-green-500">ChangeNOW</h1>
      </main>
    </div>
  );
}
