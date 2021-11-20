import './login.scss'
import '../../common-components/common.scss'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from './login.actions'

import { NavBarComponent } from './components/navbar/navbar-component'
import { useEffect, useState } from 'react'
import InView, { useInView } from 'react-intersection-observer'

import ClujWhoLogo from './../../assets/ClujWHOLogo.png'
import './login.scss'
import Paper from '@mui/material/Paper'
import { TeamMemberCard } from './components/team-member-component/team-member-component'

function Home(props: any): JSX.Element {
  const [ref, inView] = useInView({
    threshold: 0.5
  })

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', handleResize, false)
  }, [])

  useEffect(() => {
    if (dimensions.width < 600) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [dimensions])

  if (mobile) {
    return (
      <>
        <div className="homePageGridContainerMobile ">
          <div className="titleContainer " ref={ref}>
            <div className="titleGrid">
              {/* //?IMAGE */}
              <div className="logoContainer ">
                <div className="logoBackground">
                  <img className="logo" src={ClujWhoLogo} />
                </div>
              </div>
              {/* //?TITLE */}
              <div className="tileGridItem ">
                <h2 className="title">Cluj World Health Organisation Model</h2>
              </div>
              {/* //?MESSAGE */}
              <div className="tileGridItem ">
                <div className="message ">
                  First of its kind in Eastern Europe
                </div>
              </div>
            </div>
          </div>

          <div className="page-grid-item ">
            <div className="paper-flex">
              <div className="out-paper">
                <Paper elevation={10}>
                  <div className="in-paper">We need a description here!</div>
                </Paper>
              </div>
            </div>
          </div>
        </div>

        <div className={`nav-bar-container`}>
          <NavBarComponent inView={inView} mobile={mobile} />
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="homePageGridContainerMobile ">
          <div className="titleContainer " ref={ref}>
            <div className="titleGrid">
              {/* //?IMAGE */}
              <div className="logoContainer ">
                <div className="logoBackground">
                  <img className="logo" src={ClujWhoLogo} />
                </div>
              </div>
              {/* //?TITLE */}
              <div className="tileGridItem ">
                <h2 className="title">Cluj World Health Organisation Model</h2>
              </div>
              {/* //?MESSAGE */}
              <div className="tileGridItem ">
                <div className="message ">
                  First of its kind in Eastern Europe
                </div>
              </div>
            </div>
          </div>

          <div className="page-grid-item ">
            <div className="paper-flex">
              <div className="out-paper">
                <Paper elevation={10}>
                  <div className="in-paper">We need a description here!</div>
                </Paper>
              </div>
            </div>
          </div>
        </div>

        <div className={`nav-bar-container`}>
          <NavBarComponent inView={inView} mobile={mobile} />
        </div>
      </>
    )
  }
}

const mapStateToProps = (state: any) => ({
  ...state
})

const mapDispatchToProps = (dispatch: any) => ({
  dispatch,
  ...bindActionCreators({ login }, dispatch)
})

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(Home)
// conecteaza pagina la store, deci avem access la store

// <>
// <div className="homePageGridContainer debug">
//   <div className="titleContainer debug" ref={ref}>
//     <div className="titleGrid">
//       {/* //?IMAGE */}
//       <div className="tileGridItem debug">
//         <img className="logo" src={ClujWhoLogo} />
//       </div>
//       {/* //?TITLE */}
//       <div className="tileGridItem debug">
//         <h2 className="title">Cluj World Health Organisation Model</h2>
//       </div>
//       {/* //?MESSAGE */}
//       <div className="tileGridItem debug">
//         <div className="message debug">
//           {' '}
//           First of its kind in Eastern Europe
//         </div>
//       </div>
//     </div>
//   </div>

//   <div className="page-grid-item debug">
//     <div className="paper-flex">
//       <div className="out-paper">
//         <Paper elevation={10}>
//           <div className="in-paper"></div>
//         </Paper>
//       </div>
//     </div>
//   </div>
// </div>

// <div className="page-grid-container debug">
// <div ref={ref}>
//   <span className="title-tile debug">
//     <div className="title-grid-container debug">
//       <div className="tile-grid-item-container debug">
//         <img className="logo" src={ClujWhoLogo} />
//       </div>

//       <div className="tile-grid-item-container debug">
//         <div className="title-container">
//           <h2 className="title">Cluj World Health Organisation Model</h2>
//         </div>
//       </div>

//       <div className="tile-grid-item-container debug"> First of its kind in Eastern Europe</div>
//     </div>
//   </span>
// </div>

// <div className="page-grid-item debug">
//   <div className="paper-flex">
//     <div className="out-paper">
//       <Paper elevation={10}>
//         <div className="in-paper">
//           <div className="team-member-card-container">
//             <TeamMemberCard />
//           </div>
//           <div className="team-member-card-container">
//             <TeamMemberCard />
//           </div>
//         </div>
//       </Paper>
//     </div>
//   </div>
// </div>
// <div className="page-grid-item debug"></div>
// </div>

// <div className={`nav-bar-container`}>
//   <NavBarComponent inView={inView} mobile={mobile} />
// </div>
// </>
