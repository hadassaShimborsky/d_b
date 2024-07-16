import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ResultsPanel from '../ResultsPanel/ResultsPanel';
import HistorySideBar from '../HistorySideBar/HistorySideBar';
import './HomePage.scss'

const HomePage: React.FC = () => {
    return (
        <div className='home-page'>
            <div className='search-area'>
                <SearchBar />
                <ResultsPanel />
            </div>
            <HistorySideBar />
        </div>
    );
}

export default HomePage;