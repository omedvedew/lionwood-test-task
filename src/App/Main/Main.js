import React from 'react';
import { Route } from 'react-router';
import CharacterList from './CharacterList';

const Main = () => {
    return (
        <main className="main">
            <Route path="/" exact render={() => 
                <CharacterList/>
            }/>
        </main>
    )
};

export default Main;