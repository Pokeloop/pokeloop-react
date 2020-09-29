import * as React from 'react';
import '../styles/globals.css'
import DefaultLayout from '@/layouts/default.tsx'

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default MyApp
