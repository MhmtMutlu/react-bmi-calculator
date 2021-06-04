import './App.css';
import Calculate from "./components/BMICalculate/Calculate"
import Info from "./components/BMIInfo/Info"
import Result from "./components/BMIResult/Result"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Result">
              <Result />
          </Route>
          <Route path="/Info">
              <Info />
          </Route>
          <Route path="/">
              <Calculate />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
