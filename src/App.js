import "./App.scss";

import Nav from "./components/nav/nav.component";

function App() {
  return (
      <div className="app container conntainer-xxl">
        <div className="row">
          <Nav />
          <div className="pages col-11">
          </div>
        </div>
      </div>
  );
}

export default App;
