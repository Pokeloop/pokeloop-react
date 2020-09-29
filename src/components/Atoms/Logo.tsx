import * as React from 'react';
import styled from 'styled-components';
import fontsize from '@/styles/font-size.ts'
import color from '@/styles/color.ts'

export default function Logo() {

  const _Logo = styled.div`
    height: 100%;
    width: 88px;
    background: black;
    img {
      height: 100%;
      width: 100%;
    }
  `

  return (
    <_Logo>
      <img src="/logo.png" />
    </_Logo>
  )
}