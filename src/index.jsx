import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error from './components/Error';
import Footer from './components/Footer';
import Freelances from './pages/Freelances';
import GlobalStyle from './utils/style/GlobalStyle';
import Header from './components/Header';
import Home from './pages/Home';
import Results from './pages/Results';
import Survey from './pages/Survey';
import { ThemeProvider } from './utils/context';

import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ThemeProvider>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/survey/:questionNumber">
          <Survey />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
        <Route path="/freelances/">
          <Freelances />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </ThemeProvider>
  </Router>
);
