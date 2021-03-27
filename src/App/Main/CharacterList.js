import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import { keys } from 'lodash';

const CharacterList = () => {

    const [newCharacters, setNewCharacters] = useState({});

    if (newCharacters.arePagesDownloaded !== true) {
        axios.get('https://rickandmortyapi.com/api/character')
        .then(res => res.data)
        .then(data =>
            {
                for (let i = 1; i <= data.info.pages; i++) {
                    setNewCharacters((prevState) => ({
                        pages: {
                            ...prevState.pages,
                            [i]: {
                                url: `https://rickandmortyapi.com/api/character?page=${i}`,
                                id: i,
                            },
                        },
                        arePagesDownloaded: true,
                    }))
                }
            }
            // setNewCharacters(() => ({
            //     addedCharacters: [...data.results],
            //     areCharactersDownloaded: true,
            // }))    
        )
    };

    console.log(newCharacters);

    return (
        <div className="main__characters-container">
            <div className="main__characters-container__list">
                
            </div>
            <div className="main__characters-container__pagination">
                {
                    keys(newCharacters.pages).map((key) => (
                        <div key={key}>{key}</div>
                    ))
                }
            </div>
        </div>
    )
};

export default CharacterList;