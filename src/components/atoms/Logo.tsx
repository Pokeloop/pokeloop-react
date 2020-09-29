import * as React from 'react';
import styled from 'styled-components';

const _Logo = styled.div`
    height: 100%;
    width: 88px;
    img {
      height: 100%;
      width: 100%;
    }
  `

export default function Logo() {
  return (
    <_Logo>
      <img src="/logo.png" />
    </_Logo>
  )
}