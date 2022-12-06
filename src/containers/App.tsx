import React, { useContext, useState, FC } from 'react'
import SayHelloProvider, { SayHelloContext } from './SayHelloProvider'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Typography } from '@material-ui/core'

import ModalPortalComponent from './Portals'
import { ThemeContext, ThemeProvider, ThemeType } from './ThemeContext'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}))


const ButtonChangeTheme = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return <Button onClick= {toggleTheme}>{theme}</Button>

}
 

const SayHelloComponent = () => {
  const { sayHello, setName, name } = useContext(SayHelloContext)

  const classes = useStyles()
  return (
    <div>
      <ThemeTypography variant="h6">{sayHello()}</ThemeTypography>
      <div className={classes.root}>
        <TextField value={name} onChange={event => setName(event.target.value)} />
      </div>
    </div>
  )
}

const ThemeTypography: FC<{variant?: any}> = ({ children, variant }) => {
  const {theme} = useContext(ThemeContext)
  return (
    <Typography color={ theme === ThemeType.LIGHT ? 'primary' : 'secondary'} variant={variant}>
      {children}
    </Typography>
  )
}



const WishGoodDayComponent = () => {
  const { name } = useContext(SayHelloContext)

  // const {theme} = useContext(ThemeContext)

  return (
    <div>
      {name && (
        <ThemeTypography>
          Have a good day, {name}!
        </ThemeTypography>
      )}
      {!name && <ThemeTypography>Hope, you are ok!</ThemeTypography>}
    </div>
  )
}
const CurrentThemeNotice = () => {
  const {theme} = useContext(ThemeContext)
  return <ThemeTypography>Current theme is: {theme}</ThemeTypography>
}

const App = () => {
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <ThemeProvider>
      {/* <ThemeContext.Provider value="dark"> */}
        <SayHelloProvider>
          <SayHelloComponent />
          <WishGoodDayComponent />
          <CurrentThemeNotice />
          <div>
            <ThemeTypography variant="h6">Portal Example:</ThemeTypography>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
              Open portal example dialog
            </Button>
            <ButtonChangeTheme />
            <ModalPortalComponent open={open} handleClose={handleClose}>
              <ThemeTypography>This component will render in div with id="modal"</ThemeTypography>
            </ModalPortalComponent>
          </div>
        </SayHelloProvider>
      {/* </ThemeContext.Provider> */}
    </ThemeProvider>
  )
}

export default App
