import Head from 'next/head';
import { Footer } from '../components/footer';

import { Hero } from '../components/hero';
import { Services } from '../components/services';

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Best Crypto Exchange | Top Cryptocurrency Rates and Fees | ChangeNOW
        </title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        {/* Hero Section */}
        <Hero />
        {/* Services Section */}
        <Services />
        {/* Services */}
        <Footer />
      </main>
    </div>
  );
}
