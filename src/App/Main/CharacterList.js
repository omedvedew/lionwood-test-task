import React, { useState } from 'react';
import axios from 'axios';
import { keys } from 'lodash';

const CharacterList = () => {

    const [newCharacters, setNewCharacters] = useState({
        areCharactersDownloaded: false,
        arePagesDownloaded: false,
        addedCharacters: [],
    });

    if (newCharacters.arePagesDownloaded !== true) {
        axios.get('https://rickandmortyapi.com/api/character')
        .then(res => res.data)
        .then(data => 
            {
                for (let i = 1; i < data.info.pages; i++) {
                    setNewCharacters((prevState) => ({
                        pages: {
                            ...prevState.pages,
                            [i]: `https://rickandmortyapi.com/api/character?page${i}`,
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

    if (newCharacters.arePagesDownloaded !== false && newCharacters.areCharactersDownloaded !== true) {
        axios.get('https://rickandmortyapi.com/api/character?page=1')
        .then(res => res.data)
        .then(data => 
            console.log(data)    
        )
    };

    console.log(newCharacters);

    return (
        <div className="main__characters__container">
            <div className="main__characters__container_list"></div>
            <div className="main__characters__container_pagination">
                
            </div>
        </div>
    )
};

export default CharacterList;