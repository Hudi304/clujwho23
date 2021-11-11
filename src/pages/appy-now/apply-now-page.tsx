import { useInView } from 'react-intersection-observer'
import { NavBarComponent } from '../login/components/navbar/navbar-component'

import './appy-now.scss'
import { CustomPaper } from '../../components/custom-paper/paper-component'

export function ApplyNow(props: any): JSX.Element {
    const [ref, inView] = useInView({
        threshold: 0.5
    })

    return (
        <div>
            <div className="apply-now-page-grid-container backgroud-image debug">
                <CustomPaper width={'1220px'} height={'300vh'}>
                    APPLY NOW
                </CustomPaper>
            </div>

            <NavBarComponent inView={inView} />
        </div>
    )
}
