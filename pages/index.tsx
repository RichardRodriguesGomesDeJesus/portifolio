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
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="linkedin icon" />
                    </LinkSocial>
                    <LinkSocial href="https://github.com/RichardRodriguesGomesDeJesus">
                        <img src="icons/github-white.svg" alt="github icon" />
                    </LinkSocial>
                </SocialIcons>
                <Menu>
                    <Link href={'#contact'}>
                        Contact
                    </Link>
                    <Link href={'#skills'}>
                        Details
                    </Link>
                </Menu>
            </Header>
            <Main>
                <Banner>
                    <Title>Looking for a developer?</Title>
                </Banner>
                <Sobre>
                    <div>
                    <p><strong>Hello,</strong>My name is Richard and I'm a software developer with skills focused on user experience and programming. My goal is to create software solutions that are intuitive, efficient and easy to use.</p>
                    <p>With a user-centric approach, I work to understand the needs and expectations of end users and ensure that these needs are met at all stages of software development.</p>
                    </div>
                    <img src="https://github.com/RichardRodriguesGomesDeJesus.png" alt="My photo" />
                </Sobre>
                <Services>
                    <SecondaryTitle>services</SecondaryTitle>
                    <div>
                        <p>Website Creation</p>
                        <Link href={'#contact'}>Learn more</Link>
                    </div>
                    <div>
                        <p>e-commerce creation</p>
                        <Link href={'#contact'}>Learn more</Link>
                    </div>
                </Services>
                <Skills id="skills">
                    <SecondaryTitle>My differentials</SecondaryTitle>
                    <Card id="hidden">
                        <Text>Accessible interface on different screens.</Text>
                        <img src="icons/screen.svg" alt="screen icon" />
                    </Card>
                    <Card id="hidden">
                        <Text>Approach focused on user experience</Text>
                        <img src="icons/user.svg" alt="user icon" />
                    </Card>
                    <Card id="hidden">
                        <Text>Accessibility best practices</Text>
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
                <Contact id="contact">
                    <SecondaryTitle>Let's get in touch?</SecondaryTitle>
                    <Form action="https://formsubmit.co/richard.gj.rodrigues@gmail.com" method="POST">
                        <label htmlFor="nome">tell me your name.</label>
                        <input type="text"name="nome" placeholder="Digite aqui" required/>
                        <label htmlFor="email">tell me your Email</label>
                        <input type="email" name="email" placeholder="emai@exemplo.com" required/>
                        <label htmlFor="title">Subject</label>
                        <input type="text" placeholder="Digite aqui" name="title" required/>
                        <label htmlFor="message">Message</label>
                        <textarea rows={10} cols={33} placeholder="write your message" name="message" required />
                        <input type="hidden" name="_next" value="https://richard-rodrigues-dev.vercel.app/thanks"></input>
                        <button>Send</button>
                    </Form>
                </Contact>
            </Main>
            <Footer>
                <Menu>
                    <Link href={'#contact'}>
                        Contact
                    </Link>
                    <Link href={'#skills'}>
                        Details
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