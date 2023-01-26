import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Error from './components/Error';
import Freelances from './pages/Freelances';
import Header from './components/Header';
import Home from './pages/Home';
import Results from './pages/Results';
import Survey from './pages/Survey';

import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Header />
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/survey/:questionNumber"><Survey /></Route>
            <Route path="/results"><Results /></Route>
            <Route path="/freelances/"><Freelances /></Route>
            <Route><Error /></Route>
        </Switch>
    </Router>);
