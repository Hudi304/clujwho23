import { useInView } from 'react-intersection-observer'
import { CustomPaper } from '../../components/custom-paper/paper-component'
import { NavBarComponent } from '../login/components/navbar/navbar-component'

import './committees.scss'
import { WorldMap, WorldMapMobile } from './world-map'
import { AMRO_Description } from './committees-page-text'
import { useState, useEffect } from 'react'
import { Paper } from '@mui/material'

import AFRO_Image from '../../assets/images/AFRO-map-image.png'

import amongUS from '../../assets/amonfUS.png'

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

            <AFRODescription mobile={mobile} />

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

            <AFRODescription mobile={mobile} />

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

interface SignitureProps {
  name: string
  image: any
  mobile: any
}

function Signiture(props: SignitureProps) {
  const { mobile, name, image } = props

  if (mobile) {
    return (
      <div className="signiture-container">
        <div className="signiture-card">
          <img className="signiture-image" src={image}></img>
          <div className="signiture-name">{name}</div>
        </div>
      </div>
    )
  } else {
    return <> </>
  }
}

function AFRODescription(props: any): JSX.Element {
  const { mobile } = props

  if (mobile) {
    return (
      <>
        <div className="OxCenter committeePageContainer">
          <CustomPaper width={'90vw'} height={'auto'}>
            <div className="mobileTextContainer">
              <div className="committee-description-container">
                <div className="AFRO-Title">Africa Regional Office (AFRO)</div>

                <div className="AFRO-first-paragraph">
                  The Regional Office for Africa (AFRO) consists of 47 member
                  states. AFRO works with member states and other developmental
                  partners to improve the health of people living in Africa. The
                  Regional Office works in combating both infectious and
                  non-infectious diseases, health sector development as well as
                  responding to disasters and emergencies.
                </div>

                <div className="AFRO-image-container">
                  <img className="AFRO-Image" src={AFRO_Image}></img>
                  <div>
                    <p>
                      This is achieved by adapting global health initiatives
                      into regional plans which meet the specific needs of those
                      living within the Region.
                    </p>
                    <p>
                      In regard to sexual health the Region has been working
                      towards the eradication of HIV/AIDS, decreasing the
                      prevalence and mortality of cervical cancer and improving
                      maternal and neonatal health care.
                    </p>
                  </div>
                </div>

                <div className="AFRO-bullet-point-list-container">
                  <p className="AFRO-bullet-point-list-title">
                    To achieve these goals the Region has been working on
                    several initiatives such as:
                  </p>
                  <ul className="AFRO-bullet-point-list">
                    <li className="AFRO-bullet-point-list-item">
                      Working to achieve the UNAIDs 90-90-90 targets
                    </li>
                    <li className="AFRO-bullet-point-list-item">
                      The Free to Shine campaign
                    </li>
                    <li className="AFRO-bullet-point-list-item">
                      Implementing the Treat All policy
                    </li>
                    <li className="AFRO-bullet-point-list-item">
                      Creating toolkits to assist with cervical cancer data
                      collection, use and standardization
                    </li>
                    <li className="AFRO-bullet-point-list-item">
                      Creation of a zero Draft of the Global Strategy towards
                      the Elimination of Cervical Cancer
                    </li>
                    <li className="AFRO-bullet-point-list-item">
                      Introducing a Reproductive, Maternal, New-born, Child and
                      Adolescent Health Technical Advisory Group
                    </li>
                    <li className="AFRO-bullet-point-list-item">
                      Supporting the development of national strategies and
                      guidelines on sexual reproductive health and rights
                    </li>
                  </ul>
                </div>

                <Signiture
                  name={'- Ion Popescu'}
                  image={amongUS}
                  mobile={mobile}
                />
              </div>
            </div>
          </CustomPaper>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="OxCenter committeePageContainer">
          <CustomPaper width={'90vw'} height={'auto'}>
            <div className="mobileTextContainer">
              <div className="committee-description-container">
                <div className="AFRO-Title">Africa Regional Office (AFRO)</div>

                <div className="AFRO-first-paragraph">
                  The Regional Office for Africa (AFRO) consists of 47 member
                  states. AFRO works with member states and other developmental
                  partners to improve the health of people living in Africa. The
                  Regional Office works in combating both infectious and
                  non-infectious diseases, health sector development as well as
                  responding to disasters and emergencies.
                </div>

                <div className="AFRO-image-container">
                  <img className="AFRO-Image" src={AFRO_Image}></img>
                  <div>
                    <p>
                      This is achieved by adapting global health initiatives
                      into regional plans which meet the specific needs of those
                      living within the Region.
                    </p>
                    <p>
                      In regard to sexual health the Region has been working
                      towards the eradication of HIV/AIDS, decreasing the
                      prevalence and mortality of cervical cancer and improving
                      maternal and neonatal health care.
                    </p>
                  </div>
                </div>

                <div className="AFRO-bullet-point-list-container">
                  <p className="AFRO-bullet-point-list-title">
                    To achieve these goals the Region has been working on
                    several initiatives such as:
                  </p>
                  <ul className="AFRO-bullet-point-list">
                    <li className="AFRO-bullet-point-list-item">
                      Working to achieve the UNAIDs 90-90-90 targets
                    </li>
                    <li className="AFRO-bullet-point-list-item">
                      The Free to Shine campaign
                    </li>
                    <li className="AFRO-bullet-point-list-item">
                      Implementing the Treat All policy
                    </li>
                    <li className="AFRO-bullet-point-list-item">
                      Creating toolkits to assist with cervical cancer data
                      collection, use and standardization
                    </li>
                    <li className="AFRO-bullet-point-list-item">
                      Creation of a zero Draft of the Global Strategy towards
                      the Elimination of Cervical Cancer
                    </li>
                    <li className="AFRO-bullet-point-list-item">
                      Introducing a Reproductive, Maternal, New-born, Child and
                      Adolescent Health Technical Advisory Group
                    </li>
                    <li className="AFRO-bullet-point-list-item">
                      Supporting the development of national strategies and
                      guidelines on sexual reproductive health and rights
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CustomPaper>
        </div>
      </>
    )
  }
}
