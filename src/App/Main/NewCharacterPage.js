import React, { useState } from 'react';
import { connect } from 'react-redux';

const NewCharacterPage = ({
    newCharacterState,
    resetCharState,
    addCharacterItem,
}) => {
    console.log(newCharacterState);

    const preventRefresh = (e) => {
        resetCharState(`character${Object.keys(newCharacterState).length+1}`);
        e.preventDefault();
    };

    const [characterObject, setCharacterObject] = useState({});

    const handleCharacterName = (e) => {
        setCharacterObject((prevState) => ({
            ...prevState,
            characterName: e.target.value,
        }));
    };
    
    const handleCharacterEmail = (e) => {
        setCharacterObject((prevState) => ({
            ...prevState,
            characterEmail: e.target.value,
        }));
    };

    const handleCharacterGender = (e) => {
        setCharacterObject((prevState) => ({
            ...prevState,
            characterGender: e.target.value,
        }));
    };

    const handleCharacterImage = (e) => {
        setCharacterObject((prevState) => ({
            ...prevState,
            characterImage: e.target.value,
        }));
    };

    console.log(characterObject);

    return (
        <>
            <form className="main__new-character-form" onSubmit={preventRefresh}>
                <h2 className="main__new-character-form_title">Create new character here</h2>
                <div className="main__new-character-form__input-box">
                    <h3 className="m-n-i_title">Character's name</h3>
                    <input className="m-n-i_input" type="text" placeholder="Enter character's name" defaultValue="" onChange={handleCharacterName}/>
                </div>
                <div className="main__new-character-form__input-box">
                    <h3 className="m-n-i_title">Character's mail</h3>
                    <input className="m-n-i_input" type="text" placeholder="Enter character's mail" defaultValue="" onChange={handleCharacterEmail}/>
                </div>
                <div className="main__new-character-form__input-box">
                    <h3 className="m-n-i_title">Character's gender</h3>

                    <div className="m-n-i_radio-box">
                        <input className="m-n-i_input" type="radio" name="gender" id="male-radio" value="male" onChange={handleCharacterGender}/>
                        <label htmlFor="male-radio">Male</label>
                    </div>

                    <div className="m-n-i_radio-box">
                        <input className="m-n-i_input" type="radio" name="gender" id="female-radio" value="female" onChange={handleCharacterGender}/>
                        <label htmlFor="female-radio">Female</label>
                    </div>

                    <div className="m-n-i_radio-box">
                        <input className="m-n-i_input" type="radio" name="gender" id="genderless-radio"
                        value="genderless" onChange={handleCharacterGender}/>
                        <label htmlFor="genderless-radio">Genderless</label>
                    </div>

                    <div className="m-n-i_radio-box">
                        <input className="m-n-i_input" type="radio" name="gender" id="unknown-radio" value="unknown" onChange={handleCharacterGender}/>
                        <label htmlFor="unknown-radio">Unknown</label>
                    </div>
                </div>
                <div className="main__new-character-form__input-box">
                    <h3 className="m-n-i_title">Character's image url</h3>
                    <input className="m-n-i_input" type="text" placeholder="Enter character's image url" defaultValue="" onChange={handleCharacterImage}/>
                </div>
                <button className="main__new-character-form_submit-btn" onClick={() => addCharacterItem(characterObject.characterName, characterObject.characterEmail, characterObject.characterGender, characterObject.characterImage)}>Submit</button>
            </form>
        </>
    )
};

const mapStateToProps = (state) => ({
    newCharacterState: state,
});

const mapDispatchToProps = dispatch => ({
    resetCharState: (value) => dispatch({
        type: "RESET_CHAR_STATE",
        value,
    }),

    addCharacterItem: (value1, value2, value3, value4) => dispatch({
        type: "ADD_CHAR_ITEM",
        value1,
        value2,
        value3,
        value4,
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCharacterPage);