import Head from "next/head";
import Link from 'next/link'
import { useEffect, useRef, useState } from "react";
import { Card, Container, Header, Banner, LinkSocial, Main, SecondaryTitle, Skills, SocialIcons, Text, Title, Carrossel, Buttons, Contact, Form, Footer, Menu, Sobre, Services, ContainerLanguage, SelectLanguage } from "../components/sharedstyles";
import { textsEnglish, textsPotuguese } from "../utils/texts";
import FormContact from "../components/formContact";

export default function Home (){
    const [ language , setLeguage] = useState("English")
    const [ texts, setTexts] = useState([])
    
    const carrossel = useRef(null)

    useEffect(()=>{
        if (language === "English") {
            setTexts(textsEnglish)
        }
        if (language === "Português"){
            setTexts(textsPotuguese)
        }
    },[language])
    const handleLeftClick = (e) => {
        e.preventDefault()
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth
    }
    const handleRightClick = (e) => {
        e.preventDefault()
        carrossel.current.scrollLeft += carrossel.current.offsetWidth
    }
    const imeges = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    ]
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.id = 'show'
                } else {
                    entry.target.id = ''
                }
            })
        })
        const hiddenElements = document.querySelectorAll('#hidden')
        hiddenElements.forEach((el)=> observer.observe(el))
    },[])
    return(
        <Container>
            <Head>
                <title>Richard.com</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header>
                <SocialIcons>
                    <LinkSocial href="https://www.linkedin.com/in/richard-rodriegues/" >
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="linkedin icon" />
                    </LinkSocial>
                    <LinkSocial href="https://github.com/RichardRodriguesGomesDeJesus">
                        <img src="icons/github-white.svg" alt="github icon" />
                    </LinkSocial>
                </SocialIcons>
                <ContainerLanguage>
                    <SelectLanguage onChange={(e)=> {
                            setLeguage(e.target.value)
                        }} value={language}>
                        <option value="English">English</option>
                        <option value="Português">Português</option>
                    </SelectLanguage>
                </ContainerLanguage>
                <Menu>
                    <Link href={'#contact'}>
                        {texts[0]}
                    </Link>
                    <Link href={'#skills'}>
                        {texts[1]}
                    </Link>
                </Menu>
            </Header>
            <Main>
                <Banner>
                    <Title>{texts[2]}</Title>
                </Banner>
                <Sobre>
                    <div>
                    <p><strong>{texts[3]}</strong> {texts[4]}</p>
                    <p>{texts[5]}</p>
                    </div>
                    <img src="https://github.com/RichardRodriguesGomesDeJesus.png" alt="My photo" />
                </Sobre>
                <Services>
                    <SecondaryTitle>{texts[6]}</SecondaryTitle>
                    <div>
                        <p>{texts[7]}</p>
                        <Link href={'#contact'}>{texts[11]}</Link>
                    </div>
                    <div>
                        <p>{texts[8]}</p>
                        <Link href={'#contact'}>{texts[11]}</Link>
                    </div>
                    <div>
                        <p>{texts[9]}</p>
                        <Link href={'#contact'}>{texts[11]}</Link>
                    </div>
                    <div>
                        <p>{texts[10]}</p>
                        <Link href={'#contact'}>{texts[11]}</Link>
                    </div>
                </Services>
                <Skills id="skills">
                    <SecondaryTitle>{texts[12]}</SecondaryTitle>
                    <Card id="hidden">
                        <Text>{texts[13]}</Text>
                        <img src="icons/screen.svg" alt="screen icon" />
                    </Card>
                    <Card id="hidden">
                        <Text>{texts[14]}</Text>
                        <img src="icons/user.svg" alt="user icon" />
                    </Card>
                    <Card id="hidden">
                        <Text>{texts[15]}</Text>
                        <img src="icons/acessibilidade.svg" alt="accessibility icon" />
                    </Card>
                </Skills>
                <Carrossel ref={carrossel}>
                    {imeges.map((url, index) => 
                        <img src={url} key={index}></img>
                        )}
                </Carrossel>
                <Buttons>
                    <button onClick={handleLeftClick}><img src="/icons/seta-left.svg" alt="left arrow icon" /></button>
                    <button onClick={handleRightClick}><img src="/icons/seta-right.svg" alt="right arrow icon" /></button>
                </Buttons> 
                <FormContact texts={texts}/>
            </Main>
            <Footer>
                <Menu>
                    <Link href={'#contact'}>
                        {texts[0]}
                    </Link>
                    <Link href={'#skills'}>
                        {texts[1]}
                    </Link>
                </Menu>
                <SocialIcons>
                    <LinkSocial href="https://www.linkedin.com/in/richard-rodriegues/" >
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="linkedin icon" />
                    </LinkSocial>
                    <LinkSocial href="https://github.com/RichardRodriguesGomesDeJesus">
                        <img src="icons/github-white.svg" alt="github icon" />
                    </LinkSocial>
                </SocialIcons>
            </Footer>
        </Container>
    )
}