import './team-member.scss'

import profilePicture from '../../../../assets/LEGO_logo.svg.png'

export function TeamMemberCard(props: any): JSX.Element {
    return (
        <div className="team-member-card">
            <div className="team-member-grid">
                <img className="profile-image" src={profilePicture} />
                <div className="content-container debug">
                    <div className="team-member-name debug">Hudisteanu Mihai-Andrei</div>
                    <div className="team-member-content debug">Director of technical stuff</div>
                    <div className="team-member-content debug">Straight Thing</div>
                    <div className="team-member-content debug">Straight Thing</div>
                    <div className="team-member-content debug">Funny thing</div>
                </div>
            </div>
        </div>
    )
}
