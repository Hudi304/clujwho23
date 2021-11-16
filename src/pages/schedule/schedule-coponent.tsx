import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { CustomPaper } from '../../components/custom-paper/paper-component'
import { NavBarComponent } from '../login/components/navbar/navbar-component'
import { Bubble } from './schedule-bubble'

import './schedule.scss'
/* eslint-disable */

const BUBLE_COLORS = {
  gray: '#D3D3D3',
  green: '#00ff00 '
}

const bubbleOptionsArray = [
  {
    connectTop: false,
    connectBotomn: true,
    colorHashT: '#D3D3D3',
    colorHashC: '#D3D3D3',
    colorHashB: '#D3D3D3'
  },
  {
    connectTop: true,
    connectBotomn: true,
    colorHashT: '#D3D3D3',
    colorHashC: '#D3D3D3',
    colorHashB: '#D3D3D3'
  },
  {
    connectTop: true,
    connectBotomn: true,
    colorHashT: '#D3D3D3',
    colorHashC: '#D3D3D3',
    colorHashB: '#D3D3D3'
  },
  {
    connectTop: true,
    connectBotomn: true,
    colorHashT: '#D3D3D3',
    colorHashC: '#D3D3D3',
    colorHashB: '#D3D3D3'
  },
  {
    connectTop: true,
    connectBotomn: true,
    colorHashT: '#D3D3D3',
    colorHashC: '#D3D3D3',
    colorHashB: '#D3D3D3'
  },
  {
    connectTop: true,
    connectBotomn: true,
    colorHashT: '#D3D3D3',
    colorHashC: '#D3D3D3',
    colorHashB: '#D3D3D3'
  },
  {
    connectTop: true,
    connectBotomn: true,
    colorHashT: '#D3D3D3',
    colorHashC: '#D3D3D3',
    colorHashB: '#D3D3D3'
  },
  {
    connectTop: true,
    connectBotomn: true,
    colorHashT: '#D3D3D3',
    colorHashC: '#D3D3D3',
    colorHashB: '#D3D3D3'
  },
  {
    connectTop: true,
    connectBotomn: false,
    colorHashT: '#D3D3D3',
    colorHashC: '#D3D3D3',
    colorHashB: '#D3D3D3'
  }
]

const hoursArray = ['12:00', '13:00', '14:00', '15:30', '16:00', '16:45', '17:00', '19:00', '20:30', '']
const activityArray = [
  'Registration',
  'Opening Ceremony',
  'First regional session',
  'Coffee break',
  'First speaker session',
  'Q&A',
  'Second regional session',
  'Free Time',
  'Party Party Fun Fun '
]

export function Schedule(props: any): JSX.Element {
  const [ref, inView] = useInView({
    threshold: 0.5
  })

  const [bubbleOpt, setBubbleOpt] = useState(bubbleOptionsArray)

  const now = new Date()

  const [timeLeft, setTimeLeft] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      // const timeLeft = false
      console.log('dsadas')
      const bubOptnew = bubbleOpt

      if (now.getHours() >= 12) {
        bubOptnew[0].colorHashC = BUBLE_COLORS.green
      }

      if (now.getHours() >= 13) {
        bubOptnew[0].colorHashB = BUBLE_COLORS.green
        bubOptnew[1].colorHashT = BUBLE_COLORS.green
        bubOptnew[1].colorHashC = BUBLE_COLORS.green
      }

      if (now.getHours() >= 14) {
        bubOptnew[1].colorHashB = BUBLE_COLORS.green
        bubOptnew[2].colorHashT = BUBLE_COLORS.green
        bubOptnew[2].colorHashC = BUBLE_COLORS.green
      }

      if ((now.getHours() == 15 && now.getMinutes() >= 30) || now.getHours() > 15) {
        bubOptnew[2].colorHashB = BUBLE_COLORS.green
        bubOptnew[3].colorHashT = BUBLE_COLORS.green
        bubOptnew[3].colorHashC = BUBLE_COLORS.green
      }

      if (now.getHours() >= 16 && now.getMinutes() >= 4) {
        bubOptnew[3].colorHashB = BUBLE_COLORS.green
        bubOptnew[4].colorHashT = BUBLE_COLORS.green
        bubOptnew[4].colorHashC = BUBLE_COLORS.green
      }

      if ((now.getHours() == 16 && now.getMinutes() >= 45) || now.getHours() > 16) {
        bubOptnew[4].colorHashB = BUBLE_COLORS.green
        bubOptnew[5].colorHashT = BUBLE_COLORS.green
        bubOptnew[5].colorHashC = BUBLE_COLORS.green
      }

      if (now.getHours() >= 17) {
        bubOptnew[5].colorHashB = BUBLE_COLORS.green
        bubOptnew[6].colorHashT = BUBLE_COLORS.green
        bubOptnew[6].colorHashC = BUBLE_COLORS.green
      }

      if (now.getHours() >= 19) {
        bubOptnew[6].colorHashB = BUBLE_COLORS.green
        bubOptnew[7].colorHashT = BUBLE_COLORS.green
        bubOptnew[7].colorHashC = BUBLE_COLORS.green
      }

      if ((now.getHours() == 20 && now.getMinutes() >= 30) || now.getHours() > 20) {
        bubOptnew[7].colorHashB = BUBLE_COLORS.green
        bubOptnew[8].colorHashT = BUBLE_COLORS.green
        bubOptnew[8].colorHashC = BUBLE_COLORS.green
      }

      setBubbleOpt(bubOptnew)
      setTimeLeft(!timeLeft)
    }, 1000)
    return () => clearTimeout(timer)
  })

  function ScheduleComponent() {
    return (
      <div className="scheduleComponentContainer">
        <div className="scheduleOxGrid">
          <p className="scheduleTitle">Friday</p>
          <p></p>
          <p></p>

          <div className="scheduleOyHourGrid">
            {hoursArray.map((hour, index) => {
              return <div className="scheduleHourGridItem">{hour}</div>
            })}
          </div>
          <div className="scheduleOyBubbleGrid">
            {bubbleOpt.map((bubbleOpt, index) => {
              return (
                <div key={index * 5} className="scheduleBubbleGridItem">
                  <Bubble
                    key={index * 17}
                    connectTop={bubbleOpt.connectTop}
                    connectBotomn={bubbleOpt.connectBotomn}
                    colorHashT={bubbleOpt.colorHashT}
                    colorHashC={bubbleOpt.colorHashC}
                    colorHashB={bubbleOpt.colorHashB}
                    width="5vw"
                    height="5vw"
                  ></Bubble>
                </div>
              )
            })}
          </div>
          <div className="scheduleOyActivityGrid">
            {activityArray.map((activity, index) => {
              return <div className="scheduleActivityGridItem">{activity}</div>
            })}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="schedulePageContainer backgroud-image debug">
        <div className="schedulePageGridContainer">
          <div className="scheduleGridItem">
            <CustomPaper width={'90vw'} height={'auto'}>
              <ScheduleComponent></ScheduleComponent>
            </CustomPaper>
          </div>

          <div className="scheduleGridItem">dsadsadsa</div>
        </div>
      </div>

      <NavBarComponent inView={inView} />
    </div>
  )
}
