import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import color from '@/styles/color.ts'
import { UserStoreContext } from '@/store/user.tsx';
import { useAuth0 } from "@auth0/auth0-react";

const Callback = () => {
  const { state, dispatch } = useContext(UserStoreContext);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  //TODO ここでgraphqlからユーザー情報を取得できるようにする
  useEffect(() => {
      dispatch({type: 'SET_USER', user})
    },
    [user]
  );

  return (
    <div>ローディング</div>
  )
}

export default Callback
