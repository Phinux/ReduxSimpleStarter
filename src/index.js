import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchBar';



const AOPI_KEY = 'AIzaSyAQL9RvEEQdOIiH5wGYmpYt - Qj - ppHZoNY';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));