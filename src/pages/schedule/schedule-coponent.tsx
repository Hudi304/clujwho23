import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { CustomPaper } from '../../components/custom-paper/paper-component'
import { NavBarComponent } from '../login/components/navbar/navbar-component'
import { Bubble } from './schedule-bubble'
import SwipeableViews from 'react-swipeable-views'

import './schedule.scss'
import {
  hoursArraySaturday,
  activityArraySaturday,
  hoursArraySunday,
  activityArraySunday,
  activityArrayFiday,
  bubbleOptionsArrayFriday,
  hoursArrayFriday,
  getFridayBubbleOptions,
  getSaturdayBubbleOptions,
  getSundayBubbleOptions
} from './scheduler-constants'
/* eslint-disable */

export function Schedule(props: any): JSX.Element {
  const now = new Date()
  const [fridayBubbleOpt, setFridayBubbleOpt] = useState(
    getFridayBubbleOptions(now)
  )
  const [saturdayBubbleOpt, setSaturdayBubbleOpt] = useState(
    getSaturdayBubbleOptions(now)
  )
  const [sundayBubbleOpt, setSundayBubbleOpt] = useState(
    getSundayBubbleOptions(now)
  )
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
      const now = new Date()
      if (now.getMinutes() % 15 == 0 && now.getSeconds() % 10 == 0) {
        console.log('dsadas')
        setSundayBubbleOpt(getSundayBubbleOptions(now))
        setFridayBubbleOpt(getFridayBubbleOptions(now))
        setSaturdayBubbleOpt(getSaturdayBubbleOptions(now))
      }

      setTimeLeft(!timeLeft)
    }, 1000)
    return () => clearTimeout(timer)
  })

  function ScheduleComponentWeb() {
    return (
      <div className="scheduleComponentContainer ">
        <div className="scheduleOxGrid ">
          <p className="scheduleTitle ">Friday</p>
          <p></p>
          <p></p>

          <div className="scheduleOyHourGrid ">
            {hoursArrayFriday.map((hour, index) => {
              return <div  key={index * 13} className="scheduleHourGridItem ">{hour}</div>
            })}
          </div>
          <div className="scheduleOyBubbleGrid ">
            {bubbleOptionsArrayFriday.map((bubbleOpt, index) => {
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
            {activityArrayFiday.map((activity, index) => {
              return (
                <div key={index * 19} className="scheduleActivityGridItem">
                  {activity}
                </div>
              )
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
                {hoursArrayFriday.map((hour, index) => {
                  return (
                    <div
                      key={'FridayHour' + index}
                      className="scheduleHourGridItem "
                    >
                      {hour}
                    </div>
                  )
                })}
              </div>

              <div className="scheduleOyBubbleGrid ">
                {fridayBubbleOpt.map((bubbleOpt, index) => {
                  return (
                    <div
                      key={'FridayBubble' + index}
                      className="scheduleBubbleGridItem "
                    >
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
                {activityArrayFiday.map((activity, index) => {
                  return (
                    <div
                      key={'FridayActivity' + index}
                      className="scheduleActivityGridItem"
                    >
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
                    <div
                      key={'SaturdayHour' + index}
                      className="scheduleHourGridItemSaturday "
                    >
                      {hour}
                    </div>
                  )
                })}
              </div>

              <div className="scheduleOyBubbleGridSaturday ">
                {saturdayBubbleOpt.map((bubbleOpt, index) => {
                  return (
                    <div
                      key={'SaturdayBubble' + index}
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
                    <div
                      key={'SaturdayActivity' + index}
                      className="scheduleActivityGridItemSaturday"
                    >
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
                    <div
                      key={'SundayHour' + index}
                      className="scheduleHourGridItemSaturday "
                    >
                      {hour}
                    </div>
                  )
                })}
              </div>

              <div className="scheduleOyBubbleGridSaturday ">
                {sundayBubbleOpt.map((bubbleOpt, index) => {
                  return (
                    <div
                      key={'SundayBubble' + index}
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
                      <div
                        key={'SundayActivity' + index}
                        className="scheduleActivityGridItemSaturday"
                      >
                        {activity}
                      </div>
                    )
                  } else {
                    return (
                      <div
                        key={'SundayActivity' + index}
                        className="scheduleActivityGridItemSaturdayNoBorder"
                      >
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
              index={1}
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
          <NavBarComponent inView={true} mobile={mobile} />
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
                <ScheduleComponentWeb />
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
