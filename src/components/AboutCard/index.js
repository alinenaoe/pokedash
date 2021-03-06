import React from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import './styles.css';
import logo from './poke_logo.png';
import github from './github-image.svg';
import linkedin from './linkedin.svg';


const AboutCard = () => {

    const [flippedAbout, setFlippedAbout] = useState(false);

    return (
        <div className="scene">
            <div 
                className={flippedAbout === true ? 'card-container about-container is-flipped' : "card-container about-container"}
                onClick={flippedAbout === true ? (() => setFlippedAbout(false)) : (() => setFlippedAbout(true))}
            >
                <Card className="pokecard about-card"> 
                    <div className="card-face card-front">
                        <Card.Title className="pokename">About</Card.Title>
                        <div className="pokecard-image about-image">
                            <img src={logo} alt="logo pokemon"/>
                        </div>
                        <Card.Body className="pokecard-body about-body">
                            <span>MADE BY</span>
                            <p className="card-body-text">Aline Naoe</p>
                            <span>Using</span>
                            <p className="card-body-text">React and PokéAPI</p>
                        </Card.Body>
                    </div>

                    <div className="card-face card-back">
                        <Card.Title className="pokename">About</Card.Title>
                        <div className="pokecard-image about-image">
                            <img src={logo} alt="logo pokemon"/>
                        </div>
                        <Card.Body className="pokecard-body about-body">
                            <a href="https://github.com/alinenaoe" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="logo github"/> 
                                /alinenaoe
                            </a>
                            <a href="https://www.linkedin.com/in/alinenaoe/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="logo linkedin" /> 
                                /in/alinenaoe
                            </a>                     
                        </Card.Body>
                    </div>
                </Card>
            </div>
        </div>
    )
  };
  
export default AboutCard;



