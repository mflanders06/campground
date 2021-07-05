import logo from './logo.svg';
import './css/App.css';
import './css/Nav.css';
import { HashRouter } from 'react-router-dom';
import Nav from './components/Nav'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Nav />
        Hello
      </div>
    </HashRouter>
  );
}

export default App;
