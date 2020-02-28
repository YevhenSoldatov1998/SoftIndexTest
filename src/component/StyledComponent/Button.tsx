import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
  background: #0f4c81;
  color: #fff;
  height: 35px;
  margin: 10px 0;
  transition: .3s ease;
  border: 0;
  outline: 0;
  &:disabled,
    button[disabled]{
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
}
  &:hover{
    background: #29679c;
  }
`