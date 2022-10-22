import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <>
      <Header />
      <Sidebar />
      <main className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
