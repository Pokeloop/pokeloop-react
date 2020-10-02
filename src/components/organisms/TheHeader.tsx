import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import color from '@/styles/color.ts'

import Logo from '@/components/atoms/Logo.tsx'
import UserDropDown from '@/components/molecules/UserDropDown.tsx'
import { useAuth0 } from "@auth0/auth0-react";
import { UserStoreContext } from '@/store/user.tsx';

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
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const { state, dispatch } = useContext(UserStoreContext);
  return (
    <_TheHeader>
      <Logo />
      <UserDropDown
        login={() => dispatch({ type: 'LOGIN', loginWithRedirect })}
        isLoggedIn={state.isLoggedIn}
        user={state.user}
        logout={() => dispatch({ type: 'LOGOUT', logout })}
      />
    </_TheHeader>
  )
}

export default TheHeader