const Footer = () => {
  const exchangePairsOne = [
    'BTC to ETH',
    'BTC to LTC',
    'BTC to DOGE',
    'BTC to XRP',
    'BTC to BCH',
    'BTC to XMR',
    'BTC to USDT',
    'BTC to BNB',
    'BTC to TRX',
    'ETH to LTC',
    'ETH to XMR',
    'ETH to XRP',
  ];

  const exchangePairsTwo = [
    'ETH to BTC',
    'LTC to BTC',
    'DOGE to BTC',
    'XRP to BTC',
    'BCH to BTC',
    'XMR to BTC',
    'XLM to BTC',
    'BNB to BTC',
    'TRX to BTC',
    'ADA to BTC',
    'XMR to ETH',
    'LTC to XMR',
  ];

  const supportedCoins = [
    'Bitcoin',
    'Ethereum',
    'Ripple',
    'Cardano',
    'Binance Coin (BSC)',
    'Litecoin',
    'Theta',
    'Solana',
    'Stellar',
    'Monero',
    'Polkadot',
    'TRON',
    'All Currencies',
  ];

  const apiAndTools = [
    'Development API',
    'For Partners',
    'Widgets',
    'Referral Program',
    'Partners Profile',
    'Premium Lounge',
    'DeFi Portal',
    'Buy Crypto',
    'Token Swap',
    'NOW Token',
  ];

  const companyAndTeam = [
    'About Us',
    'Jobs',
    'Our Videos',
    'Blog & News',
    'Press About Us',
    'Price Predictions',
    'NOW Responsibility',
  ];

  const support = [
    'How It Works',
    'FAQ',
    'Contact Us',
    'KYC/AML',
    'Status Page',
    'Asset Listing',
  ];

  return (
    <div className=" w-full">
      {/* Footer links */}
      <div className="flex w-full justify-between mt-16">
        {/* Exchange Pairs Links */}
        <div className="w-3/12 text-left">
          <span className="text-gray-600 text-sm font-bold">
            Exchange Pairs
          </span>
          <div className="flex justify-between w-11/12 pt-4">
            <ul>
              {exchangePairsOne.map((pair) => {
                return (
                  <li key={pair}>
                    <a
                      href="#"
                      className="text-gray-200 leading-loose tracking-wider"
                    >
                      {pair}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul>
              {exchangePairsTwo.map((pair) => {
                return (
                  <li key={pair}>
                    <a
                      href="#"
                      className="text-gray-200 leading-loose tracking-wider"
                    >
                      {pair}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* Supported Coins Links */}
        <div className="text-left">
          <span className="text-gray-600 text-sm font-bold">
            Supported Coins
          </span>
          <div className="pt-4">
            <ul>
              {supportedCoins.map((coin) => {
                {
                  if (coin == 'Polkadot') {
                    return (
                      <a className="text-red-500 flex justify-between space-x-1 w-6/12 font-light">
                        <span>Polkadot</span>
                        <img src="./svg/dot.svg" alt="" />
                      </a>
                    );
                  }
                }
                return (
                  <li key={coin}>
                    <a
                      href="#"
                      className="text-gray-200 leading-loose tracking-wider"
                    >
                      {coin}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* API and Tools Links */}
        <div className="text-left">
          <span className="text-gray-600 text-sm font-bold">API & Tools</span>
          <div className="pt-4">
            <ul>
              {apiAndTools.map((item) => {
                return (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-200 leading-loose tracking-wider"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* Company and Team Links */}
        <div className="text-left">
          <span className="text-gray-600 text-sm font-bold">
            Company & Team
          </span>
          <div className="pt-4">
            <ul>
              {companyAndTeam.map((item) => {
                return (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-200 leading-loose tracking-wider"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* Support Links */}
        <div className="text-left">
          <span className="text-gray-600 text-sm font-bold">Support</span>
          <div className="pt-4">
            <ul>
              {support.map((item) => {
                return (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-200 leading-loose tracking-wider"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* Footer banner */}
      <div className="mt-10 flex justify-between">
        {/* logo */}
        <div className="flex justify-between relative w-2/12">
          <a className="flex space-x-4" href="#">
            <img
              src="./svg/logotype.svg"
              alt="logotype"
              className="w-10/12 md:w-full"
            />
            <img
              src="./svg/logotype-sub.svg"
              alt="logotype"
              className="hidden lg:block w-full"
            />
          </a>
        </div>
        {/* App Store Links */}
        <div className="flex space-x-4">
          <a href="">
            <img src="./svg/app-store.svg" alt="app-store" />
          </a>
          <a href="">
            <img src="./svg/google-play.svg" alt="google-play" />
          </a>
          <a href="">
            <img src="./svg/apk-download.svg" alt="apk-download" />
          </a>
        </div>
      </div>
      {/* Rates and Social Links */}
      <div className="flex justify-between mt-10">
        {/* Rate Us */}
        <div className="flex space-x-2 items-center">
          <span className="text-gray-600 text-sm font-normal">Rate us on</span>
          {/* <img src="./svg/trustpilot-fresh.svg" alt="trustpilot-logo" /> */}
          <span className="text-white">TRUSTPILOT</span>
          <span className="text-white ">|</span>
          <a href="">
            <img src="./svg/bestchange.svg" alt="bestchange-logo" />
          </a>
        </div>
        {/* Social Links */}
        <div className="text-white font-extralight italic">get social</div>
      </div>
      {/* Copyright */}
      <div className="flex justify-center items-center mt-10 mb-16 space-x-4">
        <span className="text-white text-sm font-light">
          &copy;changeNOW - {new Date().getFullYear()} CHN Group Limited
        </span>
        <a className="text-gray-600 text-sm font-light" href="">
          Terms of Use
        </a>
        <a className="text-gray-600 text-sm font-light" href="">
          Privacy Policy
        </a>
        <a className="text-gray-600 text-sm font-light" href="">
          Risk Disclosure Statement
        </a>
      </div>
    </div>
  );
};

export { Footer };
