import { Nav } from './../components/nav';

import './../styles/globals.css';
function MyApp({ Component, pageProps }) {
  return (
    <div className="md:w-11/12 xl:w-10/12 mx-auto mt-4 md:mt-6 px-2 md:px-0">
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
