import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Pagination from './Pagination';
import { fetchSearchResults } from '../services/apiService';

const Dashboard = () => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    if (query) {
      fetchSearchResults(query, page).then(data => {
        setResults(data.hits);
      });
    }
  }, [query, page]);

  return (
    <div className="dashboard">
      <header>
        <h1>{user ? `${user.username}'s Search` : 'Search Hacker News'}</h1>
      </header>
      <SearchBar onSearch={setQuery} />
      <SearchResults results={results} />
      <Pagination 
        currentPage={page} 
        onPageChange={setPage} 
      />
    </div>
  );
};

export default Dashboard;
