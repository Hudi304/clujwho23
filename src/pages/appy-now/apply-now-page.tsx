import { useInView } from 'react-intersection-observer'
import { NavBarComponent } from '../login/components/navbar/navbar-component'

import './appy-now.scss'
import { CustomPaper } from '../../components/custom-paper/paper-component'
import { useEffect, useState } from 'react'


export function ApplyNow(props: any): JSX.Element {
    const [ref, inView] = useInView({
        threshold: 0.5
    })

    const [timeLeft, setTimeLeft] = useState({
        seconds: 0,
        minutes: 0,
        hours: 0
    })

    const date = new Date()
    console.log('DATE : ', date)

    const registrationStartDate = new Date()
    registrationStartDate.setMonth(11)
    registrationStartDate.setDate(15)
    registrationStartDate.setFullYear(2021)
    registrationStartDate.setHours(0)
    registrationStartDate.setMinutes(0)
    registrationStartDate.setSeconds(0)
    console.log('registrationStartDate : ', registrationStartDate)

    console.log("date.getFullyea() : ", date.getTime()/1000/60/60/24)

    useEffect(() => {
        const timer = setTimeout(() => {
            const timeLeft = {
                seconds: 60 - date.getSeconds(),
                minutes: 60 - date.getMinutes(),
                hours: 24 - date.getHours(),
                days: 24 - date.getHours()
            }
            setTimeLeft(timeLeft)
            //   setYear(new Date().getFullYear());
        }, 1000)
        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <div className="OxCenter apply-now-page-grid-container backgroud-image debug">
                <div className="applyNowPageGrid debug">
                    <div className="countDownContainer xOyCenter">
                        <div className="counterContainer">
                            <div className="counterCard"></div>
                            <div className="xOyCenter points "> : </div>
                            <div className="counterCard">{`${timeLeft.hours}`}</div>
                            <div className="xOyCenter points "> : </div>
                            <div className="counterCard">{`${timeLeft.minutes}`}</div>
                            <div className="xOyCenter points "> : </div>
                            <div className="counterCard">{`${timeLeft.seconds}`}</div>
                        </div>
                    </div>

                    <CustomPaper width={'1220px'} height={'300vh'}>
                        APPLY NOW
                    </CustomPaper>
                </div>
            </div>

            <NavBarComponent inView={inView} />
        </div>
    )
}
