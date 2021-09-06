const Services = () => {
  return (
    <div className="bg-white w-screen">
      <div className="md:w-11/12 xl:w-10/12 mx-auto pt-20">
        <h1 className="text-gray-800 text-4xl font-bold relative">
          The Service You Deserve
          <img
            className="absolute -top-4 right-80"
            src="./svg/index/stars-for-general-title.svg"
            alt="stars"
          />
        </h1>
        <div className="md:flex md:justify-evenly text-left md:w-5/6 mx-auto mt-20 items-center space-x-4 px-2 md:p-0">
          <img
            className="hidden md:block"
            src="./svg/limitless-exchange.svg"
            alt="limitless-exchange"
          />
          <div className="md:w-3/6 md:flex md:flex-col space-y-4">
            <h2 className="text-3xl font-semibold">Limitless Exchanges</h2>
            <p className="text-gray-400">
              You have all the freedom in the world — start with less than $2 in
              your favorite coin. You don't have to worry about any upper limits
              — swap as much crypto in one go as you want.
            </p>
            <a className="md:cursor-pointer text-green-500">
              Find out more {'>'}
            </a>
          </div>
        </div>
        <div className="md:flex md:flex-row-reverse md:justify-evenly text-left md:w-5/6 mx-auto mt-20 items-center space-x-4 px-2 md:p-0">
          <img
            className="hidden md:block"
            src="./svg/absolute-trust.svg"
            alt="limitless-exchange"
          />
          <div className="md:w-3/6 md:flex md:flex-col space-y-4">
            <h2 className="text-3xl font-semibold">Absolute Safety</h2>
            <p className="text-gray-400">
              Your safety is our top priority — as a non-custodial service,
              ChangeNOW does not control your crypto assets. We do not store
              your funds or require registration.
            </p>
            <a className="md:cursor-pointer text-green-500">
              Find out more {'>'}
            </a>
          </div>
        </div>
        <div className="md:flex md:justify-evenly text-left md:w-5/6 mx-auto mt-20 items-center space-x-4 px-2 md:p-0">
          <img
            className="hidden md:block"
            src="./svg/instant-crypto-exchange.svg"
            alt="limitless-exchange"
          />
          <div className="md:w-3/6 md:flex md:flex-col space-y-4">
            <h2 className="text-3xl font-semibold">Instant Crypto Exchange</h2>
            <p className="text-gray-400">
              Our service is built for simplicity and superspeed — we exchange
              crypto in 2 minutes on average. We also support Visa and
              MasterCard for fast and easy fiat-to-crypto purchases.
            </p>
            <a className="md:cursor-pointer text-green-500">Try it {'>'}</a>
          </div>
        </div>
        <div className="md:flex md:flex-row-reverse md:justify-evenly text-left md:w-5/6 mx-auto mt-20 items-center space-x-4 px-2 md:p-0">
          <img
            className="hidden md:block"
            src="./svg/honest-above-all.svg"
            alt="limitless-exchange"
          />
          <div className="md:w-3/6 md:flex md:flex-col space-y-4">
            <h2 className="text-3xl font-semibold">Honesty Above All</h2>
            <p className="text-gray-400">
              You no longer have to worry about picking the best exchange rate.
              We work with multiple cryptocurrency trading platforms and
              exchange partners to guarantee the best rates to our clients.
            </p>
            <a className="md:cursor-pointer text-green-500">
              Find out more {'>'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Services };
