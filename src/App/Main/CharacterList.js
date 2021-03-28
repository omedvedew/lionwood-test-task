import React, { useState } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import CharacterListItem from './CharacterListItem';

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
        }));
    }

    const handleCharacterIndex = (index) => {
        newCharacters.selectedCharacterIndex = index;
        console.log(newCharacters.selectedCharacterIndex);
    };

    return (
        <div className="main__characters-container">
            <Route path="/" exact render={() => {
                return (
                    <>
                        <h3 className="main__characters-container__page-number">Page {newCharacters.currentPageNumber}</h3>
                        <div className="main__characters-container__list">
                            {
                                newCharacters.addedCharacters ? 
                                newCharacters.addedCharacters.map(({id, name}, i) => (
                                    <div className="main__characters-container__list_item" key={id} onClick={() => handleCharacterIndex(i)}>
                                        <Link to={`/character`} className="m-c-l_item-name">{name}</Link>
                                    </div>
                                )) : <h2 className="main__characters-container__list_message">Waiting for API response: characters.</h2>
                            }
                        </div>
                        <div className="main__characters-container__pagination">
                            {
                                paginationArr.length > 0 ?
                                paginationArr.map(i => (
                                    <div className="m-c-p_item" key={i} onClick={() => handleApiPageNumber(i)}>{i}</div>
                                )) : <h2 className="main__characters-container__pagination_message">Waiting for API response: pages.</h2>
                            }
                        </div>
                    </>
                )
            }}/>

            <Route path={`/character`}
                render={() => 
                    <CharacterListItem
                        index={newCharacters.selectedCharacterIndex}
                        newCharacters={newCharacters}
                    />
                }
            />
        </div>
    )
};

export default CharacterList;