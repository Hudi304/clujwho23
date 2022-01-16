import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useEffect, useState } from 'react'
import InView, { useInView } from 'react-intersection-observer'
import ClujWhoLogo from './../../assets/ClujWHOLogo.png'
import Paper from '@mui/material/Paper'
import { NavBarComponent } from '../login/components/navbar/navbar-component'
import { login } from '../login/login.actions'

import './home.scss'

import ClujImage from '../../assets/ClujWho/Catedrala.png'
import ClujWHO_sigla from '../../assets/ClujWho/ClujWHO_sigla.svg'

import Catedrala1080p_logo from '../../assets/ClujWho/Catedrala1080p_logo.png'

import AddCircleIcon from '@mui/icons-material/AddCircle'

function Home2(props: any): JSX.Element {
  const [ref, inView] = useInView({
    threshold: 0.1
  })

  const [ref1, inView1] = useInView({
    threshold: 0.9
  })

  const [ref2, inView2] = useInView({
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
    console.log('inView : ', inView)
  }, [inView])

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
        <Paper elevation={10}>
          <div className="in-paper">We need a description here!</div>
        </Paper>
        <div className={`nav-bar-container`}>
          <NavBarComponent inView={inView} mobile={mobile} />
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="desktopBackGround ">
          <div className="firstImageContainer">
            <div className="flexCenter1">
              <img className="firstImage" src={Catedrala1080p_logo} />
            </div>
            <div className="flexCenter2">
              <Waves />
            </div>
          </div>
          <div className="secondContainer " ref={ref}>
            <div className="homePageCardGrid">
              <div className="homePageCardContainer">
                <div className="homePageCard ">
                  <div className="homePageCardTitile">WHY?</div>
                  <div className="homePageCardContent">
                    <p>
                      For this year’s theme is going to be <b> Sexual Health</b>
                      .
                    </p>
                    <p>
                      In our thinking process in choosing the first edition’s
                      theme we considered that in the pandemic context we let
                      aside the other problems that we have in our world and
                      only discussed pandemic related issues over and over
                      again.
                    </p>
                  </div>
                </div>
              </div>

              <div className="homePageCardContainer">
                <div className="homePageCard ">
                  <div className="homePageCardTitile">Sexual health</div>
                  <div className="homePageCardContent">
                    <p>
                      Now more discussed than ever but still a problem because
                      people still see it as a taboo subject, not everyone has
                      access to information and medical care, legal issues in
                      many countries.
                    </p>
                  </div>
                </div>
              </div>

              <div className="homePageCardContainer">
                <div className="homePageCard ">
                  <div className="homePageCardTitile">Main topics</div>
                  <div className="homePageCardContent">
                    <p>The main discussed topics are going to be:</p>

                    <div className="topicList">
                      <div>
                        <AddCircleIcon style={{ fontSize: 15 }} /> access to
                        contraceptive methods and pregnancy related issues
                      </div>
                      <div>
                        <AddCircleIcon style={{ fontSize: 15 }} /> access to
                        medical care regarding sexual health problems
                      </div>
                      <div>
                        <AddCircleIcon style={{ fontSize: 15 }} /> abortion
                      </div>
                      <div>
                        <AddCircleIcon style={{ fontSize: 15 }} /> gender
                        inequality
                      </div>
                      <div>
                        <AddCircleIcon style={{ fontSize: 15 }} /> STDs
                      </div>
                      <div>
                        <AddCircleIcon style={{ fontSize: 15 }} /> LGBTQIA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="thirdContainer" ref={ref1}>
            <div
              ref={ref2}
              className={`thirdContainerLeft ${
                inView1
                  ? 'thirdContainerLeftInside'
                  : 'thirdContainerLeftOutside'
              }`}
            >
              <p className='thirdContainerRightText'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                finibus, quam a maximus tristique, nulla risus ultricies neque,
                sed laoreet elit ante in felis. Praesent posuere est at arcu
                finibus, ac condimentum augue rutrum. Sed lectus sem, laoreet eu
                facilisis quis, pellentesque ac lorem. Morbi molestie, justo
                luctus viverra egestas, quam sem vulputate tellus, quis sodales
                lacus quam at lorem. Nullam dapibus consequat leo. Sed vel lacus
                vel nisl laoreet egestas. Morbi ut pulvinar nibh, ut lacinia
                ligula. Maecenas non elit vitae massa malesuada hendrerit vel et
                orci. 
              </p>
            </div>

            <div
              className={`thirdContainerRight ${
                inView1
                  ? 'thirdContainerRightInside'
                  : 'thirdContainerRightOutside'
              }`}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                finibus, quam a maximus tristique, nulla risus ultricies neque,
                sed laoreet elit ante in felis. Praesent posuere est at arcu
                finibus, ac condimentum augue rutrum. Sed lectus sem, laoreet eu
                facilisis quis, pellentesque ac lorem. Morbi molestie, justo
                luctus viverra egestas, quam sem vulputate tellus, quis sodales
                lacus quam at lorem. Nullam dapibus consequat leo. Sed vel lacus
                vel nisl laoreet egestas. Morbi ut pulvinar nibh, ut lacinia
                ligula. Maecenas non elit vitae massa malesuada hendrerit vel et
                orci. Vivamus sagittis auctor nisi ac blandit. Maecenas ornare
                pretium urna sed porta.
              </p>
            </div>


            {/* //? Aici merger scris ceva sub alea  */}
          </div>
        </div>

        <div className={`nav-bar-container`}>
          <NavBarComponent inView={false} mobile={mobile} />
        </div>
      </>
    )
  }
}

