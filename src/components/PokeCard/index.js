import React from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import './styles.css';

const PokeCard = ({ data }) => {

    const [habitat, setHabitat] = useState([]); 
    const [flavorText, setFlavorText] = useState([]); 

    const getDetails = useCallback(async () => {

        const details = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${data.name}/`);
        setHabitat(details.data.habitat.name);
        setFlavorText(details.data.flavor_text_entries[8].flavor_text);

    }, [setHabitat, setFlavorText]);


    useEffect(() => {
        getDetails();
    }, [getDetails]);

    //para virar os cards
    const [flippedCards, setFlippedCards] = useState([]);

    function handleFlip(pokeName) {
        
        const flipped = flippedCards.findIndex(card => card === pokeName);

        if(flipped >= 0) {
            const alreadyFlipped = flippedCards.filter(card => card !== pokeName);
            setFlippedCards(alreadyFlipped);
        } else {
            setFlippedCards([...flippedCards, pokeName]);
        }
    }

    return (
        <div className="scene">

            <div  
                onClick={() => handleFlip(data.name)}
                className={flippedCards.includes(data.name) ? 'is-flipped card-container' : 'card-container'}
            >
                <Card className="pokecard">             

                    <div className="card-face card-front">
                        <Card.Title key={ data.name} className="pokename">{ data.name }</Card.Title>
                        <div className="pokecard-image">
                            <img src={ data.sprites.front_default } alt={ data.name } />
                        </div>
                        <Card.Body className="pokecard-body">
                            <span>Type</span>
                            <p className="card-body-text">{data.types[0].type.name}</p>
                            <span>Habitat</span>
                            <p className="card-body-text">{habitat}</p>
                        </Card.Body>
                    </div>

                    <div className="card-face card-back">
                        <Card.Title key={ data.name} className="pokename">{ data.name }</Card.Title>
                        <div className="pokecard-image">
                            <img src={ data.sprites.back_default } alt={ data.name } />
                        </div>
                        <Card.Body className="pokecard-body">
                            <p className="flavor-text">{flavorText}</p>
                         </Card.Body>
                    </div>

                </Card>
            </div>

        </div>
    )
  };
  
export default PokeCard;




