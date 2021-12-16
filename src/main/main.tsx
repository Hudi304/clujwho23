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
      <Route exact path="/clujwho23/home" component={HomePage} />
      <Route exact path="/clujwho23/apply_now" component={ApplyNow} />
      <Route exact path="/clujwho23/about_us" component={AboutUs} />
      <Route exact path="/clujwho23/schedule" component={Schedule} />
      <Route exact path="/clujwho23/committees" component={Committees} />
      <Route exact path="/clujwho23/our_team" component={OurTeam} />
      <Route exact path="/clujwho23/resources" component={Resources} />
      <Route exact path="/clujwho23/contact" component={Contact} />
      <Route exact path="/clujwho23/sponsors" component={Sponsors} />



      <Route exact path={'/clujwho23'}>
        <Redirect to="/clujwho23/home" />
      </Route>
      <Route exact path={'/clujwho23/'}>
        <Redirect to="/clujwho23/home" />
      </Route>
    </Switch>
  )
}
