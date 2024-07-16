import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux/reducer';
import { fetchQueryResults, updateSearchQuery } from '../../redux/actions';
import './HistorySideBar.scss'

const HistorySideBar: React.FC = () => {
    const searches = useSelector((state: AppState) => state.searchHistory);

    const dispatch = useDispatch();
    const fireSearch = (searchQuery: string) => {
        dispatch<any>(updateSearchQuery(searchQuery));
        dispatch<any>(fetchQueryResults(searchQuery));
    }

    return (
        <div className='history-side-bar'>
            {searches?.map((search, index) => (
                <div className='history-search'>
                    <a key={index} onClick={() => {fireSearch(search)}}>{search}</a>
                </div>
            ))}
        </div>
    );
};

export default HistorySideBar;