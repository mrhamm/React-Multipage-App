import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Home, Navigation } from "./components";

function App() {
  return (
    <div className="App">

      <Router>
        <Navigation/>  
        <Switch>
          <Route path="/" exact component = {() => <Home/>}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
