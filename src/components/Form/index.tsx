import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './styles.module.scss';

export default function Form(){
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [assunt, setAssunt] = useState('')
const [message, setMessage] = useState('')

function sendEmail(e){
  e.preventDefault();

  alert('enviado')
  

  if(name === '' || email === '' || message === ''){
  alert('Preencha todos os campos');
  return;
  }

 const templateParams = {
  from_name: name,
  message: message,
  email: email
 }

 emailjs.send("service_81gq1dm", "template_97s7k38", templateParams, "R9yCte2h4nRuXThcn")
 .then((response) => {
  console.log('enviado', response.status, response.text)
  setName('')
  setEmail('')
  setMessage('')
  setAssunt ('')
 }, (err)=>{
  console.log('ERRO:', err)
 })

}
  
  return (
    <div className={styles.form} onSubmit={sendEmail}>
      <h1 style={{color:'#E87535', marginBottom: 30, fontSize:38}}> CONTATO</h1>
        <form>
            <label>Seu Nome</label>
            <br></br>
            <input
            type='text'
            placeholder='Digite seu nome...'
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
            <br></br>

            <label>Email</label>
            <br></br>
            <input
            type='email' 
            placeholder='Digite seu email...'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
            <br></br>
            <label>Assunto</label>
            <br></br>
            <input
            type='text'
            placeholder='Assunto...'
            onChange={(e) => setAssunt(e.target.value)}
            value={assunt} 
            />
            <br></br>
            <label>Menssagem</label>
            <br></br>
            <textarea
             rows={6}
             placeholder= 'Digite sua menssagem aqui..'             
             onChange={(e) => setMessage(e.target.value)}
             value={message}
             />
               <br></br>
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}