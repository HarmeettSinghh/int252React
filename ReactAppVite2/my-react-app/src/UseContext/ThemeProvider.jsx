import React from 'react'
import ThemeGetter from './ThemeGetter';
import { useState } from 'react'
export const themeContext = React.createContext(); //export so that getter can get
const ThemeProvider = () => {
    const [theme,setTheme] = useState('light');

  return (
    <div>
      <themeContext.Provider value = {{theme,setTheme}}>
         <ThemeGetter/>
      </themeContext.Provider>
    </div>
  )
}

export default ThemeProvider
