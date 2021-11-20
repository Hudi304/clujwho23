import { useInView } from 'react-intersection-observer'
import { CustomPaper } from '../../components/custom-paper/paper-component'
import { NavBarComponent } from '../login/components/navbar/navbar-component'

import man from '../../assets/map/man.svg'

import './committees.scss'
import { WorldMap, WorldMapMobile } from './world-map'
import { AMRO_Description, committeesSubtitile } from './committees-page-text'
import { useState, useEffect } from 'react'
import { Paper } from '@mui/material'

export function Committees(props: any): JSX.Element {
  const [ref, inView] = useInView({
    threshold: 0.5
  })

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    if (dimensions.width < 600) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [dimensions])

  console.log(mobile)

  if (mobile) {
    return (
      <div>
        <div className="committeesPageContainerMobile">
          <div className="committeesPageGridMobile">
            <div className="committeesWroldMapContainerMobile">
              <WorldMapMobile width={'100vw'} height={'30vh'} />
            </div>

            <div className="OxCenter committeePageContainer">
              <CustomPaper width={'90vw'} height={'auto'}>
                <div className="mobileTextContainer">
                  AMRO
                  <div>{AMRO_Description.p1}</div>
                  <br />
                  <div>{AMRO_Description.p2}</div>
                  <br />
                  <div>{AMRO_Description.p3}</div>
                  <br />
                </div>
              </CustomPaper>
            </div>
            <div className="OxCenter committeePageContainer">
              <CustomPaper width={'90vw'} height={'auto'}>
                <div className="mobileTextContainer">
                  AFRO
                  <div>{AMRO_Description.p1}</div>
                  <br />
                  <div>{AMRO_Description.p2}</div>
                  <br />
                  <div>{AMRO_Description.p3}</div>
                  <br />
                </div>
              </CustomPaper>
            </div>
            <div className="OxCenter committeePageContainer">
              <CustomPaper width={'90vw'} height={'auto'}>
                <div className="mobileTextContainer">
                  EURO
                  <div>{AMRO_Description.p1}</div>
                  <br />
                  <div>{AMRO_Description.p2}</div>
                  <br />
                  <div>{AMRO_Description.p3}</div>
                  <br />
                </div>
              </CustomPaper>
            </div>
            <div className="OxCenter committeePageContainer">
              <CustomPaper width={'90vw'} height={'auto'}>
                <div className="mobileTextContainer">
                  EMRO
                  <div>{AMRO_Description.p1}</div>
                  <br />
                  <div>{AMRO_Description.p2}</div>
                  <br />
                  <div>{AMRO_Description.p3}</div>
                  <br />
                </div>
              </CustomPaper>
            </div>
            <div className="OxCenter committeePageContainer">
              <CustomPaper width={'90vw'} height={'auto'}>
                <div className="mobileTextContainer">
                  WPRO
                  <div>{AMRO_Description.p1}</div>
                  <br />
                  <div>{AMRO_Description.p2}</div>
                  <br />
                  <div>{AMRO_Description.p3}</div>
                  <br />
                </div>
              </CustomPaper>
            </div>
            <div className="OxCenter committeePageContainer">
              <CustomPaper width={'90vw'} height={'auto'}>
                <div className="mobileTextContainer">
                  SEARO
                  <div>{AMRO_Description.p1}</div>
                  <br />
                  <div>{AMRO_Description.p2}</div>
                  <br />
                  <div>{AMRO_Description.p3}</div>
                  <br />
                </div>
              </CustomPaper>
            </div>
          </div>
        </div>
        <div className={`nav-bar-container`}>
          <NavBarComponent inView={true} mobile={mobile} />
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className="committeesPageContainerMobile">
          <div className="committeesPageGridMobile">
            <div className="committeesWroldMapContainerMobile">
              <WorldMap width={'100vw'} height={'30vh'} />
            </div>

            <div className="OxCenter committeePageContainer">
              <Paper elevation={10}>
                <div className="mobileTextContainer">
                  AMRO
                  <div>{AMRO_Description.p1}</div>
                  <br />
                  <div>{AMRO_Description.p2}</div>
                  <br />
                  <div>{AMRO_Description.p3}</div>
                  <br />
                </div>
              </Paper>
            </div>
            <div className="OxCenter committeePageContainer">
              <CustomPaper width={'90vw'} height={'auto'}>
                <div className="mobileTextContainer">
                  AFRO
                  <div>{AMRO_Description.p1}</div>
                  <br />
                  <div>{AMRO_Description.p2}</div>
                  <br />
                  <div>{AMRO_Description.p3}</div>
                  <br />
                </div>
              </CustomPaper>
            </div>
            <div className="OxCenter committeePageContainer">
              <CustomPaper width={'90vw'} height={'auto'}>
                <div className="mobileTextContainer">
                  EURO
                  <div>{AMRO_Description.p1}</div>
                  <br />
                  <div>{AMRO_Description.p2}</div>
                  <br />
                  <div>{AMRO_Description.p3}</div>
                  <br />
                </div>
              </CustomPaper>
            </div>
            <div className="OxCenter committeePageContainer">
              <CustomPaper width={'90vw'} height={'auto'}>
                <div className="mobileTextContainer">
                  EMRO
                  <div>{AMRO_Description.p1}</div>
                  <br />
                  <div>{AMRO_Description.p2}</div>
                  <br />
                  <div>{AMRO_Description.p3}</div>
                  <br />
                </div>
              </CustomPaper>
            </div>
            <div className="OxCenter committeePageContainer">
              <CustomPaper width={'90vw'} height={'auto'}>
                <div className="mobileTextContainer">
                  WPRO
                  <div>{AMRO_Description.p1}</div>
                  <br />
                  <div>{AMRO_Description.p2}</div>
                  <br />
                  <div>{AMRO_Description.p3}</div>
                  <br />
                </div>
              </CustomPaper>
            </div>
            <div className="OxCenter committeePageContainer">
              <CustomPaper width={'90vw'} height={'auto'}>
                <div className="mobileTextContainer">
                  SEARO
                  <div>{AMRO_Description.p1}</div>
                  <br />
                  <div>{AMRO_Description.p2}</div>
                  <br />
                  <div>{AMRO_Description.p3}</div>
                  <br />
                </div>
              </CustomPaper>
            </div>
          </div>
        </div>

        <div className={`nav-bar-container`}>
          <NavBarComponent inView={inView} mobile={mobile} />
        </div>
      </div>
    )
  }
}
