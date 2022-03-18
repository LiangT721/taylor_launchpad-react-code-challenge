import "./App.scss";

import { Routes, Route } from "react-router-dom";

import Nav from "./components/nav/nav.component";
import Homepage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div className="app container conntainer-xxl">
      <div className="row">
        <Nav />
        <div className="pages col-11">
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
