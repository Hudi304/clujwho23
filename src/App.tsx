import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import { MainPage } from './main/main';

function App(): JSX.Element {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path={'/'} component={MainPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
