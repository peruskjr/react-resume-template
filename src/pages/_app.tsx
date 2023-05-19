import {memo} from 'react';
import type {AppProps} from 'next/app';
import {Analytics} from '@vercel/analytics/react';
import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <Component{...pageProps}/>
      <Analytics />
    </>
  );
});

export default MyApp;