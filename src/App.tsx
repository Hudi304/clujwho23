import './App.css'

import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import { AboutUs } from './pages/about_us/about-us-component'
import { ApplyNow } from './pages/appy-now/apply-now-page'
import { Committees } from './pages/committees/committees-component'
import { Contact } from './pages/contact/contact-component'
import { HomePage } from './pages/login/login'
import { OurTeam } from './pages/our-team/our-team-component'
import { Resources } from './pages/resources/resources-component'
import { Sponsors } from './pages/sponsors/sponsors-component'
import { Schedule } from './pages/schedule/schedule-coponent'

function App(): JSX.Element {
  return (
    <div>
      {/* <BrowserRouter>
        <Route path={'/'} component={MainPage} />
      </BrowserRouter> */}

      {/* <BrowserRouter>
        <Route exact path="/clujwho23/">
          <HomePage />
        </Route>

        <Route path="/clujwho23/apply_now/">
          <ApplyNow />
        </Route>

        <Route path="/clujwho23/about_us/">
          <AboutUs />
        </Route>

        <Route path="/clujwho23/schedule/">
          <Schedule />
        </Route>

        <Route path="/clujwho23/committees/">
          <Committees />
        </Route>

        <Route path="/clujwho23/our_team/">
          <OurTeam />
        </Route>

        <Route path="/clujwho23/resources/">
          <Resources />
        </Route>

        <Route path="/clujwho23/contact/">
          <Contact />
        </Route>

        <Route path="/clujwho23/sponsors/">
          <Sponsors />
        </Route>
      </BrowserRouter> */}

      <HashRouter>
        <Route exact path="/" component={HomePage} />
        <Route path="/apply_now" component={ApplyNow} />
        <Route path="/about_us" component={AboutUs} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/committees" component={Committees} />
        <Route path="/our_team" component={OurTeam} />
        <Route path="/resources" component={Resources} />
        <Route path="/contact" component={Contact} />
        <Route path="/sponsors" component={Sponsors} />
      </HashRouter>
    </div>
  )
}

export default App
