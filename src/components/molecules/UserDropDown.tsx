import * as React from 'react';
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
export default function UserDropDown(props: { login: any, logout: any }) {
  const { login, logout } = props
  return (
    <_UserDropDown>
      <_UserInfo>
        ハヤシさん
      </_UserInfo>
      <_UserAction>
        <div onClick={login}>ログイン</div>
        <div onClick={logout}>ログアウト</div>
      </_UserAction>
    </_UserDropDown>
  )
}