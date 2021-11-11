import { Redirect, Route, Switch } from 'react-router-dom'
import { AboutUs } from '../pages/about_us/about-us-component'
import { UserProfilePage } from '../pages/account/account'
import { ApplyNow } from '../pages/appy-now/apply-now-page'
import { ClujWhoHomePage } from '../pages/cluj_who/clujWHO_home'
import { Committees } from '../pages/committees/committees-component'
import { Contact } from '../pages/contact/contact-component'
import { HomePage } from '../pages/login/login'
import { OurTeam } from '../pages/our-team/our-team-component'
import { Resources } from '../pages/resources/resources-component'
import { Schedule } from '../pages/schedule/schedule-coponent'
import { Sponsors } from '../pages/sponsors/sponsors-component'

export function MainPage(): JSX.Element {
    return (
        <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/apply_now" component={ApplyNow} />
            <Route exact path="/about_us" component={AboutUs} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/committees" component={Committees} />
            <Route exact path="/our_team" component={OurTeam} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/sponsors" component={Sponsors} />

            <Route exact path={'/cluj_who'}>
                <Redirect to="/home" />
            </Route>
        </Switch>
    )
}
