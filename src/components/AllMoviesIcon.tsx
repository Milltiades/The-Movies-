import React, { useContext }  from 'react'
import styled from 'styled-components'

import { ThemeData } from './ThemeComponent'
import { MyContext } from './UserPage'

export default function AllMoviesIcon() {

const context = useContext<any>(MyContext)

  return (
    <Svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z" fill= {context.isColorA ? ThemeData.colors.white : ThemeData.colors.lightBlue }/></Svg>
  )
}

const Svg = styled.svg`
  transform: scale(0.8);
  @media (width > 767px){
    transform: scale(1);
  }

`