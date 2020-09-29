import * as React from 'react';
import styled from 'styled-components';
import fontsize from '@/styles/font-size.ts'
import color from '@/styles/color.ts'

export default function CommonButton(props: { size?: string, text: string}) {
  const { size = 'medium', text } = props

  const _CommonButton = styled.button`
    border: 1px solid ${color.black};
    width: 100%;
    color: black;
    background-color: ${color.white};
    padding: 0px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    word-break: keep-all;
    cursor: pointer;
    outline: none;
    font-size: ${ () => fontsize[size] };
    height: ${() => size === 'medium' ? '40px' : '28'};
    &:hover {
      background-color: ${color.blue};
      border: 1px solid transparent;
    }
    &:active {
      background-color: ${color.gray};
      outline: none;
    }
  `

  return (
    <_CommonButton>
      { text }
    </_CommonButton>
  )
}