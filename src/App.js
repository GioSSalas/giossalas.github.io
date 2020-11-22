
import { Provider } from 'react-redux';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import TopPanel from './components/TopPanel';
import generateStore from './redux-ducks/store';

function App() {
  return (
    <div className="h-screen w-screen bg-white-800">
      <Provider store={generateStore()}>
        <Router basename="/">
          <TopPanel></TopPanel>
        </Router>
      </Provider>
    </div>
  )
}

export default App;
