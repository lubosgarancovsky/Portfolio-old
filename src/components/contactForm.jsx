import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import { handleHover, handleLeave } from '../hooks/hover';

 export function ContactForm() {
    const form = useRef();

    const showModal = () => {
        document.querySelector(".contact-modal").style.display="block";
        setTimeout(()=>{
            document.querySelector(".contact-modal").style.display="none";
        }, 2500)
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_gwrvrnl', 'template_elt5gnn', form.current, 'B0v684JHwtQg1TbeE')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        
        e.target.reset();
        showModal()
    }

    return ( 
        <form ref={form} onSubmit={sendEmail}>
            <input onMouseEnter={handleHover}  onMouseLeave={handleLeave} placeholder="Name" type='text' name='name' required />
            <input onMouseEnter={handleHover}  onMouseLeave={handleLeave}  placeholder="Email" type='email' name='email' required />
            <textarea onMouseEnter={handleHover}  onMouseLeave={handleLeave}  placeholder="Message..." name='message' required rows='8' />
            <button onMouseEnter={handleHover}  onMouseLeave={handleLeave}  className='primaryBtn' type='submit'>Send message</button>
        </form>
     );
}
