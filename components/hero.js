import { Tabs } from './tabs';

const Hero = () => {
  return (
    <div className="md:hero-bg bg-cover bg-no-repeat bg-center w-full h-screen ">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="text-left flex flex-col items-start space-y-4 mt-10 md:mt-20">
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
      <div className="mt-28 flex flex-row-reverse md:flex-row  justify-evenly md:justify-between text-white items-center ">
        <div>
          Buy Crypto with
          <img src="./svg/visa-master.svg" alt="" />
        </div>
        <div>
          <img
            className="hidden md:block"
            src="./svg/trustpilot-fresh.svg"
            alt=""
          />
          <img className="md:hidden" src="./svg/index/trust-pilot.svg" alt="" />
        </div>
      </div>
      <div className="my-10 w-full">
        <img
          className="hidden mx-auto md:block transition duration-500 ease-in-out transform hover:scale-105 lg:cursor-pointer"
          src="./svg/premium-banner.svg"
          alt=""
        />
        <img className="md:hidden mx-auto" src="./svg/mobile-apps.svg" alt="" />
      </div>
    </div>
  );
};

export { Hero };
