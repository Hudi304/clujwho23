import './navbar-component.scss'
import Typography from '@mui/material/Typography'

import logo from '../../../../assets/LEGO_logo.svg.png'
import ClujWhoLogo from '../../../../assets/ClujWHOLogo.png'
import ClujWhoLogoBar from '../../../../assets/ClujWHOLogoBar.png'

import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useHistory } from 'react-router'

export function NavBarComponent(props: any): JSX.Element {
    const { inView } = props

    const [navBarClasses, setNavBarClasses] = useState('')
    const history = useHistory()

    useEffect(() => {
        console.log('IN VIEW', inView)
        if (inView) {
            setNavBarClasses('')
        } else {
            setNavBarClasses('nav-bar-active')
        }
    }, [inView])

    function redirect(path: string, e: any) {
        console.log('REDIRECT TO ', path)
        history.push(path)
    }

    return (
        <div className={`nav-bar-component ${navBarClasses}`}>
            <div className="nav-bar-container-grid">
                <div className="nav-bar-logo-container">
                    <img className="nav-bar-logo" src={ClujWhoLogoBar} />
                </div>

                <div className="nav-bar-flex-container">
                    <div className="nav-bar-buttons-container">
                        <NavBarButton
                            text={'Home'}
                            onClick={(e: any) => {
                                redirect('/home', e)
                            }}
                        />
                        <NavBarButton
                            text={'Apply now'}
                            onClick={(e: any) => {
                                redirect('/apply_now', e)
                            }}
                        />
                        <NavBarButton
                            text={'About us'}
                            onClick={(e: any) => {
                                redirect('/about_us', e)
                            }}
                        />
                        <NavBarButton
                            text={'Schedule'}
                            onClick={(e: any) => {
                                redirect('/schedule', e)
                            }}
                        />
                        <NavBarButton
                            text={'Committees'}
                            onClick={(e: any) => {
                                redirect('/committees', e)
                            }}
                        />
                        <NavBarButton
                            text={'Our Team'}
                            onClick={(e: any) => {
                                redirect('/our_team', e)
                            }}
                        />
                        <NavBarButton
                            text={'Resources'}
                            onClick={(e: any) => {
                                redirect('/resources', e)
                            }}
                        />
                        <NavBarButton
                            text={'Contact'}
                            onClick={(e: any) => {
                                redirect('/contact', e)
                            }}
                        />
                        <NavBarButton
                            text={'Sponsors'}
                            onClick={(e: any) => {
                                redirect('/sponsors',e)
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

interface NavBarButtonProps {
    text: string
    onClick: any
}

function NavBarButton(props: NavBarButtonProps): JSX.Element {
    const { text, onClick } = props
    return (
        <button className="nav-bar-btn" onClick={onClick}>
            {text}
        </button>
    )
}
