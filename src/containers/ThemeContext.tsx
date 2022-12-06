import React, { FC, useState, useMemo } from 'react'

export enum ThemeType {
  LIGHT = 'light',
  DARK = 'dark',
}

export const ThemeContext = React.createContext<{
  theme: ThemeType
  toggleTheme: () => void
}>({
  theme: ThemeType.LIGHT,
  toggleTheme: () => {
    throw Error('unimplemented')
  },
})

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState(ThemeType.LIGHT)

  const values = useMemo(
    () => ({
      theme,
      toggleTheme: () => {
        setTheme(theme === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT)
      },
    }),
    [theme, setTheme],
  )

  return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}
