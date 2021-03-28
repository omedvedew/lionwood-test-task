import React from 'react';

const NewCharacterPage = () => {
    return (
        <>
            <form className="main__new-character-form">
                <h2 className="main__new-character-form_title">Create new character here</h2>
                <div className="main__new-character-form__input-box">
                    <h3 className="m-n-i_title">Character's name</h3>
                    <input className="m-n-i_input" type="text" placeholder="Enter character's name"/>
                </div>
                <div className="main__new-character-form__input-box">
                    <h3 className="m-n-i_title">Character's mail</h3>
                    <input className="m-n-i_input" type="text" placeholder="Enter character's mail"/>
                </div>
                <div className="main__new-character-form__input-box">
                    <h3 className="m-n-i_title">Character's gender</h3>

                    <div className="m-n-i_radio-box">
                        <input className="m-n-i_input" type="radio" name="gender" id="male-radio"/>
                        <label htmlFor="male-radio">Male</label>
                    </div>

                    <div className="m-n-i_radio-box">
                        <input className="m-n-i_input" type="radio" name="gender" id="female-radio"/>
                        <label htmlFor="female-radio">Female</label>
                    </div>

                    <div className="m-n-i_radio-box">
                        <input className="m-n-i_input" type="radio" name="gender" id="genderless-radio"/>
                        <label htmlFor="genderless-radio">Genderless</label>
                    </div>

                    <div className="m-n-i_radio-box">
                        <input className="m-n-i_input" type="radio" name="gender" id="unknown-radio"/>
                        <label htmlFor="unknown-radio">Unknown</label>
                    </div>
                </div>
                <div className="main__new-character-form__input-box">
                    <h3 className="m-n-i_title">Character's image url</h3>
                    <input className="m-n-i_input" type="text" placeholder="Enter character's image url"/>
                </div>
                <button className="main__new-character-form_submit-btn">Submit</button>
            </form>
        </>
    )
};

export default NewCharacterPage;