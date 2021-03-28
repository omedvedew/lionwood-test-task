import React, { useState } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import CharacterListItem from './CharacterListItem';

const CharacterList = () => {
 
    const [newCharacters, setNewCharacters] = useState({
        currentPageNumber: 1,
        addedCharacters: [],
        statusFilter: '',
        genderFilter: '',
    });

    newCharacters.areCharactersDownloaded !== true ? 
    axios.get(`https://rickandmortyapi.com/api/character?page=${newCharacters.currentPageNumber}&status=${newCharacters.statusFilter}&gender=${newCharacters.genderFilter}`)
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
    };

    const handleApiPageNumber = (number) => {
        setNewCharacters((prevState) => ({
            currentPageNumber: number,
            statusFilter: prevState.statusFilter,
            genderFilter: prevState.genderFilter,
        }));
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleCharacterIndex = (index) => {
        newCharacters.selectedCharacterIndex = index;
        console.log(newCharacters.selectedCharacterIndex);
    };

    const handleStatusFilter = (e) => {
        setNewCharacters((prevState) => ({
            statusFilter: e.target.value,
            currentPageNumber: 1 || prevState.currentPageNumber,
            genderFilter: prevState.genderFilter,
        }));
    };

    const handleGenderFilter = (e) => {
        setNewCharacters((prevState) => ({
            genderFilter: e.target.value,
            currentPageNumber: 1 || prevState.currentPageNumber,
            statusFilter: prevState.statusFilter,
        }))
    };

    return (
        <div className="main__characters-container">
            <Route path="/" exact render={() => {
                return (
                    <>
                        <div className="main__filters-container">
                            <div className="main__filters-container__filter status-filter">
                                <h2 className="main__filters-container__filter_title">Filter by status:</h2>
                                <select className="main__filters-container__filter_input status-filter-input" defaultValue={newCharacters.statusFilter} onChange={handleStatusFilter}>
                                    <option value="">All</option>
                                    <option value="alive">Alive</option>
                                    <option value="dead">Dead</option>
                                </select>
                            </div>
                            <div className="main__filters-container__filter gender-filter">
                                <h2 className="main__filters-container__filter_title">Filter by gender:</h2>
                                <select className="main__filters-container__filter_input gender-filter-input" defaultValue={newCharacters.genderFilter} onChange={handleGenderFilter}>
                                    <option value="">All</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="genderless">Genderless</option>
                                    <option value="unknown">Unknown</option>
                                </select>
                            </div>
                        </div>
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