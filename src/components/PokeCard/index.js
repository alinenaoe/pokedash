import React from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import './styles.css';

const PokeCard = ({ data }) => {

    const [habitat, setHabitat] = useState([]); 

    const getHabitat = useCallback(async () => {

        const pokemonHabitat = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${data.name}/`);
        setHabitat(pokemonHabitat.data.habitat.name);

    }, [setHabitat]);

    useEffect(() => {
        getHabitat();
    }, [getHabitat]);

    return (
        <>
        <Card className="pokecard front">
            <Card.Title key={ data.name} className="pokename">{ data.name }</Card.Title>
            <div className="pokecard-image">
                <img src={ data.sprites.front_default } alt={ data.name } />
            </div>
            <Card.Body className="pokecard-body">
                <span>Type</span>
                <p>{data.types[0].type.name}</p>
                <span>Habitat</span>
                <p>{habitat}</p>
            </Card.Body>
        </Card>
        </>
    )
  };
  
export default PokeCard;




