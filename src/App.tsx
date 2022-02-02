import './App.css'

import { HashRouter, BrowserRouter, Route, Redirect } from 'react-router-dom'
import { AboutUs } from './pages/about_us/about-us-component'
import { ApplyNow } from './pages/appy-now/apply-now-page'
import { Committees } from './pages/committees/committees-component'
import { Contact } from './pages/contact/contact-component'
import { HomePage } from './pages/login/login'
import { OurTeam } from './pages/our-team/our-team-component'
import { Resources } from './pages/resources/resources-component'
import { Sponsors } from './pages/sponsors/sponsors-component'
import { Schedule } from './pages/schedule/schedule-coponent'
import { HomePage2 } from './pages/home/home-component'

function App(): JSX.Element {
  return (
    <div className="app">
      {/* <HashRouter>
        <Route exact path="/" component={HomePage2} />
        <Route path="/apply_now" component={ApplyNow} />
        <Route path="/about_us" component={AboutUs} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/committees" component={Committees} />
        <Route path="/our_team" component={OurTeam} />
        <Route path="/resources" component={Resources} />
        <Route path="/contact" component={Contact} />
        <Route path="/sponsors" component={Sponsors} />
      </HashRouter> */}

      <BrowserRouter>
        {/* <Route exact path="/home2" component={HomePage2} /> */}
        <Route path="/home" component={HomePage2} />
        <Route path="/apply_now" component={ApplyNow} />
        <Route path="/about_us" component={AboutUs} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/committees" component={Committees} />
        <Route path="/our_team" component={OurTeam} />
        <Route path="/resources" component={Resources} />
        <Route path="/contact" component={Contact} />
        <Route path="/sponsors" component={Sponsors} />

        <Redirect to="/home" />
      </BrowserRouter>
    </div>
  )
}

export default App
