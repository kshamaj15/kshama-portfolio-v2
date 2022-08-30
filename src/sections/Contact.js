import React from 'react';

import '../App.css';
import './Contact.css';
import ButtonWrapper from '../components/ButtonWrapper';

const Contact = () => {

    const sentMail = () => {
        const link = "mailto:me@example.com";
        window.location.href = link;
    }

    return (
        <section className='full-height contact' id='contact' data-aos='zoom-in-down'>
            <div className='pos-abs'>
                <p className='my-details'>If you want to work with me or just want to say hello then ...</p>
                <h1 className='get-in-touch'>Get In Touch</h1>
                <div>
                    <ButtonWrapper text='Say Hello'>
                        <a href='mailto:kshamaj150896@gmail.com'>Say Hello</a>
                    </ButtonWrapper>
                </div>
            </div>
        </section>
    )
}

export default Contact;