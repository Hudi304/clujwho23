import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { CustomPaper } from '../../components/custom-paper/paper-component'
import { NavBarComponent } from '../login/components/navbar/navbar-component'
import './about-us.scss'

export function AboutUs(props: any): JSX.Element {
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

  if (mobile) {
    return (
      <div>
        <div className="aboutUsPageContainer backgroud-image debug">
          <div className="aboutUsPageGrid">
            <CustomPaper width={'90vw'} height={'100vh'}>
              AboutUs
            </CustomPaper>
          </div>
        </div>

        <div className={`nav-bar-container`}>
          <NavBarComponent inView={inView} mobile={mobile} />
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className="apply-now-page-grid-container backgroud-image debug">
          <CustomPaper width={'1220px'} height={'300vh'}>
            AboutUs
          </CustomPaper>
        </div>

        <div className={`nav-bar-container`}>
          <NavBarComponent inView={inView} mobile={mobile} />
        </div>
      </div>
    )
  }
}
