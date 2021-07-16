
import './css/App.css';
import './css/Nav.css';
import './css/Map.css';
import { HashRouter } from 'react-router-dom';
import Nav from './components/Nav';
import routes from './routes';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Nav />
        <div className="pageBody">
          { routes }
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
