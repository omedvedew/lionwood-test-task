import React, { useState } from 'react';
import axios from 'axios';
import { keys } from 'lodash';

const CharacterList = () => {

    const [newCharacters, setNewCharacters] = useState({
        pageNumber: 1,
        addedCharacters: [],
    });

    newCharacters.areCharactersDownloaded !== true ? 
    axios.get(`https://rickandmortyapi.com/api/character?page=${newCharacters.pageNumber}`)
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
    console.log(paginationArr);


    const handleApiPageNumber = (e) => {
        setNewCharacters((prevState) => ({
            ...prevState,
            pageNumber: e.target.textcontent,
        }))
    }

    return (
        <div className="main__characters-container">
            <div className="main__characters-container__list">
                {
                    newCharacters.addedCharacters.map(({id, name}) => (
                        <div className="main__characters-container__list_item" key={id}>
                            <h2 className="m-c-l_item-name">{name}</h2>
                        </div>
                    ))
                }
            </div>
            <div className="main__characters-container__pagination">
                {
                    paginationArr.length > 0 ?
                    paginationArr.map(i => (
                        <div className="m-c-p_item" key={i} onClick={handleApiPageNumber}>{i}</div>
                    )) : console.log("waiting for api response")
                }
            </div>
        </div>
    )
};

export default CharacterList;