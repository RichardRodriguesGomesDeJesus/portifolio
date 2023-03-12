import Head from "next/head";
import Link from 'next/link'
import { useEffect, useRef } from "react";
import { Card, Container, Header, Banner, LinkSocial, Main, SecondaryTitle, Skills, SocialIcons, Text, Title, Carrossel, Buttons, Contact, Form, Footer, Menu, Sobre, Services } from "../components/sharedstyles";

export default function Home (){
    const carrossel = useRef(null)
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
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
            </Head>
            <Header>
                <SocialIcons>
                    <LinkSocial href="https://www.linkedin.com/in/richard-rodriegues/" >
                        <img src="/icons/linkedin.svg" />
                    </LinkSocial>
                    <LinkSocial href="https://github.com/RichardRodriguesGomesDeJesus">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                    </LinkSocial>
                </SocialIcons>
                <Menu>
                    <Link href={'#contact'}>
                        Contato
                    </Link>
                    <Link href={'#skills'}>
                        Detalhes
                    </Link>
                </Menu>
            </Header>
            <Main>
                <Banner>
                    <Title>Procurando um desenvolvedor?</Title>
                </Banner>
                <Sobre>
                    <div>
                    <p><strong>Olá,</strong> meu nome é Richard e sou um desenvolvedor de software com habilidades focadas na experiência do usuário e programação. Meu objetivo é criar soluções de software que sejam intuitivas, eficientes e agradáveis ​para os usuários.</p>
                    <p>Com uma abordagem centrada no usuário, trabalho para entender as necessidades e expectativas dos usuários finais e garantir que essas necessidades sejam atendidas em todas as fases do desenvolvimento do software.</p>
                    </div>
                    <img src="https://github.com/RichardRodriguesGomesDeJesus.png" alt="" />
                </Sobre>
                <Services>
                    <SecondaryTitle>Serviços</SecondaryTitle>
                    <div>
                        <p>Criação de Sites</p>
                        <Link href={'#contact'}>Saiba mais</Link>
                    </div>
                    <div>
                        <p>Criação de e-commerces</p>
                        <Link href={'#contact'}>Saiba mais</Link>
                    </div>
                </Services>
                <Skills id="skills">
                    <SecondaryTitle>Meus diferenciais</SecondaryTitle>
                    <Card id="hidden">
                        <Text>Interface acessível em telas variadas.</Text>
                        <img src="icons/screen.svg" alt="" />
                    </Card>
                    <Card id="hidden">
                        <Text>Abordagem focada na experiência do usuário</Text>
                        <img src="icons/user.svg" alt="" />
                    </Card>
                    <Card id="hidden">
                        <Text>Boas práticas em acessibilidade</Text>
                        <img src="icons/acessibilidade.svg" alt="acessibilidade icone" />
                    </Card>
                </Skills>
                <Carrossel ref={carrossel}>
                    {imeges.map((url, index) => 
                        <img src={url} key={index}></img>
                        )}
                </Carrossel>
                <Buttons>
                    <button onClick={handleLeftClick}><img src="/icons/seta-left.svg" alt="" /></button>
                    <button onClick={handleRightClick}><img src="/icons/seta-right.svg" alt="" /></button>
                </Buttons> 
                <Contact id="contact">
                    <SecondaryTitle>Vamos entrar em contato?</SecondaryTitle>
                    <Form action="https://formsubmit.co/richard.gj.rodrigues@gmail.com" method="POST">
                        <label htmlFor="nome">Me diga seu nome</label>
                        <input type="text"name="nome" placeholder="Digite aqui" required/>
                        <label htmlFor="email">Me diga seu Email</label>
                        <input type="email" name="email" placeholder="emai@exemplo.com" required/>
                        <label htmlFor="title">Assunto</label>
                        <input type="text" placeholder="Digite aqui" name="title" required/>
                        <label htmlFor="mensagem">Detalhes</label>
                        <textarea rows={10} cols={33} placeholder="Escreva a sua mensagem" name="mensagem" required />
                        <input type="hidden" name="_next" value="https://richard-rodrigues-dev.vercel.app/thanks"></input>
                        <button>Enviar</button>
                    </Form>
                </Contact>
            </Main>
            <Footer>
                <Menu>
                    <Link href={'#contact'}>
                        Contato
                    </Link>
                    <Link href={'#skills'}>
                        Detalhes
                    </Link>
                </Menu>
                <SocialIcons>
                    <LinkSocial href="https://www.linkedin.com/in/richard-rodriegues/" >
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
                    </LinkSocial>
                    <LinkSocial href="https://github.com/RichardRodriguesGomesDeJesus">
                        <img src="icons/github-white.svg" />
                    </LinkSocial>
                </SocialIcons>
            </Footer>
        </Container>
    )
}