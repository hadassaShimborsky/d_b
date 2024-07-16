import { Dispatch } from 'redux';
import { SET_QUERY_HISTORY, SET_QUERY_RESULT, UPDATE_SEARCH_QUERY } from './reducer';

export const fetchQueryResults = (query: string) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: SET_QUERY_HISTORY, payload: query });
        const response = await fetch(`http://localhost:3001/api/query?q=${query}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        dispatch({ type: SET_QUERY_RESULT, payload: data });
    } catch (error: any) {
        console.error('Error fetching data:', error);
    }
};

export const updateSearchQuery = (queryString: string) => async (dispatch: Dispatch) => 
    dispatch({ type: UPDATE_SEARCH_QUERY, payload: queryString });