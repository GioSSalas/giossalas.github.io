
import { Provider } from 'react-redux';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import TopPanel from './components/TopPanel';
import generateStore from './redux-ducks/store';
import Index from './components/Views/Index';

function App() {
  return (
    <div className="h-screen w-screen bg-white-800">
      <Provider store={generateStore()}>
        <Router basename="/">
          <TopPanel></TopPanel>
          <Route exact path="/" component={Index} />
        </Router>
      </Provider>
    </div>
  )
}

export default App;
