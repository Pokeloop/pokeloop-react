import * as React from 'react';
import styled from 'styled-components';
import TheHeader from '@/components/organisms/TheHeader.tsx'
import { Auth0Provider } from "@auth0/auth0-react";

const DefaultLayout = ({ children }) => {
  const redirectUri = process.env.NEXT_PUBLIC_DOMAIN || 'http://localhost:3000' + '/callback'

  return (
    <Auth0Provider
        domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
        clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
        redirectUri={redirectUri}
      >
        <TheHeader />
          {children}
    </Auth0Provider>
  )
}

export default DefaultLayout