import { useState } from 'react';

const Tabs = () => {
  // Tabs switcher logic
  const tabs = ['tab 1', 'tab 2'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const switchActiveTab = () => {
    if (activeTab == 'tab 1') setActiveTab(tabs[1]);
    if (activeTab == 'tab 2') setActiveTab(tabs[0]);
  };

  // Exchange button switcher logic
  const [isBuyActive, setIsBuyActive] = useState(true);

  const handleSwitch = () => {
    setIsBuyActive(!isBuyActive);
  };

  return (
    <div className="md:tab-w-lg tab-bg rounded-lg bg-gray-700 mt-10 text-sm font-semibold ">
      <div className="flex text-white mx-auto w-full justify-evenly ">
        <button
          className={
            activeTab == 'tab 1'
              ? 'w-full rounded-tl-lg active-tab__left'
              : 'w-full rounded-t-lg tab-style'
          }
          onClick={() => switchActiveTab()}
        >
          Exchange Crypto
        </button>
        <button
          className={
            activeTab == 'tab 2'
              ? 'w-full rounded-tr-lg active-tab__right tab-style'
              : 'w-full rounded-t-lg tab-style'
          }
          onClick={() => switchActiveTab()}
        >
          <span>Buy / Sell Crypto</span>
          {/* <span className="flex space-x-2 content-center"> */}
          {/* <img
              className="h-16 w-1/5 p-0 m-0"
              src="./svg/credit-card.svg"
              alt=""
            /> */}
          {/* </span> */}
        </button>
      </div>
      <div className="tab-bg tab-content-border py-4 px-6 rounded-lg rounded-t-none relative">
        {activeTab == 'tab 1' && (
          <div>
            <div className="input-field text-lg md:text-2xl border border-yellow-200 rounded-t-lg text-white flex">
              <div className="relative">
                <input
                  className="pb-4 pl-4 md:pl-6 pt-8 bg-transparent"
                  type="text"
                  name="youpay"
                  id="youpay"
                  value="0.1"
                />
                <label
                  className="absolute left-2 top-2 text-gray-500 font-light text-xs md:text-sm"
                  htmlFor="youpay"
                >
                  You Send
                </label>
              </div>
              <select
                className="absolute right-7 rounded-tr-lg py-6 px-2 md:px-12 text-xl md:text-2xl text-white w-24 md:w-44"
                name="currency"
                id="currency"
              >
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
                <option value="USDT">USDT</option>
              </select>
            </div>
            <div className="my-4 flex justify-between rounded-lg">
              <div className="flex flex-col text-left text-white font-light text-sm space-y-3 overflow-x-auto">
                <span className="border-b border-dashed w-24 border-green-500">
                  No extra fees
                </span>
                <span className="border-b border-dashed w-56 border-green-500">
                  Estimated rate 1BTC ~ 38345 USD
                </span>
              </div>
              <div className="exchange-btn h-7 rounded-lg p-1">
                <svg
                  className="transform rotate-90"
                  width="25"
                  height="23"
                  viewBox="-2 -2 25 23"
                  id="exchange-arrows"
                  x="262"
                  y="162"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.006 4.99l-2.992 2.996-.338.338.675.676.34-.338 3.65-3.655.507-.507-.337-.338L15.69.338 15.35 0l-.674.676.338.338 2.97 2.976H1v1h17.006zm-15.166 10l2.99 2.996.34.338-.676.676-.338-.338-3.65-3.655L1 14.5l.338-.338 3.818-3.824.338-.338.675.676-.34.338-2.97 2.976h16.983v1H2.84z"
                    stroke="#00C26F"
                    fill="#00C26F"
                    fill-rule="evenodd"
                    stroke-linecap="square"
                  />
                </svg>
              </div>
            </div>
            <div className="input-field text-2xl rounded-t-lg text-white flex">
              <div className="relative">
                <input
                  className="pb-4 pl-4 md:pl-6 pt-8 bg-transparent"
                  type="text"
                  name="youget"
                  id="youget"
                  value="-"
                />
                <label
                  className="absolute left-2 top-2 text-gray-500 font-light text-xs md:text-sm"
                  htmlFor="youget"
                >
                  You Get
                </label>
              </div>
              <select
                className="absolute right-6 rounded-tr-lg py-7 px-2 md:px-12 text-xl md:text-2xl text-white w-24 md:w-44"
                name="currency"
                id="currency"
              >
                <option value="ETH">ETH</option>
                <option value="BTC">BTC</option>
                <option value="USDT">USDT</option>
              </select>
            </div>
            <button className="bg-green-500 w-full mt-10 mb-4 py-3 rounded-lg text-white font-semibold md:font-bold text-base md:text-lg">
              Exchange
            </button>
          </div>
        )}
        {activeTab == 'tab 2' && (
          <div>
            <div className="input-field text-lg md:text-2xl border border-yellow-200 rounded-t-lg text-white flex">
              <div className="relative">
                <input
                  className="pb-4 pl-6 pt-8 bg-transparent"
                  type="text"
                  name="youpay"
                  id="youpay"
                  value="1500"
                />
                <label
                  className="absolute left-2 top-2 text-gray-500 font-light text-xs md:text-sm"
                  htmlFor="youpay"
                >
                  You Pay
                </label>
              </div>
              <select
                className="absolute right-7 rounded-tr-lg py-6 px-2 md:px-12 text-xl md:text-2xl text-white w-24 md:w-44"
                name="currency"
                id="currency"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            <div className="my-4 flex justify-between rounded-lg">
              <div className="flex flex-col text-left text-white font-light text-sm space-y-3">
                <span className="border-b border-dashed w-24 border-green-500">
                  No extra fees
                </span>
                <span className="border-b border-dashed w-56 border-green-500">
                  Estimated rate 1BTC ~ 38345 USD
                </span>
              </div>
              <div className="exchange-btn flex h-9 p-1 rounded-lg">
                <button
                  className={
                    !isBuyActive
                      ? 'py-1 px-2 rounded-lg flex items-center font-bold exchange-btn__active'
                      : 'py-1 px-2 rounded-lg flex items-center font-bold text-white'
                  }
                  onClick={() => handleSwitch()}
                >
                  Sell
                  <svg
                    className={
                      !isBuyActive
                        ? 'stroke-current stroke-2 transform rotate-90  stroke-color__active'
                        : 'stroke-current stroke-2 transform rotate-90  text-white'
                    }
                    width="21"
                    height="10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.224 2.55l2.609 2.61-2.609 2.608M2.889 5.159h14.674"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className={
                    isBuyActive
                      ? 'py-1 px-2 rounded-lg bg-transparent flex items-center font-bold exchange-btn__active'
                      : 'py-1 px-2 rounded-lg bg-transparent flex items-center text-white font-bold'
                  }
                  onClick={() => handleSwitch()}
                >
                  Buy
                  <svg
                    className={
                      isBuyActive
                        ? 'stroke-current stroke-2 transform -rotate-90 font-extrabold stroke-color__active'
                        : 'stroke-current stroke-2 transform -rotate-90 font-extrabold text-white'
                    }
                    width="21"
                    height="10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.224 2.55l2.609 2.61-2.609 2.608M2.889 5.159h14.674"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="input-field text-2xl rounded-t-lg text-white flex">
              <div className="relative">
                <input
                  className="pb-4 pl-6 pt-8 bg-transparent"
                  type="text"
                  name="youget"
                  id="youget"
                  value="1500"
                />
                <label
                  className="absolute left-2 top-2 text-gray-500 font-light text-xs md:text-sm"
                  htmlFor="youget"
                >
                  You Get
                </label>
              </div>
              <select
                className="absolute right-6 rounded-tr-lg py-7 px-2 md:px-12 text-xl md:text-2xl text-white w-24 md:w-44"
                name="currency"
                id="currency"
              >
                <option value="BTC">BTC</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            <button className="bg-green-500 w-full mt-10 mb-4 py-3 rounded-lg text-white font-semibold md:font-bold text-base md:text-lg">
              Sell
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export { Tabs };
