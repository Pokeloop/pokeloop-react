import React, { createContext, useReducer } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const initialState = {
  user: null,
  count: 0,
  isLoggedIn: false
};
export const UserStoreContext = createContext(initialState) as any;

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      action.loginWithRedirect()
      return {
        user: null
      }
    case 'LOGOUT':
      action.logout()
      return {
        user: null,
        isLoggedIn: false
      }
    case 'SET_USER':
      return { user: action.user, isLoggedIn: true };
    default:
      throw new Error();
  }
}

export const UserStoreProvider = ({ children }): any => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserStoreContext.Provider value={{ state, dispatch }}>
      { children }
    </UserStoreContext.Provider>
  )
};
