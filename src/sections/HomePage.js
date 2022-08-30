import React from 'react';

import '../App.css';
import ButtonWrapper from '../components/ButtonWrapper';

const HomePage = () => {

    const downLoadResume = () => {
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                console.log(fileURL)
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Kshama_Jain_Resume.pdf';
                alink.click();
            })
        })
    }

    return (
        <section className='home-page' data-aos='zoom-in'>
            <p className='my-details'> Hi, I am</p>
            <h1 className='my-name'>Kshama Jain</h1>
            <p className='my-details'>I'm a Software Engineer with more than 4 years of experience in designing and developing large scale web applications with React, JavaScript, TypeScipt, Node JS. </p>
            <ButtonWrapper>
                <a href='https://docs.google.com/document/d/1emxgD3jtgzpgAcfpqDEy34EA66oHUIumEfgu7oVezXs/edit?usp=sharing' target='_blank'>My Resume</a>
                {/* <a onClick={downLoadResume}>My Resume</a> */}
            </ButtonWrapper>
        </section>
    )
}

export default HomePage;