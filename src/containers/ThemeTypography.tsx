import { Typography } from '@material-ui/core'
import React, { FC, useContext } from 'react'
import { ThemeContext, ThemeType } from './ThemeContext'

export const ThemeTypography: FC<{ variant?: any }> = ({ children, variant }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Typography
      color={theme === ThemeType.LIGHT ? 'primary' : 'secondary'}
      variant={variant}
    >
      {children}
    </Typography>
  )
}
