import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQueryResults, updateSearchQuery } from '../../redux/actions';
import { AppState } from '../../redux/reducer';

const SearchBar: React.FC = () => {
    const searchQuery = useSelector((state: AppState) => state.searchString);

    const dispatch = useDispatch();
    const fireSearch = () => {
        dispatch<any>(fetchQueryResults(searchQuery));
    };
    const setSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        dispatch<any>(updateSearchQuery(event.target.value));
    };

    return (
        <div className='search-bar'>
            <input type="text" value={searchQuery} onChange={setSearchQuery}/>
            <button onClick={fireSearch}>search</button>
        </div>
    );
};

export default SearchBar;