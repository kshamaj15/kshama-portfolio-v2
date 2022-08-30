import React, { useState } from 'react';


import react from '../assets/skillsLogo/react.jpg';
import redux from '../assets/skillsLogo/redux.png';
import angular from '../assets/skillsLogo/angular.png';
import js from '../assets/skillsLogo/js.png';
import html from '../assets/skillsLogo/html.png';
import css from '../assets/skillsLogo/css.png';
import bootstrap from '../assets/skillsLogo/bootstrap.png';
import ts from '../assets/skillsLogo/typescript.png';
import scss from '../assets/skillsLogo/scss.png';
import jquery from '../assets/skillsLogo/jquery.png';
import node from '../assets/skillsLogo/node.jpeg';
import express from '../assets/skillsLogo/express.png';

import '../App.css';
import './Skills.css';

const skillData = [
    { name: 'React', expertise: '8', image: react, color: '#007b8b' },
    // { name: 'Redux', expertise: '6', image: redux, color: '#764abc'},
    { name: 'Angular', expertise: '6', image: angular, color: '#a6120d' },
    { name: 'JavaScript', expertise: '9', image: js, color: '#f0db4f' },
    { name: 'TypeScript', expertise: '8', image: ts, color: '#007acc' },
    { name: 'HTML', expertise: '7', image: html, color: '#e34c26' },
    { name: 'CSS', expertise: '8', image: css, color: '#2965f1' },
    { name: 'Bootstrap', expertise: '7', image: bootstrap, color: '#563d7c' },
    { name: 'SCSS', expertise: '8', image: scss, color: '#cd6799' },
    { name: 'jQuery', expertise: '6', image: jquery, color: '#0868AC' },
    // { name: 'Node JS', expertise: '5', image: node, color: '#3C873A'},
    // { name: 'Express', expertise: '5', image: express, color: '#000'}
]

const Projects = () => {

    return (
        <section className='full-height tab-skills' id='projects'>
            <h1 className='heading'>Projects</h1>
            <div className='tab-skills-list'>
                {skillData.map((skill, i) => {
                    return (
                        <div className="tab-skills-list-item" key={i}>
                            <div>
                                <img src={skill.image} height="20px" className="pr-3" />
                                {skill.name}</div>
                            <div className="tab-skills-list-item-outer">
                                <div className="tab-skills-list-item-inner" style={{ background: skill.color, width: `${skill.expertise * 10}%` }}>
                                    <span>{skill.expertise} out of 10</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects;
