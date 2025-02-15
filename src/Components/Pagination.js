import React from 'react';
import { Link } from 'react-router-dom';
import './pagination.css'; // Import the CSS file

function Pagination() {
  return (
    <div className="pagination-container">
      <ul className="pagination custom-pagination">
        <li className="page-item">
          <Link to="/Movies" className="page-link active">1</Link>
        </li>
        <li className="page-item">
          <Link to="/Blogs" className="page-link">2</Link>
        </li>
        <li className="page-item">
          <Link to="/Audios" className="page-link">3</Link>
        </li>
        <li className="page-item">
          <Link to="/Games" className="page-link">4</Link>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
