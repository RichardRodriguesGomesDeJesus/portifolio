import styled, { keyframes, ThemedStyledProps } from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

const Header = styled.header`
  display: flex ;
  
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 0 ){
    flex-flow: column nowrap;
  };
  @media screen and (min-width: 768px ){
    flex-flow: row nowrap;
  };
`

const SocialIcons =styled.ul`
  display: flex;
  margin: 1rem 0 0 0 ;
  gap: 1rem ;
  width: 100%;
`

const LinkSocial = styled.a`
  display: flex;
  line-height: 1.15;
  font-size: 1rem;
  text-align: center;
  text-decoration: none
  height: 38px;
  width: 38px;
`

const Menu = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 1rem 0 0 0 ;
  width: 100%;
  @media screen and (min-width: 0 ){
    align-items: center;
    flex-flow: column nowrap;
  };
  @media screen and (min-width: 768px ){
    flex-flow: row nowrap;
  };
  a{
    color: #D3D3D3;
    font-size: 1.2rem;
    padding: 6px;
    &:hover{
      border-bottom: solid 2px #fff;
      color:#fff ;
      padding: 5px;
    }
  }
`

const Main = styled.main`
  padding: 1rem 0 0 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const typing = keyframes`
  from { width: 0 }
`

const blinkCursor = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #fff } 
`
const Title = styled.h1`
  animation: ${typing} 3s steps(10, end), ${blinkCursor} 0.75s step-end infinite;
  background: #000000a6;
  border-right: .15em solid #fff;
  overflow: hidden;
  
  letter-spacing: 0.1em;
  
  white-space: nowrap;
  width: 33ch;
  @media screen and (min-width: 0 ){
    font-size: 1.1rem;
    margin: 1rem;
  };
  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  };

`

const Banner = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  
  width: 100vw  ;
  @media screen and (min-width: 0 ){
    background: #000 ;
    height: calc( 50vh - 4rem);
  };
  @media screen and (min-width: 768px) {
    background: url('/img/dev_img.jpg') center / cover no-repeat;
    height: calc( 100vh - 4rem);
  };
`

const SecondaryTitle = styled.h2`
  font-size: 2rem;
  line-height: 1.15;
  margin: 2rem 0;
  text-align: center;
  text-decoration: none;
  width:100%;
`

const Text = styled.p`
  border-radius: 16px;
  color: #444444 ;
  line-height: 1.15;
  text-decoration: none;
  @media screen and (min-width: 0 ){
    font-size: 2rem;
    padding: 0 8px;
  };
  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
    padding: 0 8px;
  };
`
const Sobre = styled.div`
  display: flex;
  margin: 16px 0;
  padding: 16px 32px;
  width: 100vw;
  div{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width:100%;
    p{
      font-size: 1.2rem;
      strong{
        font-size:2rem;
        text-decoration: underline;
      }
    }
  }
  
  @media screen and (min-width: 0 ){
    img{
      display: none;
    }
  }
  @media screen and (min-width: 768px) {
    img{
      border: solid 5px #D3D3D3;
      border-radius: 50% ;
      display: flex;
      max-height: 50%;
      margin: 0 auto;
      max-width: 50%;
    }
  }
`

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  &:nth-child(2){
    transition-delay: 200ms;
  }
  &:nth-child(3){
    transition-delay: 400ms;
  }
  &:nth-child(4){
    transition-delay: 600ms;
  }
  &:nth-child(5){
    transition-delay: 800ms;
  }
  &:nth-child(6){
    transition-delay:1000ms;
  }
  &:nth-child(7){
    transition-delay: 1200ms;
  }
  @media screen and (min-width: 0 ){
    margin: 1rem 6px;
    gap: 1rem;
  }
  @media screen and (min-width: 768px) {
    justify-content: space-around;
    margin: 1rem 36px;
  }
`;



const Card =styled.div` 
  align-items: center;
  background: #f4f4f4;
  border-radius: 16px;
  box-shadow: #000 1px 4px 4px;
  display: flex;
  flex-direction: column;
  filter: blur(5px);
  justify-content: space-around;
  margin: 0 auto;
  opacity: 0;
  transition: all 1s;
  transform: translateX(-100%);
  img{
    width:120px;
  }
  @media screen and (min-width: 0 ){
    height: 400px;  
    width: calc( 100% - 16px) ;
  };
  @media screen and (min-width: 768px ){
    height: 600px;  
    width: calc( 50% - 16px) ;
  };
  @media screen and (min-width: 1024px) {
    height: 600px;  
    width: 440px;
  };
  &#show{
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }
  @media(prefers-reduced-motion){
    transition: none;
  }
`
const Carrossel = styled.div`
  ::-webkit-scrollbar {
    width: 10px;
    background-color: #444444;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d3d3d3;
    border-radius: 10px;
  }
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  justify-content: space-between;
  margin: 1rem 0;
  gap: 80px;
  width: 90vw ;
  img {
    margin: 5px;
    width: 100px;
  }

`
const Buttons = styled.div`
  display: flex;
  button{
    background:#D3D3D3;
    box-shadow: 1px 4px 0;
    border: solid 1px;
    border-radius: 16px;
    cursor: pointer;
    margin: 10px;
    &:hover{
      background: #fff;
      border: solid #fff 1px;
    }
    &:active{
      box-shadow: #444444 0 -1px 0;
    }
  }
`
const Contact = styled.section`
  align-items: center;
  background:linear-gradient(to bottom, #767675, #444444);;
  display: flex;
  flex-direction: column;
  padding: 16px 8px;
  width: 100vw;
`
const Form = styled.form`
  display:flex;
  flex-direction: column;
  flex-grow: 1 ;
  gap: 1rem;
  width: calc(100% - 32px);

  label{
    font-size: 2rem;
  }
  input{
    background: #D3D3D3;
    border: solid #D3D3D3 1px;
    border-radius: 16px;
    cursor: pointer;
    font-size: 1.2rem;
    padding: .5rem;
    height: 35px;
    width: 100%;
    &:hover{
      background: #fff;
      border: solid #fff 1px;
      cursor: auto;
    }
  }
  
  textarea{
    background: #D3D3D3;
    border: solid #D3D3D3 1px;
    border-radius: 16px;
    cursor: pointer;
    font-size: 1.5rem;
    flex-grow: 1 ;
    padding: 8px;
    width: 100%;
    &:hover{
      background: #fff;
      border: solid #fff 1px;
      cursor: auto;
    }
  }
  button{
    background:#D3D3D3;
    box-shadow: 1px 4px 0;
    border: solid 1px;
    border-radius: 16px;
    cursor: pointer;
    font-size: 1.2rem;
    height: 40px;
    margin: 0 auto;
    width: 280px;
    &:hover{
      background: #fff;
      border: solid #fff 1px;
    }
    &:active{
      box-shadow: #444444 0 -1px 0;
    }
  }
`
const Footer = styled.footer`

  align-items: center;
  display: flex;
  background: linear-gradient(to bottom, #444444, #1f1f1f) ;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 50px 0;
  width: 100vw;
`
export { Main, Container, Title, Banner, Text, Header, SocialIcons, LinkSocial, Skills, SecondaryTitle, Card, Carrossel, Buttons, Contact, Form, Footer, Menu, Sobre}