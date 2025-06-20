import Head from "next/head";
import Link from 'next/link';

import { Container, Header, Banner, LinkSocial, Main, SecondaryTitle, SocialIcons, Text, Title, Carrossel, Buttons, Footer, Menu, Sobre, Projects, ContainerLanguage, SelectLanguage, Project } from "../../components/sharedstyles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { textsEnglish ,textsPotuguese } from "../../utils/texts";

export default function ProjectDescription() {
  const router = useRouter()
  const { asPath } = router
  const parts = asPath.split('/')
  const projectName = parts[parts.length - 1]

  const [ language , setLanguage] = useState("")
  const [ texts, setTexts] = useState([])
  const [projectID, setProjectId] = useState<number>(0)

  const [ linkProject, setLinkProject] = useState<string>("")
  
  const projects = [{name: "Lotudy", description: "Lotudy é uma plataforma de estudos com vários recursos interessantes.", english: "Lotudy is a study platform with several interesting features." , technologies: ["Typescript","Next.js","React","Styled Components","Mongo DB"]},{name: "Adopet",description: "Adopet é uma plataforma de adoção de animais.",english: "Adopet is an animal adoption platform.",technologies: ["React","Typescript","Sass","CSS"]}]

  useEffect(()=>{
    const localLang = localStorage.getItem("language")
    if(localLang === null){
        const userLang = navigator.language;
        if (userLang == "pt-BR") {
            setLanguage("Português")
            localStorage.setItem("language","Português")
            setTexts(textsPotuguese)
        } else{
            setLanguage("English")
            localStorage.setItem("language","English")
            setTexts(textsEnglish)
        }
    } else {
        const lang = localStorage.getItem("language")
        if (lang === "Português" ) {
            setLanguage("Português")
            setTexts(textsPotuguese)
        } else{
            setLanguage("English")
            setTexts(textsEnglish)
        }
    }
  },[language === ""])
    useEffect(()=>{
        if (language === "English") {
            setTexts(textsEnglish)
            localStorage.removeItem("language")
            localStorage.setItem("language","English")
        }
        if (language === "Português"){
            setTexts(textsPotuguese)
            localStorage.removeItem("language")
            localStorage.setItem("language","Português")
        }
    },[language])
	
	useEffect(()=>{
		if (projectName !== undefined && projectName !== "Lotudy" && projectName !== "Adopet") {
			router.push("/")
		}

        setProjectId(projects.findIndex((e)=> e.name === projectName))

        if (projectName === "Lotudy" && linkProject === "") {
            setLinkProject("https://lotudy.com.br/")
        }

        if (projectName === "Adopet" && linkProject === "") {
            setLinkProject("https://adopet-livid.vercel.app/")
        }
	})

  return(
    <Container>
            <Head>
                <title>Richard Desenvolvimento de Software  e Soluções.</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap" rel="stylesheet"/>
            </Head>
            <Header>
                <SocialIcons>
                    <LinkSocial href="https://www.linkedin.com/in/richard-rodriegues/" >
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="linkedin icon" />
                    </LinkSocial>
                    <LinkSocial href="https://github.com/RichardRodriguesGomesDeJesus">
                        <img src="/icons/github-white.svg" alt="github icon" />
                    </LinkSocial>
                </SocialIcons>
                <ContainerLanguage>
                    <SelectLanguage onChange={(e)=> {
                            setLanguage(e.target.value)
                        }} value={language}>
                        <option value="English">English</option>
                        <option value="Português">Português</option>
                    </SelectLanguage>
                </ContainerLanguage>
                <Menu>
                    <Link href={'/'}>
                        Home
                    </Link>
                    <Link href={'/resume_richard.pdf'}>
                        {texts[21]}
                    </Link>
                </Menu>
            </Header>
            <Main>
                <Banner>
                    <Title>{texts[23]}</Title>
                </Banner>
                <Project>
                    <SecondaryTitle>{projectName}</SecondaryTitle>
                    <a href={linkProject} >
                        <img src={`/img/${projectName}.png`}  />
                    </a>
                    <div>
                        <p>{(language === "Português" ? projects[projectID]?.description : projects[projectID]?.english)}</p>
                        <div>
                            <h3>{texts[22]}</h3>
                            <ul>
                            {projects[projectID]?.technologies.map((e, index)=>(
                                    <li key={index}>{e}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Project>
            </Main>
            <Footer>
                <Menu>
                    <Link href={'/'}>
                        Home
                    </Link>
                    <Link href={'/resume_richard.pdf'}>
                        {texts[21]}
                    </Link>
                </Menu>
                <SocialIcons>
                    <LinkSocial href="https://www.linkedin.com/in/richard-rodriegues/" >
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="linkedin icon" />
                    </LinkSocial>
                    <LinkSocial href="https://github.com/RichardRodriguesGomesDeJesus">
                        <img src="/icons/github-white.svg" alt="github icon" />
                    </LinkSocial>
                </SocialIcons>
            </Footer>
        </Container>
  )
}