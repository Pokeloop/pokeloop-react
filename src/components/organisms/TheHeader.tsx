import * as React from 'react';
import styled from 'styled-components';
import color from '@/styles/color.ts'

import Logo from '@/components/atoms/Logo.tsx'
import UserDropDown from '@/components/molecules/UserDropDown.tsx'

const _TheHeader = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    background-color: ${color.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
`

const TheHeader = () => {
  return (
    <_TheHeader>
      <Logo />
      <UserDropDown />
    </_TheHeader>
  )
}

export default TheHeader