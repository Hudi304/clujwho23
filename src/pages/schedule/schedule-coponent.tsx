import { useInView } from 'react-intersection-observer'
import { CustomPaper } from '../../components/custom-paper/paper-component'
import { NavBarComponent } from '../login/components/navbar/navbar-component'

import './schedule.scss'

export function Schedule(props: any): JSX.Element {
    const [ref, inView] = useInView({
        threshold: 0.5
    })

    return (
        <div>
            <div className="apply-now-page-grid-container backgroud-image debug">
                <CustomPaper width={'1220px'} height={'300vh'}>
                    Schedule
                </CustomPaper>
            </div>

            <NavBarComponent inView={inView} />
        </div>
    )
}
