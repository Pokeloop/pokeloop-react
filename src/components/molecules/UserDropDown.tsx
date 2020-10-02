import React from 'react';
import styled from 'styled-components';
import color from '@/styles/color.ts'

const _UserDropDown = styled.div`
    display: flex;
    align-items: center;
  `

const _UserInfo = styled.div`
    margin-right: 20px;
    color: ${color.white};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100px;
  `

const _UserAction = styled.div`
    color: ${color.blue};
    border-bottom: 1px solid ${color.blue};
    cursor: pointer;
    user-select: none;
`
export default function UserDropDown(props: { login: any, logout: any, isLoggedIn: boolean, user: any}) {
  const { logout, login, isLoggedIn, user } = props
  let button;
  let username;
  if (isLoggedIn) {
    button = <div onClick={logout}>ログアウト</div>
    username = <div>{user.name}</div>
  } else {
    button = <div onClick={login}>ログイン</div>
    username = <div></div>
  }

  return (
    <_UserDropDown>
      <_UserInfo>
        {username}
      </_UserInfo>
      <_UserAction>
        {button}
      </_UserAction>
    </_UserDropDown>
  )
}