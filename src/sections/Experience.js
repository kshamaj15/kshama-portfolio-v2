import React, { useState } from 'react';
import '../App.css';
import './Experience.css';

const data = {
    recro_avataar: {
        companyName: 'Recro | Avataar',
        points: [
            'Developed screens for user management system for different roles and permissions, which consistes of addeding/updating new team, role wise dashboard view',
            'Build screens for SignIn, Signup, User Invite system',
            'Design and Developed common component for the new UI screens from Scratch',
            'Tech Stack - React, Node JS, JavaScript, Zustand, HTML5, CSS, SCSS'
        ]
    },
    dew_solutions: {
        companyName: 'Dew Solutions',
        points: [
            'Developed new components and modules as per client requirement',
            'Implemented API caching for improve the application performance',
            'Maintained reusable and scalable code for Hybrid Frontend application build on Angular\'s multiple version',
            'Tech Stack - Angular, React, JavaScript, HTML5, CSS, SCSS'
        ]
    },
    wipro: {
        companyName: 'Wipro',
        points: [
            'Consulted with clients to gather requirements and discuss design choices.',
            'Designed and developed components to meet usability and requirement',
            'Tech Stack - React, Redux, JavaScript, HTML5, CSS, SCSS, Bootstrap'
        ]
    }
}

const Experience = () => {

    const [selectedCompany, setSelectedCompany] = useState(Object.keys(data)[0]);

    return (
        <div id='experience'>
            <div className='divider'></div>
            <section className='full-height pos-relative' data-aos='zoom-in'>
                <h1 className='heading'>Experience</h1>
                <div className='d-flex-expi'>
                    <ul className='company-list'>
                        {Object.keys(data).map((company, index) => (<li
                            className={selectedCompany === company ? 'active-company company' : 'company'}
                            onClick={() => setSelectedCompany(company)}
                            key={`${index}_${company}`}>
                            {data[company]?.companyName}
                        </li>))}
                    </ul>
                    <ul className='points-list'>
                        {data[selectedCompany]?.points.map((point, index) => (<li className='company-point' key={index}>
                            {point}
                        </li>))}
                    </ul>
                </div>
                <div>
                </div>
            </section>
        </div>
    )
}

export default Experience;
