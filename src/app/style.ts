import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";

const lightPink = '#F1E2EB';
const darkBlue = '#053649'

export const GlobalStyle: any = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme === 'light' ? lightPink : darkBlue};
    color: ${props => props.theme === 'light' ? '#2E2999' : '#C6FEFF'};
    font-family: 'Capriola', sans-serif;
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

interface IProps {
  children: any
}

export const Testdiv = styled.div<IProps>`
  
`;

