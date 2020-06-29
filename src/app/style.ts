import { createGlobalStyle } from 'styled-components';
// import styled from "styled-components";

// const lightPink = '#E6DFED';
// const darkBlue = '#053649'

interface IGlobalStyle {
  theme: 'light' | 'dark'
}

export const GlobalStyle = createGlobalStyle<IGlobalStyle>`
  * {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme === 'light' ? 'white' : '#053649'};
    color: ${props => props.theme === 'light' ? '#2E2999' : '#C6FEFF'};
    font-family: 'Capriola', sans-serif;
    scroll-behavior: smooth;
  }
  #root {
    height: 100%
  }
  
  @font-face {
    font-family: 'Capriola', sans-serif;
    font-family: 'Josefin Sans', sans-serif;
    font-family: 'Noto Sans JP', sans-serif;
    font-family: 'Rubik', sans-serif; 
    src: url('href="https://fonts.googleapis.com/css2?family=Capriola&family=Josefin+Sans:wght@500&family=Noto+Sans+JP&family=Rubik:wght@300;400;500&display=swap" rel="stylesheet"'); 
   }
`;

