import React from 'react';

import '../App.css';
import ButtonWrapper from '../components/ButtonWrapper';

const HomePage = () => {

    return (
        <section className='home-page' data-aos='zoom-in'>
            <p className='my-details'> Hi, I am</p>
            <h1 className='my-name'>Kshama Jain</h1>
            <p className='my-details'>I'm a Software Engineer with more than 4 years of experience in designing and developing large scale web applications with React, JavaScript, TypeScipt, Node JS. </p>
            <ButtonWrapper>
                <a rel="noreferrer" href='https://docs.google.com/document/d/1emxgD3jtgzpgAcfpqDEy34EA66oHUIumEfgu7oVezXs/edit?usp=sharing' target='_blank'>My Resume</a>
            </ButtonWrapper>
        </section>
    )
}

export default HomePage;