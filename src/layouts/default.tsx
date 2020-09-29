import * as React from 'react';
import styled from 'styled-components';
import TheHeader from '@/components/organisms/TheHeader.tsx'

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <TheHeader />
      {children}
    </div>
  )
}

export default DefaultLayout