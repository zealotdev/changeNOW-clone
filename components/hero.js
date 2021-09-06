import { Tabs } from './tabs';

const Hero = () => {
  return (
    <section className="w-full h-auto ">
      <div className="md:hero-bg bg-cover bg-no-repeat bg-center flex flex-col md:flex-row justify-between">
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
      {/* Hints for large screens */}
      <div className="hidden md:flex justify-evenly my-20">
        <div className="flex flex-col items-center h-56 justify-between w-3/12">
          <img className="h-38 w-40" src="./svg/index/pick.svg" alt="" />
          <h4 className="font-bold text-white">Pick a Crypto</h4>
          <p className="text-white font-light">
            We support more than 10 000 currency pairs and the list is
            constantly growing.{' '}
            <a className="underline text-purple-400">Pick</a> the one you like.
          </p>
        </div>
        <img
          className="h-5 self-center w-8"
          src="./svg/index/arrow.svg"
          alt=""
        />
        <div className="flex flex-col items-center h-56 justify-between w-3/12">
          <img className="h-16 w-18" src="./svg/index/exchange.svg" alt="" />
          <h4 className="font-bold text-white">Exchange</h4>
          <p className="text-white font-light">
            We handle everything complicated so that you can spend your time on
            what matters. No registration. No hidden fees. No surprises.
          </p>
        </div>
        <img
          className="h-5 self-center w-8"
          src="./svg/index/arrow.svg"
          alt=""
        />
        <div className="flex flex-col items-center h-56 justify-between w-3/12">
          <img className="h-16 w-18" src="./svg/index/funds.svg" alt="" />
          <h4 className="font-bold text-white">Receive your Funds</h4>
          <p className="text-white font-light">
            We match the estimate and the outcome better than anyone else,
            thanks to our RealRates system. And it’s super-fast and safe for
            you.
          </p>
        </div>
      </div>
      {/* Hints for Mobile */}
      <div className="my-20 block md:hidden">
        <h3 className="text-white font-bold">Simple as 1,2,3</h3>
        <div className="flex flex-col items-center space-y-10 my-10">
          <div className="flex flex-col items-center h-56 justify-between w-7/12">
            <img
              className="h-38 w-40"
              src="./svg/index/pick-mobile.svg"
              alt=""
            />
            <h4 className="font-bold text-white">Pick a Crypto</h4>
            <p className="text-white font-light">
              We support more than 10 000 currency pairs and the list is
              constantly growing.{' '}
              <a className="underline text-purple-400">Pick</a> the one you
              like.
            </p>
          </div>
          <img
            className="h-5 self-center w-8 transform rotate-90"
            src="./svg/index/arrow.svg"
            alt=""
          />
          <div className="flex flex-col items-center h-56 justify-between w-7/12">
            <img
              className="h-16 w-18"
              src="./svg/index/exchange-mobile.svg"
              alt=""
            />
            <h4 className="font-bold text-white">Exchange</h4>
            <p className="text-white font-light">
              We handle everything complicated so that you can spend your time
              on what matters. No registration. No hidden fees. No surprises.
            </p>
          </div>
          <img
            className="h-5 self-center w-8 transform rotate-90"
            src="./svg/index/arrow.svg"
            alt=""
          />
          <div className="flex flex-col items-center h-56 justify-between w-7/12">
            <img
              className="h-16 w-18"
              src="./svg/index/funds-mobile.svg"
              alt=""
            />
            <h4 className="font-bold text-white">Receive your Funds</h4>
            <p className="text-white font-light">
              We match the estimate and the outcome better than anyone else,
              thanks to our RealRates system. And it’s super-fast and safe for
              you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
