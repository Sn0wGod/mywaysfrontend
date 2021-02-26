import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact><HomePage/></Route>
      </BrowserRouter>

        
    </div>
  );
}

export default App;
