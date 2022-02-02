import { useInView } from 'react-intersection-observer'
import { NavBarComponent } from '../login/components/navbar/navbar-component'

import './appy-now.scss'
import { CustomPaper } from '../../components/custom-paper/paper-component'
import { useEffect, useState } from 'react'
import { Timer } from './timer/timer'
import { Helmet } from 'react-helmet'
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

  const [chair, setChair] = useState(false)
  const [delegate, setDelegate] = useState(false)

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

  const ChairRegEndData = new Date()
  ChairRegEndData.setMonth(1)
  ChairRegEndData.setDate(13)
  ChairRegEndData.setFullYear(2022)
  ChairRegEndData.setHours(0)
  ChairRegEndData.setMinutes(0)
  ChairRegEndData.setSeconds(0)

  const DelegatesRegEndData = new Date()
  DelegatesRegEndData.setMonth(1)
  DelegatesRegEndData.setDate(20)
  DelegatesRegEndData.setFullYear(2022)
  DelegatesRegEndData.setHours(0)
  DelegatesRegEndData.setMinutes(0)
  DelegatesRegEndData.setSeconds(0)

  const CujWhoStart = new Date()
  CujWhoStart.setMonth(2)
  CujWhoStart.setDate(4)
  CujWhoStart.setFullYear(2022)
  CujWhoStart.setHours(0)
  CujWhoStart.setMinutes(0)
  CujWhoStart.setSeconds(0)

  const [timeLeft, setTimeLeft] = useState({
    seconds: 59 - date.getSeconds(),
    minutes: 59 - date.getMinutes(),
    hours: 23 - date.getHours(),
    days: Math.abs(nrOfDaysBetween(date, CujWhoStart) % 7),
    weeks: Math.abs((nrOfDaysBetween(date, CujWhoStart) / 7) | 0)
  })

  const [timeLeftChair, setTimeLeftChair] = useState({
    seconds: 59 - date.getSeconds(),
    minutes: 59 - date.getMinutes(),
    hours: 23 - date.getHours(),
    days: Math.abs(nrOfDaysBetween(date, ChairRegEndData) % 7),
    weeks: Math.abs((nrOfDaysBetween(date, ChairRegEndData) / 7) | 0)
  })

  const [timeLeftDel, setTimeLeftDel] = useState({
    seconds: 59 - date.getSeconds(),
    minutes: 59 - date.getMinutes(),
    hours: 23 - date.getHours(),
    days: Math.abs(nrOfDaysBetween(date, DelegatesRegEndData) % 7),
    weeks: Math.abs((nrOfDaysBetween(date, DelegatesRegEndData) / 7) | 0)
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      const timeLeft = {
        seconds: 60 - date.getSeconds(),
        minutes: 59 - date.getMinutes(),
        hours: 23 - date.getHours(),
        days: Math.abs(nrOfDaysBetween(date, CujWhoStart) % 7),
        weeks: Math.abs((nrOfDaysBetween(date, CujWhoStart) / 7) | 0)
      }

      const timeLeftChair = {
        seconds: 60 - date.getSeconds(),
        minutes: 59 - date.getMinutes(),
        hours: 23 - date.getHours(),
        days: Math.abs(nrOfDaysBetween(date, ChairRegEndData) % 7),
        weeks: Math.abs((nrOfDaysBetween(date, ChairRegEndData) / 7) | 0)
      }

      const timeLeftDel = {
        seconds: 60 - date.getSeconds(),
        minutes: 59 - date.getMinutes(),
        hours: 23 - date.getHours(),
        days: Math.abs(nrOfDaysBetween(date, DelegatesRegEndData) % 7),
        weeks: Math.abs((nrOfDaysBetween(date, DelegatesRegEndData) / 7) | 0)
      }

      setTimeLeft(timeLeft)
      setTimeLeftChair(timeLeftChair)
      setTimeLeftDel(timeLeftDel)
    }, 1000)
    return () => clearTimeout(timer)
  })

  if (mobile) {
    return (
      <div>
        <div className="apply-now-container OxCenter">
          <div className="apply-now-grid">
            {!chair && !delegate ? (
              <div>
                <p className="titleContainerMobile xOyCenter">
                  The experience of your studenthood
                </p>
                <p className="titleContainerMobile xOyCenter">starts in:</p>
              </div>
            ) : null}

            {chair ? (
              <>
                <p className="titleContainerMobile xOyCenter">
                  Chair Registration ends in :
                </p>
              </>
            ) : null}

            {delegate ? (
              <>
                <p className="titleContainerMobile xOyCenter">
                  Delegates Registration ends in :
                </p>
              </>
            ) : null}

            {!chair && !delegate ? (
              <div>
                <Timer endDate={CujWhoStart} />
              </div>
            ) : null}

            {chair ? (
              <div>
                <Timer endDate={ChairRegEndData} />
              </div>
            ) : null}

            {delegate ? (
              <div>
                <Timer endDate={DelegatesRegEndData} />
              </div>
            ) : null}

            <div className="explanation-container">
              <div className="center-gray">
                The fee for registering as a delegate is 30€,
              </div>

              <div className="center-gray">
                it includes: coffee breaks, lunch and social events.
              </div>
              <div className="center-gray">
                You will receive the payment info in your acceptance email.
              </div>

              <div className="center-gray">* No accomodation is provided.</div>
            </div>

            <div className="button-bar">
              <button
                className="form-btn"
                onClick={() => {
                  setChair(true)
                  setDelegate(false)
                }}
              >
                Chair
              </button>
              <button
                className="form-btn"
                onClick={() => {
                  setChair(false)
                  setDelegate(true)
                }}
              >
                Delegate
              </button>
            </div>

            {chair ? (
              <div>
                <div className="container-form-mobile OxCenter">
                  <div className="iframe-container-mobile OxCenter">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLScjPbjWOtO4-cPVf-83h4NuuNeGqZ4LmOl393lEC-J79c1f-Q/viewform?embedded=true"
                      width="100%"
                      className="iframe"
                    >
                      Loading…
                    </iframe>
                  </div>
                </div>
              </div>
            ) : null}

            {delegate ? (
              <div>
                <div className="container-form-mobile OxCenter">
                  <div className="iframe-container-mobile OxCenter">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLScj6xGbjMMttGS2VwbbEkUZ9tTWLpOIRFJTexjN1k9jhFtD7A/viewform?embedded=true"
                      width="100%"
                      className="iframe"
                    >
                      Loading…
                    </iframe>
                  </div>
                </div>
              </div>
            ) : null}
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
        <Helmet>
          <title>Apply Now | ClujWHO</title>
          <meta
            name="description"
            content="Do you want to be a part of the ClujWHO Model? Apply now to join us to chair or delegate. For any questions please contact us today at clujwho@osmcluj.ro."
          />
        </Helmet>
        <div className="applyNowPageGridContainer OxCenter backgroud-image ">
          <div className="applyNowPageGrid ">

            {!chair && !delegate ? (
              <>
                <p className="titleContainer xOyCenter">
                  The experience of your studenthood starts in:
                </p>
              </>
            ) : null}

            {chair ? (
              <>
                <p className="titleContainer xOyCenter">
                  Chair Registration ends in:
                </p>
              </>
            ) : null}

            {delegate ? (
              <>
                <p className="titleContainer xOyCenter">
                  Delegates Registration ends in:
                </p>
              </>
            ) : null}

            {!chair && !delegate ? (
              <div className="countDownContainer xOyCenter">
                <div className="counterContainer">
                  <div className="cardContainer">
                    <div className="counterCard">{`${timeLeft.weeks}`}</div>
                    <p className="cardLabel xOyCenter">Weeks</p>
                  </div>
                  <div className="xOyCenter points "> : </div>

                  <div className="cardContainer">
                    <div className="counterCard">{`${timeLeft.days}`}</div>
                    <p className="cardLabel xOyCenter">Days</p>
                  </div>
                  <div className="xOyCenter points "> : </div>
                  <div className="cardContainer">
                    <div className="counterCard">{`${timeLeft.hours}`}</div>
                    <p className="cardLabel xOyCenter">Hours</p>
                  </div>
                  <div className="xOyCenter points "> : </div>
                  <div className="cardContainer">
                    <div className="counterCard">{`${timeLeft.minutes}`}</div>
                    <p className="cardLabel xOyCenter">Minutes</p>
                  </div>
                  <div className="xOyCenter points "> : </div>
                  <div className="cardContainer">
                    <div className="counterCard">{`${timeLeft.seconds}`}</div>
                    <p className="cardLabel xOyCenter">Seconds</p>
                  </div>
                </div>
              </div>
            ) : null}

            {delegate ? (
              <div>
                <div className="countDownContainer xOyCenter">
                  <div className="counterContainer">
                    <div className="cardContainer">
                      <div className="counterCard">{`${timeLeftDel.weeks}`}</div>
                      <p className="cardLabel xOyCenter">Weeks</p>
                    </div>
                    <div className="xOyCenter points "> : </div>

                    <div className="cardContainer">
                      <div className="counterCard">{`${timeLeftDel.days}`}</div>
                      <p className="cardLabel xOyCenter">Days</p>
                    </div>
                    <div className="xOyCenter points "> : </div>
                    <div className="cardContainer">
                      <div className="counterCard">{`${timeLeftDel.hours}`}</div>
                      <p className="cardLabel xOyCenter">Hours</p>
                    </div>
                    <div className="xOyCenter points "> : </div>
                    <div className="cardContainer">
                      <div className="counterCard">{`${timeLeftDel.minutes}`}</div>
                      <p className="cardLabel xOyCenter">Minutes</p>
                    </div>
                    <div className="xOyCenter points "> : </div>
                    <div className="cardContainer">
                      <div className="counterCard">{`${timeLeftDel.seconds}`}</div>
                      <p className="cardLabel xOyCenter">Seconds</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {chair ? (
              <div>
                <div className="countDownContainer xOyCenter">
                  <div className="counterContainer">
                    <div className="cardContainer">
                      <div className="counterCard">{`${timeLeftChair.weeks}`}</div>
                      <p className="cardLabel xOyCenter">Weeks</p>
                    </div>
                    <div className="xOyCenter points "> : </div>

                    <div className="cardContainer">
                      <div className="counterCard">{`${timeLeftChair.days}`}</div>
                      <p className="cardLabel xOyCenter">Days</p>
                    </div>
                    <div className="xOyCenter points "> : </div>
                    <div className="cardContainer">
                      <div className="counterCard">{`${timeLeftChair.hours}`}</div>
                      <p className="cardLabel xOyCenter">Hours</p>
                    </div>
                    <div className="xOyCenter points "> : </div>
                    <div className="cardContainer">
                      <div className="counterCard">{`${timeLeftChair.minutes}`}</div>
                      <p className="cardLabel xOyCenter">Minutes</p>
                    </div>
                    <div className="xOyCenter points "> : </div>
                    <div className="cardContainer">
                      <div className="counterCard">{`${timeLeftChair.seconds}`}</div>
                      <p className="cardLabel xOyCenter">Seconds</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="explanation-container">
              <div className="center-gray">
                The fee for registering as a delegate is 30€, it includes:
                coffee breaks, lunch and social events.
              </div>
              <div className="center-gray">
                You will receive the payment info in your acceptance email.
              </div>

              <div className="center-gray">
                {' '}
                * No accomodation is provided.{' '}
              </div>
            </div>

            <div className="button-bar">
              <button
                className="form-btn"
                onClick={() => {
                  setChair(true)
                  setDelegate(false)
                }}
              >
                Chair
              </button>
              <button
                className="form-btn"
                onClick={() => {
                  setChair(false)
                  setDelegate(true)
                }}
              >
                Delegate
              </button>
            </div>

            <div className="paperContainer OxCenter">
              {/* <CustomPaper width={'80vw'} height={'80vh'}> */}
              <div className="iframeContainer OxCenter">
                {chair ? (
                  <div className="container-form-mobile OxCenter">
                    <div className="iframe-container-mobile OxCenter">
                      <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLScjPbjWOtO4-cPVf-83h4NuuNeGqZ4LmOl393lEC-J79c1f-Q/viewform?embedded=true"
                        width="100%"
                        className="iframe"
                      >
                        Loading…
                      </iframe>
                    </div>
                  </div>
                ) : null}

                {delegate ? (
                  <div>
                    <div className="container-form-mobile OxCenter">
                      <div className="iframe-container-mobile OxCenter">
                        <iframe
                          src="https://docs.google.com/forms/d/e/1FAIpQLScj6xGbjMMttGS2VwbbEkUZ9tTWLpOIRFJTexjN1k9jhFtD7A/viewform?embedded=true"
                          width="100%"
                          className="iframe"
                        >
                          Loading…
                        </iframe>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              {/* </CustomPaper> */}
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

{
  /* <div className="countDownContainerMobile xOyCenter">
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
            </div> */
}
