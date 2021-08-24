import { useEffect, useRef, useState } from 'react';

const Nav = () => {
  const ref = useRef();

  // States for dropdown menu
  const [subMenuTriggered, setSubMenuTriggered] = useState(false);
  const [menuOf, setMenuOf] = useState('');

  // Event handler for dropdown menu
  const handleClick = (e, menu) => {
    e.preventDefault();
    setSubMenuTriggered(false);
    setSubMenuTriggered(!subMenuTriggered);
    setMenuOf(menu);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the dropdown menu is open and the clicked target is not within the menu,
      // then close the menu
      if (subMenuTriggered && ref.current && !ref.current.contains(e.target)) {
        setSubMenuTriggered(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [subMenuTriggered]);
  return (
    <header className="flex justify-between items-center">
      <a className="flex" href="#">
        <img src="./svg/logotype.svg" alt="logotype" />
        <img src="./svg/logotype-sub.svg" alt="logotype" />
      </a>
      <nav>
        <ul className="flex space-x-10">
          <li
            className="flex items-center space-x-2 main-menu"
            onClick={(e) => handleClick(e, 'currencies')}
            ref={ref}
          >
            <span>Currencies</span>
            <svg
              width="9"
              height="7"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-gray-200 hover:text-green-400"
            >
              <path
                d="M4.5 4.82L1.014 1.337.676 1 0 1.675l.338.338L4.162 5.83l.338.34.17-.17.168-.17 3.824-3.817L9 1.675 8.324 1l-.338.338L4.5 4.818z"
                fillRule="evenodd"
                strokeLinecap="square"
              ></path>
            </svg>

            <ul
              className={
                subMenuTriggered === true && menuOf === 'currencies'
                  ? 'sub-menu'
                  : 'hidden'
              }
            >
              <li>
                <a>Bitcoin</a>
              </li>
              <li>
                <a>Ethereum</a>
              </li>
              <li>
                <a>Ripple</a>
              </li>
              <li>
                <a>Cardano</a>
              </li>
              <li>
                <a>Binance Coin(BSC)</a>
              </li>
              <li>
                <a>Lite Coin</a>
              </li>
              <li>
                <a>THETA</a>
              </li>
              <li>
                <a>Solana</a>
              </li>
              <li>
                <a>Stella</a>
              </li>
              <li>
                <a>Monero</a>
              </li>
              <li>
                <a className="text-red-500 flex justify-between w-9/12 font-light">
                  <span>Polkadot</span>
                  <img src="./svg/dot.svg" alt="" />
                </a>
              </li>
              <li>
                <a>TRON</a>
              </li>
              <li>
                <a>All Currencies</a>
              </li>
            </ul>
          </li>
          <li className="main-menu">
            <span>For Partners</span>
          </li>
          <li
            className="flex items-center space-x-2 main-menu"
            onClick={(e) => handleClick(e, 'products')}
          >
            <span>Now Products</span>
            <svg
              width="9"
              height="7"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-gray-200 hover:text-green-400"
            >
              <path
                d="M4.5 4.82L1.014 1.337.676 1 0 1.675l.338.338L4.162 5.83l.338.34.17-.17.168-.17 3.824-3.817L9 1.675 8.324 1l-.338.338L4.5 4.818z"
                fillRule="evenodd"
                strokeLinecap="square"
              ></path>
            </svg>
            <ul
              className={
                subMenuTriggered === true && menuOf === 'products'
                  ? 'sub-menu'
                  : 'hidden'
              }
            >
              <li>
                <a>Asset Listing</a>
              </li>
              <li>
                <a>Token Swap</a>
              </li>
              <li>
                <a>ChangeNOW Wallet</a>
              </li>
              <li>
                <a>NOWPayment</a>
              </li>
              <li>
                <a>Mobile Exchange</a>
              </li>
              <li>
                <a>Lighting NOW</a>
              </li>
              <li>
                <a>Premium Lounge</a>
              </li>
              <li>
                <a>NOW Nodes</a>
              </li>
              <li>
                <a>Telegram Bot</a>
              </li>
            </ul>
          </li>
          <li
            className="flex items-center space-x-2 main-menu"
            onClick={(e) => handleClick(e, 'support')}
          >
            <span>Support</span>
            <svg
              width="9"
              height="7"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-gray-200 hover:text-green-400"
            >
              <path
                d="M4.5 4.82L1.014 1.337.676 1 0 1.675l.338.338L4.162 5.83l.338.34.17-.17.168-.17 3.824-3.817L9 1.675 8.324 1l-.338.338L4.5 4.818z"
                fillRule="evenodd"
                strokeLinecap="square"
              ></path>
            </svg>
            <ul
              className={
                subMenuTriggered === true && menuOf === 'support'
                  ? 'sub-menu'
                  : 'hidden'
              }
            >
              <li>
                <a>How it Works</a>
              </li>
              <li>
                <a>Help Center</a>
              </li>
              <li>
                <a>Contact Support</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </li>
          <li className="main-menu text-green-500">NOW Token</li>
          <li className="cursor-pointer">
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              xmlns="http://www.w3.org/2000/svg"
              class="fill-current text-gray-200 hover:text-green-400"
              fill="text-white"
            >
              <path d="M10.4863 2.125C8.59947 2.125 6.89381 2.94647 5.68518 4.27325C5.45273 4.52842 5.05743 4.54684 4.80225 4.31439C4.54708 4.08194 4.52866 3.68664 4.76111 3.43147C6.19135 1.86141 8.22569 0.875 10.4863 0.875C14.8491 0.875 18.3481 4.53392 18.3481 9C18.3481 13.4661 14.8491 17.125 10.4863 17.125C8.22569 17.125 6.19135 16.1386 4.76111 14.5685C4.52866 14.3134 4.54708 13.9181 4.80225 13.6856C5.05743 13.4532 5.45273 13.4716 5.68518 13.7268C6.89381 15.0535 8.59947 15.875 10.4863 15.875C14.1171 15.875 17.0981 12.8182 17.0981 9C17.0981 5.18181 14.1171 2.125 10.4863 2.125Z"></path>
              <path d="M0.848145 9C0.848145 8.65482 1.12797 8.375 1.47314 8.375H10.5893L9.1562 6.94194C8.91212 6.69786 8.91212 6.30214 9.1562 6.05806C9.40028 5.81398 9.79601 5.81398 10.0401 6.05806L12.982 9L10.0401 11.9419C9.79601 12.186 9.40028 12.186 9.1562 11.9419C8.91212 11.6979 8.91212 11.3021 9.1562 11.0581L10.5893 9.625H1.47314C1.12797 9.625 0.848145 9.34518 0.848145 9Z"></path>
            </svg>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Nav };
