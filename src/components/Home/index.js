import React from 'react';
import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardDeck, Container } from 'react-bootstrap';
import PokeCard from '../PokeCard';

const App = () => {

    //useState para poder armazenar em um array os dados da lista dos primeiros 50 pokemons
    const [pokeData, setData] = useState([]); 

    //pega os nomes dos primeiros 50 pokemons na primeira API
    const getPokemons = useCallback(async () => {
        
        const pokemonList = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=50').then((response) => response.data.results);

        //para cada pokemon da lista, gera um objeto com as informações captadas pela segunda API 
        const promises = pokemonList.map(async (pokemon) => {
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then((response) => response.data);
        return data;
        });

        //quando conclui, passa as informações para a const pokeData
        const pokeData = await Promise.all(promises);

        setData(pokeData);
        // console.log(pokeData);

    }, [setData]);

    useEffect(() => {
        getPokemons();
    }, [getPokemons]);

 
    return (
    <Container>
        <CardDeck>
            { pokeData.map( pokemon => (
                <PokeCard key={pokemon.id} data={pokemon} />
            )) }
        </CardDeck>
 
    </ Container>
  );
};

export default App;

