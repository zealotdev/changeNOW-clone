import { Tabs } from './tabs';

const Hero = () => {
  return (
    <div className="hero-bg bg-cover bg-no-repeat bg-center w-full h-screen flex justify-between">
      <div className="text-left flex flex-col items-start space-y-4  mt-20">
        <h1 className="text-5xl font-normal tracking-wider leading-relaxed text-white">
          Limitless Crypto <br /> Exchange
        </h1>
        <span className="text-gray-600 text-3xl">
          Fast Crypto Swap, Free of Custody
        </span>
        <button className="py-1 px-3 text-yellow-400 border border-yellow-400 hover:text-white hover:bg-yellow-400 transition-all duration-300">
          Get recommended Wallet
        </button>
      </div>
      <div>
        <Tabs></Tabs>
      </div>
    </div>
  );
};

export { Hero };
