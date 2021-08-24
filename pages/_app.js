import { Nav } from './../components/nav';

import './../styles/globals.css';
function MyApp({ Component, pageProps }) {
  return (
    <div className="w-10/12 mx-auto my-8">
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
