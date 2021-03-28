import React from 'react';
import { Route } from 'react-router';
import CharacterList from './CharacterList';
import NewCharacterPage from './NewCharacterPage';

const Main = () => {
    return (
        <main className="main">
            <CharacterList/>
            <Route path="/new-character" render={() =>
                <NewCharacterPage/>
            }/>
        </main>
    )
};

export default Main;