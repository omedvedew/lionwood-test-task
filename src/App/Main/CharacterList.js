import React, { useState } from 'react';
import axios from 'axios';
import { keys } from 'lodash';

const CharacterList = () => {

    const [newCharacters, setNewCharacters] = useState({
        currentPageNumber: 1,
        addedCharacters: [],
    });

    newCharacters.areCharactersDownloaded !== true ? 
    axios.get(`https://rickandmortyapi.com/api/character?page=${newCharacters.currentPageNumber}`)
        .then(res => res.data)
        .then(data =>
            setNewCharacters((prevState) => ({
                ...prevState,
                addedCharacters: [...data.results],
                areCharactersDownloaded: true,
                pagesCount: data.info.pages,
            }))    
        ) :
    console.log(newCharacters);

    let paginationArr = [];
    for (let i = 1; i <= newCharacters.pagesCount; i++) {
        paginationArr.push(i);
    }

    const handleApiPageNumber = (number) => {
        setNewCharacters(() => ({
            currentPageNumber: number,
        }))
    }

    return (
        <div className="main__characters-container">
            <div className="main__characters-container__list">
                {
                    newCharacters.addedCharacters ? 
                    newCharacters.addedCharacters.map(({id, name}) => (
                        <div className="main__characters-container__list_item" key={id}>
                            <h2 className="m-c-l_item-name">{name}</h2>
                        </div>
                    )) : <h2 className="main__characters-container__list_message"></h2>
                }
            </div>
            <div className="main__characters-container__pagination">
                {
                    paginationArr.length > 0 ?
                    paginationArr.map(i => (
                        <div className="m-c-p_item" key={i} onClick={() => handleApiPageNumber(i)}>{i}</div>
                    )) : <h2 className="main__characters-container__pagination_message"></h2>
                }
            </div>
        </div>
    )
};

export default CharacterList;