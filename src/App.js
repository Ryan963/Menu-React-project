import React, { useState } from 'react';
import Menu from './components/Menu';
import Categories from './components/Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState([])
  const filterHandler = cat => {
    const newItems = items.filter(item => item.category === cat)
    console.log(newItems)
    setMenuItems(newItems)
  }
  const displayAllHandler = () => {
    setMenuItems(items)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className= 'underline'></div>
        </div>
        <Categories clicked = {filterHandler} all = {displayAllHandler}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;