function card(titile: string, content: string) {
  return (
    <div className="homePageCardContainer">
      <div className="homePageCard ">
        <div className="homePageCardTitile">WHY?</div>
        <div className="homePageCardContent">
          For this year’s theme is going to be Sexual Health. In our thinking
          process in choosing the first edition’s theme we considered that in
          the pandemic context we let aside the other problems that we have in
          our world and only discussed pandemic related issues over and over
          again. We wanted to bring into light another big and old problem,
          meaning sexual health and the lack of knowledge people unfortunately
          have on this subject.
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  ...state
})

const mapDispatchToProps = (dispatch: any) => ({
  dispatch,
  ...bindActionCreators({ login }, dispatch)
})

export const HomePage2 = connect(mapStateToProps, mapDispatchToProps)(Home2)
// conecteaza pagina la store, deci avem access la store

function Waves() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // height="500"
      width="1920"
      viewBox="0 0 1902 1080"
      fill="none"
    >
      <g clip-path="url(#clip0_1_2)">
        {/* <path
          d="M0 726L35.2662 725C70.7306 724 141.263 722 211.598 728.4C281.932 734.6 352.068 749.4 422.403 750.4C492.737 751.4 563.269 738.6 634 740.4C704.731 742 775.263 758 845.597 764.6C915.932 771.4 986.068 768.6 1056.4 769.4C1126.74 770 1197.27 774 1268 772C1338.73 770 1409.26 762 1479.6 751.4C1549.93 740.6 1620.07 727.4 1690.4 719.6C1760.74 712 1831.27 710 1866.73 709L1902 708V1082H1866.73C1831.27 1082 1760.74 1082 1690.4 1082C1620.07 1082 1549.93 1082 1479.6 1082C1409.26 1082 1338.73 1082 1268 1082C1197.27 1082 1126.74 1082 1056.4 1082C986.068 1082 915.932 1082 845.597 1082C775.263 1082 704.731 1082 634 1082C563.269 1082 492.737 1082 422.403 1082C352.068 1082 281.932 1082 211.598 1082C141.263 1082 70.7306 1082 35.2662 1082H0V726Z"
          fill="#69B4FA"
          fill-opacity="0.2"
        /> */}
        {/* <path
          d="M0 834L35.2662 835.4C70.7306 836.6 141.263 839.4 211.598 836.4C281.932 833.4 352.068 824.6 422.403 815.4C492.737 806 563.269 796 634 799C704.731 802 775.263 818 845.597 828C915.932 838 986.068 842 1056.4 841C1126.74 840 1197.27 834 1268 831.4C1338.73 828.6 1409.26 829.4 1479.6 824C1549.93 818.6 1620.07 807.4 1690.4 805C1760.74 802.6 1831.27 809.4 1866.73 812.6L1902 816V1082H1866.73C1831.27 1082 1760.74 1082 1690.4 1082C1620.07 1082 1549.93 1082 1479.6 1082C1409.26 1082 1338.73 1082 1268 1082C1197.27 1082 1126.74 1082 1056.4 1082C986.068 1082 915.932 1082 845.597 1082C775.263 1082 704.731 1082 634 1082C563.269 1082 492.737 1082 422.403 1082C352.068 1082 281.932 1082 211.598 1082C141.263 1082 70.7306 1082 35.2662 1082H0V834Z"
          fill="#57A9ED"
          fill-opacity="0.3"
        /> */}
        <path
          d="M0 844L35.2662 849C70.7306 854 141.263 864 211.598 869C281.932 874 352.068 874 422.403 874C492.737 874 563.269 874 634 869.6C704.731 865.4 775.263 856.6 845.597 855.6C915.932 854.6 986.068 861.4 1056.4 863C1126.74 864.6 1197.27 861.4 1268 863.6C1338.73 866 1409.26 874 1479.6 871.6C1549.93 869.4 1620.07 856.6 1690.4 859.6C1760.74 862.6 1831.27 881.4 1866.73 890.6L1902 900V1082H1866.73C1831.27 1082 1760.74 1082 1690.4 1082C1620.07 1082 1549.93 1082 1479.6 1082C1409.26 1082 1338.73 1082 1268 1082C1197.27 1082 1126.74 1082 1056.4 1082C986.068 1082 915.932 1082 845.597 1082C775.263 1082 704.731 1082 634 1082C563.269 1082 492.737 1082 422.403 1082C352.068 1082 281.932 1082 211.598 1082C141.263 1082 70.7306 1082 35.2662 1082H0V844Z"
          fill="#439EE0"
          fill-opacity="0.25"
        />
        <path
          d="M0 918L35.2662 921.6C70.7306 925.4 141.263 932.6 211.598 939C281.932 945.4 352.068 950.6 422.403 952C492.737 953.4 563.269 950.6 634 949C704.731 947.4 775.263 946.6 845.597 949.6C915.932 952.6 986.068 959.4 1056.4 957C1126.74 954.6 1197.27 943.4 1268 934.6C1338.73 926 1409.26 920 1479.6 918C1549.93 916 1620.07 918 1690.4 925.6C1760.74 933.4 1831.27 946.6 1866.73 953.4L1902 960V1082H1866.73C1831.27 1082 1760.74 1082 1690.4 1082C1620.07 1082 1549.93 1082 1479.6 1082C1409.26 1082 1338.73 1082 1268 1082C1197.27 1082 1126.74 1082 1056.4 1082C986.068 1082 915.932 1082 845.597 1082C775.263 1082 704.731 1082 634 1082C563.269 1082 492.737 1082 422.403 1082C352.068 1082 281.932 1082 211.598 1082C141.263 1082 70.7306 1082 35.2662 1082H0V918Z"
          fill="#2C93D3"
          fill-opacity="0.6"
        />
        <path
          d="M0 1014L35.2662 1013.6C70.7306 1013.4 141.263 1012.6 211.598 1010C281.932 1007.4 352.068 1002.6 422.403 1001.6C492.737 1000.6 563.269 1003.4 634 1008.4C704.731 1013.4 775.263 1020.6 845.597 1025.4C915.932 1030 986.068 1032 1056.4 1031.4C1126.74 1030.6 1197.27 1027.4 1268 1022.6C1338.73 1018 1409.26 1012 1479.6 1011.6C1549.93 1011.4 1620.07 1016.6 1690.4 1020C1760.74 1023.4 1831.27 1024.6 1866.73 1025.4L1902 1026V1082H1866.73C1831.27 1082 1760.74 1082 1690.4 1082C1620.07 1082 1549.93 1082 1479.6 1082C1409.26 1082 1338.73 1082 1268 1082C1197.27 1082 1126.74 1082 1056.4 1082C986.068 1082 915.932 1082 845.597 1082C775.263 1082 704.731 1082 634 1082C563.269 1082 492.737 1082 422.403 1082C352.068 1082 281.932 1082 211.598 1082C141.263 1082 70.7306 1082 35.2662 1082H0V1014Z"
          fill="#0088C6"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_2">
          <rect width="1902" height="1080" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
