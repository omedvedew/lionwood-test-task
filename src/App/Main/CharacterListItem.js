import React, { useState } from 'react';
import axios from 'axios';

const CharacterListItem = ({
    index,
    newCharacters,
}) => {

    const [episodes, setEpisodes] = useState({
        titles: [],
    });
    
    const getEpisodes = () => {
        for (let i = 0; i < newCharacters.addedCharacters[index].episode.length; i++) {
            axios.get(newCharacters.addedCharacters[index].episode[i])
            .then(res => res.data)
            .then(data =>
                setEpisodes((prevState) => ({
                    ...prevState,
                    titles: [...prevState.titles, data.name],
                    isDataDownloaded: true,
                }))
             );
         };
    };

    episodes.isDataDownloaded ? console.log(episodes) : getEpisodes();

    return (
        <div className="main__characters-container__list_character">
            <img className="m-c-l_character_image" src={newCharacters.addedCharacters[index].image} alt={`${newCharacters.addedCharacters[index].name}`}/>
            <div className="m-c-l_character_description">
                <h2 className="m-c-l_character_description_item description_name">{newCharacters.addedCharacters[index].name}</h2>
                <div className="m-c-l_character_description_ item status-and-species">
                    <div className="m-c-l_character_description_item description_status">{newCharacters.addedCharacters[index].status}</div>
                    <div className="m-c-l_character_description_item description_species">{newCharacters.addedCharacters[index].species}</div>
                </div>
                <ul className="m-c-l_character_description_item description_episodes">
                    <h3>Episodes:</h3>
                    <div>
                        {
                            episodes.titles.map((key, i) => (
                                <li key={i}>{key}</li>
                            ))
                        }
                    </div>
                </ul>
            </div>
        </div>
    )
};

export default CharacterListItem;