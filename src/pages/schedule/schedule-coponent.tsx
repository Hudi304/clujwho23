import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { CustomPaper } from '../../components/custom-paper/paper-component'
import { NavBarComponent } from '../login/components/navbar/navbar-component'
import { Bubble } from './schedule-bubble'
import SwipeableViews from 'react-swipeable-views'

import './schedule.scss'
import {
  bubbleOptionsArray,
  BUBLE_COLORS,
  hoursArray,
  activityArray,
  hoursArraySaturday,
  bubbleOptionsArraySaturday,
  activityArraySaturday,
  hoursArraySunday,
  bubbleOptionsArraySunday,
  activityArraySunday,
  fridayBubbleOptions
} from './scheduler-constants'
/* eslint-disable */

export function Schedule(props: any): JSX.Element {
  const [ref, inView] = useInView({
    threshold: 0.5
  })

  const [bubbleOpt, setBubbleOpt] = useState(bubbleOptionsArray)

  const now = new Date()

  const [timeLeft, setTimeLeft] = useState(true)

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

  useEffect(() => {
    const timer = setTimeout(() => {
      // const timeLeft = false
      console.log('dsadas')
      const bubOptnew = bubbleOpt

      setBubbleOpt(fridayBubbleOptions(bubOptnew))
      setTimeLeft(!timeLeft)
    }, 1000)
    return () => clearTimeout(timer)
  })

  function ScheduleComponent() {
    return (
      <div className="scheduleComponentContainer ">
        <div className="scheduleOxGrid ">
          <p className="scheduleTitle ">Friday</p>
          <p></p>
          <p></p>

          <div className="scheduleOyHourGrid ">
            {hoursArray.map((hour, index) => {
              return <div className="scheduleHourGridItem ">{hour}</div>
            })}
          </div>
          <div className="scheduleOyBubbleGrid ">
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

  function ScheduleComponentMobileFriday() {
    return (
      <div className="scheduleComponentContainer ">
        <div className="scheduleOxGrid ">
          <p className="scheduleTitle ">Friday</p>
          <div className="scheduleCardBodyContainer">
            <div className="schedulerBodyOxGrid">
              <div className="scheduleOyHourGrid ">
                {hoursArray.map((hour, index) => {
                  return <div className="scheduleHourGridItem ">{hour}</div>
                })}
              </div>

              <div className="scheduleOyBubbleGrid ">
                {bubbleOpt.map((bubbleOpt, index) => {
                  return (
                    <div key={index * 5} className="scheduleBubbleGridItem ">
                      <Bubble
                        key={index * 17}
                        connectTop={bubbleOpt.connectTop}
                        connectBotomn={bubbleOpt.connectBotomn}
                        colorHashT={bubbleOpt.colorHashT}
                        colorHashC={bubbleOpt.colorHashC}
                        colorHashB={bubbleOpt.colorHashB}
                        width="7vh"
                        height="7vh"
                      ></Bubble>
                    </div>
                  )
                })}
              </div>

              <div className="scheduleOyActivityGrid">
                {activityArray.map((activity, index) => {
                  return (
                    <div className="scheduleActivityGridItem">{activity}</div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function ScheduleComponentMobileSaturdy() {
    return (
      <div className="scheduleComponentContainer ">
        <div className="scheduleOxGrid ">
          <p className="scheduleTitle ">Saturday</p>
          <div className="scheduleCardBodyContainerSaturday">
            <div className="schedulerBodyOxGridSaturday">
              <div className="scheduleOyHourGridSaturday ">
                {hoursArraySaturday.map((hour, index) => {
                  return (
                    <div className="scheduleHourGridItemSaturday ">{hour}</div>
                  )
                })}
              </div>

              <div className="scheduleOyBubbleGridSaturday ">
                {bubbleOptionsArraySaturday.map((bubbleOpt, index) => {
                  return (
                    <div
                      key={index * 5}
                      className="scheduleBubbleGridItemSaturday "
                    >
                      <Bubble
                        key={index * 17}
                        connectTop={bubbleOpt.connectTop}
                        connectBotomn={bubbleOpt.connectBotomn}
                        colorHashT={bubbleOpt.colorHashT}
                        colorHashC={bubbleOpt.colorHashC}
                        colorHashB={bubbleOpt.colorHashB}
                        width="6vh"
                        height="6vh"
                      ></Bubble>
                    </div>
                  )
                })}
              </div>

              <div className="scheduleOyActivityGridSaturday">
                {activityArraySaturday.map((activity, index) => {
                  return (
                    <div className="scheduleActivityGridItemSaturday">
                      {activity}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function ScheduleComponentMobileSunday() {
    return (
      <div className="scheduleComponentContainer ">
        <div className="scheduleOxGrid ">
          <p className="scheduleTitle ">Sunday</p>
          <div className="scheduleCardBodyContainerSaturday">
            <div className="schedulerBodyOxGridSaturday">
              <div className="scheduleOyHourGridSaturday ">
                {hoursArraySunday.map((hour, index) => {
                  return (
                    <div className="scheduleHourGridItemSaturday ">{hour}</div>
                  )
                })}
              </div>

              <div className="scheduleOyBubbleGridSaturday ">
                {bubbleOptionsArraySunday.map((bubbleOpt, index) => {
                  return (
                    <div
                      key={index * 5}
                      className="scheduleBubbleGridItemSaturday "
                    >
                      <Bubble
                        key={index * 17}
                        connectTop={bubbleOpt.connectTop}
                        connectBotomn={bubbleOpt.connectBotomn}
                        colorHashT={bubbleOpt.colorHashT}
                        colorHashC={bubbleOpt.colorHashC}
                        colorHashB={bubbleOpt.colorHashB}
                        width="6vh"
                        height="6vh"
                      ></Bubble>
                    </div>
                  )
                })}
              </div>

              <div className="scheduleOyActivityGridSaturday">
                {activityArraySunday.map((activity, index) => {
                  if (activity != '') {
                    return (
                      <div className="scheduleActivityGridItemSaturday">
                        {activity}
                      </div>
                    )
                  } else {
                    return (
                      <div className="scheduleActivityGridItemSaturdayNoBorder">
                        {activity}
                      </div>
                    )
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (mobile) {
    return (
      <div>
        <div className="schedulePageContainer ">
          <div className="schedulePageGridContainer">
            <SwipeableViews
              className="swipeContainer"
              containerStyle={{ width: '100vw' }}
              slideStyle={{
                overflow: 'visible',
                width: '100vw'
              }}
              hysteresis={0.3}
              index={0}
              resistance
              enableMouseEvents
              springConfig={{
                duration: '0.3s',
                easeFunction: 'ease',
                delay: '0s'
              }}
            >
              <ScheduleComponentMobileFriday />
              <ScheduleComponentMobileSaturdy />
              <ScheduleComponentMobileSunday />
            </SwipeableViews>
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

        <div className={`nav-bar-container`}>
          <NavBarComponent inView={true} mobile={mobile} />
        </div>
      </div>
    )
  }
}
