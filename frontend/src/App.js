import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home";
import Register from "../src/pages/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
      </Routes>
    </Router>
  );
}

export default App;
