import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Releases from "./components/Releases";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route name="Home" path="/" exact component={Home} />
          <Route name="Contact" path="/contact" exact component={Contact} />
          <Route name="Releases" path="/releases" exact component={Releases} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
