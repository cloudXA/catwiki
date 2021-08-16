import './App.css';
import Route from './router';
// const tab = <div>hi</div>;
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route></Route>
        </Router>
        
      </header>
    </div>
    
  );
}

export default App;
