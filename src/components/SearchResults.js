import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      {results.map((result) => (
        <div 
          key={result.objectID} 
          className="result-item"
          onClick={() => window.open(result.url, '_blank')}
        >
          <h3>{result.title}</h3>
          <p>{result.author}</p>
          <small>{new Date(result.created_at).toLocaleDateString()}</small>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
