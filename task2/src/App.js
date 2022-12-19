import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./components/Detail";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <h1 className="coues">Coues</h1>
      <div className="row">
      <Route path="/" exact={true} component={Home} />
    </div>
      <Route path="/about" component={About} />           
      <Route path="/detali" component={Detail} />
    </HashRouter>
  );
}

export default App;