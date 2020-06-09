import React from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import './styles.css';
import logo from './poke_logo.png';
import github from './github.png';
import linkedin from './linkedin.png';


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
                            <img src={logo} />
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
                            <img src={logo} />
                        </div>
                        <Card.Body className="pokecard-body about-body">
                            <a href="https://github.com/alinenaoe" target="_blank" rel="noopener">
                                <img src={github}/> 
                            </a>
                            <a href="https://www.linkedin.com/in/alinenaoe/" target="_blank" rel="noopener">
                                <img src={linkedin}/> 
                            </a>                     
                        </Card.Body>
                    </div>
                </Card>
            </div>
        </div>
    )
  };
  
export default AboutCard;



