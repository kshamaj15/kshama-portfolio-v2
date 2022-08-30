import React from 'react';

import '../App.css';
import ButtonWrapper from '../components/ButtonWrapper';

const About = () => {

    return (
        <section className='about full-height' id='about' data-aos='fade-out'>
            <h1 className='heading'>More About Me</h1>
            <div className='d-flex' data-aos='fade-out'>
                <article className='px-1'>
                    <p>I'm a Software Engineer. I was born in 1996 and grew up in Sagar, Madhya Pradesh (India)</p>
                    <p>I have done my schooling from Sagar. I have graduated from <b className='highlight'>SGSITS Indore</b> in 2018</p>
                    <p>Since 2018 I am working as Software Engineer</p>
                    <p>I have good knowledge of Frontend technologies also I love to solve Data structure and algorithms problems</p>
                    <p>Other than my work, I love to read books, also learn about business and entrepreneurship</p>
                </article>
                <div className='my-photo-container' data-aos='zoom-in-up'>
                    <img height='300px' width='300px' src='/myPhoto.JPG' alt='my-img' />
                </div>
            </div>
        </section>
    )
}

export default About;