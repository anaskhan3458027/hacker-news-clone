import React from 'react';

const Pagination = ({ currentPage, onPageChange }) => {
  return (
    <div className="pagination">
      <button 
        onClick={() => onPageChange(Math.max(0, currentPage - 1))}
        disabled={currentPage === 0}
      >
        Previous
      </button>
      <span>Page {currentPage + 1}</span>
      <button onClick={() => onPageChange(currentPage + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
