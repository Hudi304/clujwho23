import { Paper } from '@mui/material'
import './paper.scss'

interface CustomPaperProps {
    width: string
    height: string
    children: any
}

export function CustomPaper(props: CustomPaperProps): JSX.Element {
    const { width, height } = props
    return (
        <div style={{ width: width }}>
            {/* <div className="page-grid-container backgroud-image debug"></div> */}
            <Paper elevation={10}>
                <div style={{ height: height }} className="in-paper">
                    {props.children}
                </div>
            </Paper>
        </div>
    )
}
