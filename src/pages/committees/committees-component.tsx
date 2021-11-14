import { useInView } from 'react-intersection-observer'
import { CustomPaper } from '../../components/custom-paper/paper-component'
import { NavBarComponent } from '../login/components/navbar/navbar-component'

import man from '../../assets/map/man.svg'

import './committees.scss'
import { WorldMap } from './world-map'

export function Committees(props: any): JSX.Element {
    const [ref, inView] = useInView({
        threshold: 0.5
    })

    return (
        <div>
            <div className="apply-now-page-grid-container backgroud-image debug">
                <CustomPaper width={'1220px'} height={'100vh'}>
                    <div className="centerPage">
                        <div className="worldMap">
                            <WorldMap />
                        </div>
                    </div>
                </CustomPaper>
            </div>

            <NavBarComponent inView={inView} />
        </div>
    )
}
