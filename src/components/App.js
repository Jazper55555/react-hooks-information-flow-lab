import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from './header'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div>
      <Header isDarkMode={isDarkMode} onDarkModeClick={onDarkModeClick}/>
    </div>
  );
}

export default App;
