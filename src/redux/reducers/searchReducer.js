const initialState = {
  results: [],
  searchHistory: []
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_RESULTS':
      return {
        ...state,
        results: action.payload
      };
    case 'ADD_SEARCH_HISTORY':
      return {
        ...state,
        searchHistory: [...state.searchHistory, action.payload]
      };
    default:
      return state;
  }
};

export default searchReducer;
