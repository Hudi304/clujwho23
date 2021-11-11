import { useInView } from 'react-intersection-observer'
import { CustomPaper } from '../../components/custom-paper/paper-component'
import { NavBarComponent } from '../login/components/navbar/navbar-component'

import './resources.scss'

export function Resources(props: any): JSX.Element {
    const [ref, inView] = useInView({
        threshold: 0.5
    })

    return (
        <div>
            <div className="apply-now-page-grid-container backgroud-image debug">
                <CustomPaper width={'1220px'} height={'300vh'}>
                    Resources
                </CustomPaper>
            </div>

            <NavBarComponent inView={inView} />
        </div>
    )
}
