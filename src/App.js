
import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Nav from "./components/nav/nav.component";
import Homepage from "./pages/homepage/homepage.component";
import UniversitiesPage from "./pages/universitiesPage/universitiesPage.component";
import PostalPage from "./pages/postalPage/postalPage.component";

function App() {
  return (
    <div className="app container-xxl position-relative d-flex justify-content-between">
      <Nav />
      <div className="pages position-relative">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/universities" element={<UniversitiesPage />} />
          <Route path="/postal" element={<PostalPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
