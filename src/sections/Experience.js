import React, { useState } from 'react';
import '../App.css';
import './Experience.css';

const data = {
    recro_avataar: {
        companyName: 'Recro | Avataar',
        points: [
            'recro_avataar 1',
            'recro_avataar 2',
            'recro_avataar 3',
            'recro_avataar 4',
            'recro_avataar 5',
        ]
    },
    dew_solutions: {
        companyName: 'Dew Solutions',
        points: [
            'dew_solutions 1',
            'dew_solutions 2',
            'dew_solutions 3',
            'dew_solutions 4'
        ]
    },
    wipro: {
        companyName: 'Wipro',
        points: [
            'wipro 1',
            'wipro 2',
            'wipro 3',
            'wipro 4',
            'wipro 5',
            'wipro 6'
        ]
    }
}

const Experience = () => {

    const [selectedCompany, setSelectedCompany] = useState(Object.keys(data)[0]);

    return (
        <section className='full-height' id='experience'>
            <h1 className='heading'>Experience</h1>
            <div className='d-flex-expi'>
                <ul>
                    {Object.keys(data).map((company, index) => (<li
                        className={selectedCompany === company ? 'active-company company' : 'company'}
                        onClick={() => setSelectedCompany(company)}
                        key={index}>
                        {data[company]?.companyName}
                    </li>))}
                </ul>
                <ul>
                    {data[selectedCompany]?.points.map((point, index) => (<li className='company-point'>
                        {point}
                    </li>))}
                </ul>
            </div>
            <div>
            </div>
        </section>
    )
}

export default Experience;
