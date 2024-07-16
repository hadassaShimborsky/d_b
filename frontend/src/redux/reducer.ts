export const SET_QUERY_RESULT = 'SET_QUERY_RESULT';
export const SET_QUERY_HISTORY = 'SET_QUERY_HISTORY';
export const UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY';

interface QueryResult {
    Heading: string
    RelatedTopics: {
        FirstURL: string,
        Text: string
    }[]
}

export type AppAction =
{ type: typeof SET_QUERY_RESULT; payload: QueryResult }
| { type: typeof SET_QUERY_HISTORY; payload: string }
| { type: typeof UPDATE_SEARCH_QUERY; payload: string }

export interface AppState {
    queryResults: QueryResult | null,
    searchHistory: string[],
    searchString: string
}

const initialState: AppState = {
    queryResults: null,
    searchHistory: [],
    searchString: ''
};

const reducer = (state = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case SET_QUERY_RESULT:
            return {
                ...state,
                queryResults: action.payload
            };
        case SET_QUERY_HISTORY:
            return {
                ...state,
                searchHistory: [action.payload, ...state.searchHistory]
            };
        case UPDATE_SEARCH_QUERY:
            return {
                ...state,
                searchString: action.payload
            };
        default:
            return state;
    }
};

export default reducer;