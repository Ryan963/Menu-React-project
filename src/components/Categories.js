import React from 'react';

const Categories = (props) => {
  return (
    <div className = 'btn-container'>
      <button className="filter-btn" onClick = {props.all}>All</button>
      <button className="filter-btn" onClick={() => props.clicked('breakfast')}>Breakfast</button>
      <button className="filter-btn" onClick={() => props.clicked('lunch')}>Lunch</button>
      <button className="filter-btn" onClick={() => props.clicked('shakes')}>Shakes</button>
    </div>
  );
};

export default Categories;