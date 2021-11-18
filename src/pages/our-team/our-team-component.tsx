import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { CustomPaper } from '../../components/custom-paper/paper-component'
import { NavBarComponent } from '../login/components/navbar/navbar-component'

import './our-team.scss'

export function OurTeam(props: any): JSX.Element {
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

  return (
    <div>
      <div className="apply-now-page-grid-container backgroud-image debug">
        <CustomPaper width={'1220px'} height={'300vh'}>
          OurTeam
        </CustomPaper>
      </div>

      <div className={`nav-bar-container`}>
        <NavBarComponent inView={inView} mobile={mobile} />
      </div>
    </div>
  )
}
