import { useInView } from 'react-intersection-observer'
import { NavBarComponent } from '../login/components/navbar/navbar-component'

import './appy-now.scss'
import { CustomPaper } from '../../components/custom-paper/paper-component'
import { useEffect, useState } from 'react'
/* eslint-disable */

function monthToDays(month: number, year: number): number {
  switch (month) {
    case 0:
      return 31
    case 1:
      if (year % 4 == 0) {
        return 29
      } else {
        return 28
      }
    case 2:
      return 31
    case 3:
      return 30
    case 4:
      return 31
    case 5:
      return 30
    case 6:
      return 31
    case 7:
      return 31
    case 8:
      return 30
    case 9:
      return 31
    case 10:
      return 30
    case 11:
      return 31
    default:
      return 0
  }
}

function getDayOfYear(date: Date) {
  let nrOfDays: number = 0
  const year = date.getFullYear()
  for (let i = 0; i < date.getMonth(); i++) {
    nrOfDays += monthToDays(i, year)
  }

  return nrOfDays + date.getDate()
}

function nrOfDaysBetween(date1: Date, date2: Date) {
  const date1DayNr = getDayOfYear(date1)
  const date2DayNr = getDayOfYear(date2)
  return date2DayNr - date1DayNr
}

export function ApplyNow(props: any): JSX.Element {
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

  const date = new Date()
  const registrationStartDate = new Date()
  registrationStartDate.setMonth(11)
  registrationStartDate.setDate(15)
  registrationStartDate.setFullYear(2021)
  registrationStartDate.setHours(0)
  registrationStartDate.setMinutes(0)
  registrationStartDate.setSeconds(0)

  const [timeLeft, setTimeLeft] = useState({
    seconds: 59 - date.getSeconds(),
    minutes: 59 - date.getMinutes(),
    hours: 23 - date.getHours(),
    days: nrOfDaysBetween(date, registrationStartDate) % 7,
    weeks: (nrOfDaysBetween(date, registrationStartDate) / 7) | 0
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      const timeLeft = {
        seconds: 60 - date.getSeconds(),
        minutes: 60 - date.getMinutes(),
        hours: 24 - date.getHours(),
        days: nrOfDaysBetween(date, registrationStartDate) % 7,
        weeks: (nrOfDaysBetween(date, registrationStartDate) / 7) | 0
      }
      console.log('dsadas')

      setTimeLeft(timeLeft)
    }, 1000)
    return () => clearTimeout(timer)
  })

  if (mobile) {
    return (
      <div>
        <div className="applyNowPageGridContainerMobile OxCenter backgroud-image">
          <div className="applyNowPageGridMobile">
            <p className="titleContainerMobile xOyCenter">
              The experience of your studenthood
            </p>
            <p className="titleContainerMobile xOyCenter">starts in:</p>
            <div className="countDownContainerMobile xOyCenter">
              <div className="counterContainerMobile">
                <div className="cardContainerMobile">
                  <div className="counterCardMobile">{`${timeLeft.weeks}`}</div>
                  <p className="cardLabelMobile xOyCenter">Weeks</p>
                </div>
                <div className="xOyCenter pointsMobile "> : </div>

                <div className="cardContainerMobile">
                  <div className="counterCardMobile">{`${timeLeft.days}`}</div>
                  <p className="cardLabelMobile xOyCenter">Days</p>
                </div>
                <div className="xOyCenter pointsMobile "> : </div>
                <div className="cardContainerMobile">
                  <div className="counterCardMobile">{`${timeLeft.hours}`}</div>
                  <p className="cardLabelMobile xOyCenter">Hours</p>
                </div>
                <div className="xOyCenter pointsMobile "> : </div>
                <div className="cardContainerMobile">
                  <div className="counterCardMobile">{`${timeLeft.minutes}`}</div>
                  <p className="cardLabelMobile xOyCenter">Minutes</p>
                </div>
                <div className="xOyCenter pointsMobile "> : </div>
                <div className="cardContainerMobile">
                  <div className="counterCardMobile">{`${timeLeft.seconds}`}</div>
                  <p className="cardLabelMobile xOyCenter">Seconds</p>
                </div>
              </div>
            </div>
            <div className="paperContainerMobile OxCenter">
              <CustomPaper width={'90vw'} height={'80vh'}>
                <div className="iframeContainer OxCenter">
            {/* <iframe src="https://www.w3schools.com" title="Iframe Example"></iframe> */}
            ... insert formular here ...
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
  } else {
    return (
      <div>
        <div className="applyNowPageGridContainer OxCenter backgroud-image debug">
          <div className="applyNowPageGrid debug">
            <p className="titleContainer xOyCenter">
              The experience of your studenthood starts in:{' '}
            </p>
            <div className="countDownContainer xOyCenter">
              <div className="counterContainer">
                <div className="cardContainerMobile">
                  <div className="counterCard">{`${timeLeft.weeks}`}</div>
                  <p className="cardLabel xOyCenter">Weeks</p>
                </div>
                <div className="xOyCenter points "> : </div>

                <div className="cardContainerMobile">
                  <div className="counterCardMobile">{`${timeLeft.days}`}</div>
                  <p className="cardLabel xOyCenter">Days</p>
                </div>
                <div className="xOyCenter points "> : </div>
                <div className="cardContainerMobile">
                  <div className="counterCardMobile">{`${timeLeft.hours}`}</div>
                  <p className="cardLabel xOyCenter">Hours</p>
                </div>
                <div className="xOyCenter points "> : </div>
                <div className="cardContainerMobile">
                  <div className="counterCardMobile">{`${timeLeft.minutes}`}</div>
                  <p className="cardLabel xOyCenter">Minutes</p>
                </div>
                <div className="xOyCenter points "> : </div>
                <div className="cardContainerMobile">
                  <div className="counterCardMobile">{`${timeLeft.seconds}`}</div>
                  <p className="cardLabel xOyCenter">Seconds</p>
                </div>
              </div>
            </div>

            <div className="paperContainer OxCenter">
              <CustomPaper width={'1220px'} height={'80vh'}>
                <div className="iframeContainer OxCenter">
                  {/* <iframe src="https://www.w3schools.com" title="Iframe Example"></iframe> */}
                  ... insert formular here ...
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
