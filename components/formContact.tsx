import { useState } from "react"
import { Contact, Form, SecondaryTitle } from "./sharedstyles"
import emailjs from '@emailjs/browser'
import { useRouter } from "next/router"

export default function FormContact ({texts}){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [ message, setMenssage] = useState("")
  const router = useRouter()
  return(
    <Contact id="contact">
      <SecondaryTitle>{texts[16]}</SecondaryTitle>
      <Form onSubmit={(e)=>{
        e.preventDefault()
        if (name !== "" && email !== "" && subject !== "" && message !== "") {
          const templatePrams = {from_name: name,email,subject,message}
          emailjs.send("service_xrpd95m","template_jne16hf",templatePrams,"UT7iTWo88lxcFBcpL")
          .then(()=>{router.push("/thanks")})
          .catch((err)=>{
            console.log(err)
          })
        }
      }}>
          <label htmlFor="name">{texts[17]}</label>
          <input type="text"name="name" id="name" placeholder={texts[18]} onChange={(e)=>{
            setName(e.target.value)
          }} value={name} required/>
          <label htmlFor="email">{texts[19]}</label>
          <input type="email" name="email" id="email" placeholder={texts[20]} onChange={(e)=>{
            setEmail(e.target.value)
          }} value={email} required/>
          <label htmlFor="subject">{texts[21]}</label>
          <input type="text" placeholder={texts[18]} name="subject" id="subject" onChange={(e)=>{
            setSubject(e.target.value)
          }} value={subject} required/>
          <label htmlFor="message">{texts[22]}</label>
          <textarea rows={10} cols={33} placeholder={texts[23]} name="message" id="message" onChange={(e)=>{
            setMenssage(e.target.value)
          }} value={message} required />
          <button>{texts[24]}</button>
      </Form>
    </Contact>
  )
}