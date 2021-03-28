import React from 'react';

const CharacterListItem = ({
    index,
    newCharacters,
}) => {
    return (
        <>
            <div className="m-c-l_item_image" style={{backgroundImage: `url('${newCharacters.addedCharacters[index].image}')`}}>
            </div>
            <div className="m-c-l_item_description">
                <h2 className="m-c-l_item_description_item description_name">{newCharacters.addedCharacters[index].name}</h2>
                <div className="m-c-l_item_description_item description_status">{newCharacters.addedCharacters[index].status}</div>
                <div className="m-c-l_item_description_item description_species">{newCharacters.addedCharacters[index].species}</div>
                <ul className="m-c-l_item_description_item description_episodes">Episodes:
                    {

                    }
                </ul>
            </div>
        </>
    )
};

export default CharacterListItem;