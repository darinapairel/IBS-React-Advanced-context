import React, { useContext, useState, FC } from 'react'
import SayHelloProvider, { SayHelloContext } from './SayHelloProvider'
import TextField from '@material-ui/core/TextField'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Button, Container, Typography } from '@material-ui/core'
import ToggleButton from '@material-ui/lab/ToggleButton'
// import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'

import ModalPortalComponent from './Portals'
import { ThemeContext, ThemeProvider, ThemeType } from './ThemeContext'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  containerDark: {
    background: theme.palette.grey.A400,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLight: {
    background: theme.palette.background.default,
    // transform and remove this copepaste
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
// const useThemeStyles = makeStyles(theme => ({
//   containerDark: {
//     background: theme.palette.grey.A400,
//   }
// }))

const ButtonChangeTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return <Button onClick={toggleTheme}>{theme}</Button>
}
const ThemeToggle = ({ classes }: any) => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <ToggleButton
      value={theme}
      key={theme}
      onClick={toggleTheme}
      className={theme === ThemeType.DARK ? classes.dark : classes.light}
      // style= {{ background: theme === ThemeType.DARK ? classes.root.background : 'red' }}
    >
      {theme}
    </ToggleButton>
  )
}
const StyledThemeToggle = withStyles(({ palette }) => ({
  light: {
    background: palette.background.default,
    color: palette.text.primary,
  },
  dark: {
    background: palette.grey.A700,
    color: 'lightgray',
    '&:hover': {
      color: palette.text.primary,
    },
  },
}))(ThemeToggle)

const ThemeBackgroundColorWrapper: FC<{ children: any }> = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  const classes = useStyles()

  // const styleTheme = React.useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         type: theme === ThemeType.DARK ? 'dark' : 'light',
  //       },
  //     }),
  //   [theme],
  // )
  // and then add theme={styleTheme} to ThemeProvider
  // and return <ThemeProvider theme={theme}>
  return (
    <Container
      maxWidth="xl"
      classes={classes}
      className={
        theme === ThemeType.DARK ? classes.containerDark : classes.containerLight
      }
    >
      {children}
    </Container>
  )
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

const ThemeTypography: FC<{ variant?: any }> = ({ children, variant }) => {
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

const WishGoodDayComponent = () => {
  const { name } = useContext(SayHelloContext)

  // const {theme} = useContext(ThemeContext)

  return (
    <div>
      {name && <ThemeTypography>Have a good day, {name}!</ThemeTypography>}
      {!name && <ThemeTypography>Hope, you are ok!</ThemeTypography>}
    </div>
  )
}
const CurrentThemeNotice = () => {
  const { theme } = useContext(ThemeContext)
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
      <ThemeBackgroundColorWrapper>
        {/* <ThProvider theme="dark"> */}
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
            <StyledThemeToggle />
            <ModalPortalComponent open={open} handleClose={handleClose}>
              <ThemeTypography>
                This component will render in div with id="modal"
              </ThemeTypography>
            </ModalPortalComponent>
          </div>
        </SayHelloProvider>
        {/* </ThProvider> */}
      </ThemeBackgroundColorWrapper>
      {/* </ThemeContext.Provider> */}
    </ThemeProvider>
  )
}

export default App
