import './navbar-component.scss'
import Typography from '@mui/material/Typography'

import logo from '../../../../assets/LEGO_logo.svg.png'
import ClujWhoLogo from '../../../../assets/ClujWHOLogo.png'
import ClujWhoLogoBar from '../../../../assets/ClujWHOLogoBar.png'

import { useState, useEffect, Fragment } from 'react'
import { useHistory } from 'react-router'
import {
  AccountBalance,
  AddModerator,
  AddModeratorOutlined,
  AppRegistration,
  CalendarToday,
  ContactPage,
  Delete,
  DriveFileMove,
  Group,
  Home,
  Inbox,
  Info,
  Mail,
  Menu
} from '@mui/icons-material'
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer
} from '@mui/material'
import { blue, pink } from '@mui/material/colors'
import { minWidth } from '@mui/system'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

export function NavBarComponent(props: any): JSX.Element {
  const { inView } = props

  const [navBarClasses, setNavBarClasses] = useState('')
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })

  const [drawerOpen, setDrawerOpen] = useState(false)

  const history = useHistory()

  useEffect(() => {
    console.log('IN VIEW', inView)
    if (!props.mobile) {
      if (inView) {
        setNavBarClasses('')
      } else {
        setNavBarClasses('nav-bar-active')
      }
    } else {
      setNavBarClasses('nav-bar-active-mobile')
    }
  }, [inView])

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  function redirect(path: string, e: any) {
    console.log('REDIRECT TO ', path)
    history.push(path)
  }

  if (props.mobile) {
    return (
      <>
        <div className={`nav-bar-component-mobile ${navBarClasses} `}>
          <div className="nav-bar-mobile-hamburger-container ">
            <IconButton
              className="hamburger-menu"
              onClick={() => {
                console.log('dsadas')
                toggleDrawer('left', true)
                setDrawerOpen(true)
              }}
              aria-label="delete"
            >
              <Menu
                className="hamburger-menu"
                sx={{ color: '#bbc5d1', fontSize: '4vh' }}
              />
            </IconButton>
          </div>
          <div className="nav-bar-mobile-title "> ClujWHO</div>
          <div className=""> asd</div>
        </div>

        <div>
          <SwipeableDrawer
            className="menu-drawer"
            anchor={'left'}
            open={drawerOpen}
            onClose={() => {
              setDrawerOpen(false)
            }}
            onOpen={() => {
              setDrawerOpen(true)
            }}
            disableSwipeToOpen={false}
          >
            <List className="menu-btn-list">
              <div className="menu-list-item">
                <IconButton
                  className="menu-icon-btn"
                  onClick={() => {
                    history.push('/clujwho23/home')
                    setDrawerOpen(false)
                  }}
                  aria-label="delete"
                >
                  <Home sx={{ color: blue[500], fontSize: '4vh' }} />
                  Home
                </IconButton>
              </div>
              <div className="menu-list-item">
                <IconButton
                  className="menu-icon-btn"
                  onClick={() => {
                    history.push('/clujwho23/apply_now')
                    setDrawerOpen(false)
                  }}
                  aria-label="delete"
                >
                  <AppRegistration sx={{ color: blue[500], fontSize: '4vh' }} />
                  Apply now
                </IconButton>
              </div>
              <div className="menu-list-item">
                <IconButton
                  className="menu-icon-btn"
                  onClick={() => {
                    history.push('/clujwho23/about_us')
                    setDrawerOpen(false)
                  }}
                  aria-label="delete"
                >
                  <Info sx={{ color: blue[500], fontSize: '4vh' }} />
                  About us
                </IconButton>
              </div>
              <div className="menu-list-item">
                <IconButton
                  className="menu-icon-btn"
                  onClick={() => {
                    history.push('/clujwho23/schedule')
                    setDrawerOpen(false)
                  }}
                  aria-label="delete"
                >
                  <CalendarToday sx={{ color: blue[500], fontSize: '4vh' }} />
                  Schedule
                </IconButton>
              </div>
              <div className="menu-list-item">
                <IconButton
                  className="menu-icon-btn"
                  onClick={() => {
                    history.push('/clujwho23/committees')
                    setDrawerOpen(false)
                  }}
                  aria-label="delete"
                >
                  <AccountBalance sx={{ color: blue[500], fontSize: '4vh' }} />
                  Committees
                </IconButton>
              </div>
              <div className="menu-list-item">
                <IconButton
                  className="menu-icon-btn"
                  onClick={() => {
                    history.push('/clujwho23/our_team')
                    setDrawerOpen(false)
                  }}
                  aria-label="delete"
                >
                  <Group sx={{ color: blue[500], fontSize: '4vh' }} />
                  Our Team
                </IconButton>
              </div>
              <div className="menu-list-item">
                <IconButton
                  className="menu-icon-btn"
                  onClick={() => {
                    history.push('/clujwho23/resources')
                    setDrawerOpen(false)
                  }}
                  aria-label="delete"
                >
                  <DriveFileMove sx={{ color: blue[500], fontSize: '4vh' }} />
                  Resources
                </IconButton>
              </div>
              <div className="menu-list-item">
                <IconButton
                  className="menu-icon-btn"
                  onClick={() => {
                    history.push('/clujwho23/contact')
                    setDrawerOpen(false)
                  }}
                  aria-label="delete"
                >
                  <ContactPage sx={{ color: blue[500], fontSize: '4vh' }} />
                  Contact
                </IconButton>
              </div>
              <div className="menu-list-item">
                <IconButton
                  className="menu-icon-btn"
                  onClick={() => {
                    history.push('/clujwho23/sponsors')
                    setDrawerOpen(false)
                  }}
                  aria-label="delete"
                >
                  <AddModerator sx={{ color: blue[500], fontSize: '4vh' }} />
                  Sponsors
                </IconButton>
              </div>
            </List>
          </SwipeableDrawer>
        </div>
      </>
    )
  } else {
    return (
      <div className={`nav-bar-component ${navBarClasses}`}>
        <div className="nav-bar-container-grid">
          <div className="nav-bar-logo-container">
            <div className="iconContainer">
              <img className="nav-bar-logo" src={ClujWhoLogo} />
            </div>
            <p className="navBarTitle">ClujWHO</p>
          </div>

          <div className="nav-bar-buttons-container">
            <NavBarButton
              text={'Home'}
              onClick={(e: any) => {
                redirect('/clujwho23/home', e)
              }}
            />
            <NavBarButton
              style={{ minWidth: '124px' }}
              text={'Apply now'}
              onClick={(e: any) => {
                redirect('/clujwho23/apply_now', e)
              }}
            />
            <NavBarButton
              style={{ minWidth: '112px' }}
              text={'About us'}
              onClick={(e: any) => {
                redirect('/clujwho23/about_us', e)
              }}
            />
            <NavBarButton
              text={'Schedule'}
              onClick={(e: any) => {
                redirect('/clujwho23/schedule', e)
              }}
            />
            <NavBarButton
              text={'Committees'}
              onClick={(e: any) => {
                redirect('/clujwho23/committees', e)
              }}
            />
            <NavBarButton
              style={{ minWidth: '112px' }}
              text={'Our Team'}
              onClick={(e: any) => {
                redirect('/clujwho23/our_team', e)
              }}
            />
            <NavBarButton
              text={'Resources'}
              onClick={(e: any) => {
                redirect('/clujwho23/resources', e)
              }}
            />
            <NavBarButton
              text={'Contact'}
              onClick={(e: any) => {
                redirect('/clujwho23/contact', e)
              }}
            />
            <NavBarButton
              text={'Sponsors'}
              onClick={(e: any) => {
                redirect('/clujwho23/sponsors', e)
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}

interface NavBarButtonProps {
  text: string
  onClick: any
  style?: any
}

function NavBarButton(props: NavBarButtonProps): JSX.Element {
  const { text, onClick, style } = props
  return (
    <button style={style} className="nav-bar-btn" onClick={onClick}>
      {text}
    </button>
  )
}
