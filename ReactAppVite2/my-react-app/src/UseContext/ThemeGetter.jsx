import React, { useContext } from 'react';
import { themeContext } from './ThemeProvider';

const ThemeGetter = () => {
  const { theme, setTheme } = useContext(themeContext);

  const changeTheme = () => {
    setTheme((utheme) => (utheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style = {{backgroundColor : theme == ''}}>
      <h2>Mode: {theme}</h2>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default ThemeGetter;
