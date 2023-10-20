import styled from 'styled-components'

export const colors = {
  primary: "#ff66c4" ,
  segundary: "#cb6ce6",
  terceary:"#8b3dff",
  background: "#030303",
  fontColor:"#F0F0F0"
}

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
    padding: 0 ;
  };
  @media screen and (min-width: 768px ){
    padding: 16px 0;
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

const ContainerLanguage = styled.div`
  display: flex;
  margin: 1rem 0 0 0;
  gap: 1rem ;
  justify-content: center;
  width: 100%;
`

const SelectLanguage = styled.select`
  color: #D3D3D3;
  font-size: 1rem;
  background: transparent;
  option {
    background: #767676;
  }

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
    a{
      text-align: center;
      border-bottom: solid 2px #000;
      width: 100%;
    }
    

  };
  @media screen and (min-width: 768px ){
    flex-flow: row nowrap;
    a{
      border-bottom: none;
    }
  };
  a{
    color: #D3D3D3;
    font-size: 1.2rem;
    padding: 6px;
    &:hover{
      text-decoration: underline;
      
      color:#fff ;
      padding: 5px;
    }
  }
`

const Main = styled.main`
  align-items: center;
  background: linear-gradient(to bottom,${colors.background}, ${colors.background},${colors.terceary} ,${colors.terceary}, ${colors.background}) ;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

`

const Title = styled.h1`
  background: linear-gradient(to right, ${colors.terceary},  ${colors.segundary},  ${colors.primary});
  letter-spacing: 0.1em;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  background: transparent;
  width: 100vw  ;
  @media screen and (min-width: 0 ){
    height: calc( 50vh - 4rem);
  };
  @media screen and (min-width: 768px) {
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
      margin: 1rem 0 ;
      strong{
        font-size:2rem;
        text-decoration: underline;
      }
    }
  }
  
  @media screen and (min-width: 0 ){
    flex-direction: column-reverse;
    img{
      border: 5px solid transparent;
      background: linear-gradient(${colors.background}, ${colors.terceary}) padding-box;
      border-radius: 100% ;
      padding: 1rem;
      display: flex;
      max-height: 100%;
      margin: 0 auto;
      max-width: 100%;
    }
    
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    img{
      border: 5px solid transparent;
      background: linear-gradient(${colors.background}, ${colors.terceary}) padding-box;
      border-radius: 100% ;
      padding: 1rem;
      display: flex;
      max-height: 50%;
      margin: 0 auto;
      max-width: 50%;
    }
  }
`

const Services = styled.div`
  border-bottom: solid 5px #000;
  border-top: solid 5px #000;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 16px 0;
  width: 100vw;
  div{
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    margin: 32px 16px ;
    text-align: center;
    width: 11.25rem;
    p{
      font-size:1.5rem;
    }
    a{
      border: solid ${colors.fontColor} 2px;
      border-radius: 16px;
      color: ${colors.fontColor};
      box-shadow: inset 0 0 32px 0 ${colors.fontColor}, 0 0 32px 0 ${colors.fontColor};
      text-shadow: 0 0 8px hsl(0 0% 100% / 0.3), 0 0 32px currentColor;
      font-size:1.5rem;
      margin: 1rem 0 0 0;
      padding: 1rem;
      &:hover {
        opacity:1;
        border: solid ${colors.fontColor} 2px;
        text-shadow: none;
        color: ${colors.background};
        box-shadow: inset 0 0 32px 0 ${colors.fontColor}, 0 0 40px 0 ${colors.fontColor};
        text-shadow: 0 0 8px hsl(0 0% 100% / 0.3), 0 0 32px currentColor;
        background: ${colors.fontColor} ;
      }
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

const Card = styled.div` 
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
    width: 80px;
  }
  @media screen and (min-width: 0 ){
    height: 300px;  
    width: calc( 100% - 16px) ;
  };
  @media screen and (min-width: 768px ){
    height: 400px;  
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
  gap: 1rem;
  button{
    background: transparent;
    border: solid ${colors.fontColor} 2px;
    border-radius: 16px;
    color: ${colors.fontColor};
    box-shadow: inset 0 0 32px 0 ${colors.fontColor}, 0 0 32px 0 ${colors.fontColor};
    text-shadow: 0 0 8px hsl(0 0% 100% / 0.3), 0 0 32px currentColor;
    font-size:1.5rem;
    margin: 1rem 0 0 0;
    padding: 1rem;
    &:hover {
      opacity:1;
      border: solid ${colors.fontColor} 2px;
      color: transparent;
      box-shadow: inset 0 0 32px 0 ${colors.fontColor}, 0 0 40px 0 ${colors.fontColor};
      text-shadow: 0 0 8px hsl(0 0% 100% / 0.3), 0 0 32px currentColor;
      background: ${colors.fontColor} ;
    }
  }
`

const Contact = styled.section`
  align-items: center;
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
  background: #000;
  border-top: solid;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 50px 0;
  width: 100vw;
`

const Menssage = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  div{
    align-items: center;
    background: #f0f0f0 ;
    border-radius: 16px;
    color: #444444;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    @media screen and (min-width: 0 ){
      height: 200px;
      width: 280px;
      h2{
        font-size: 1.2rem;
      }
      a{
        font-size: 1rem;
      }
    };
    @media screen and (min-width: 768px) {
      height: 300px;
      width: 400px;
      h2{
        font-size: 1.5rem;
      }
      a{
        font-size: 1.2rem;
      }
    };
    @media screen and (min-width: 1024px ){
      height: 400px;
      width: 600px;
      h2{
        font-size: 2rem;
      }
      a{
        font-size: 1.5rem;
      }
    };
  }
 

`

export { Main, Container, Title, Banner, Text, Header, SocialIcons, LinkSocial, Skills, SecondaryTitle, Card, Carrossel, Buttons, Contact, Form, Footer, Menu, Sobre, Services, Menssage, ContainerLanguage, SelectLanguage}