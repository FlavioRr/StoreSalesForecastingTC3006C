import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectInfo from "./pages/ProjectInfo";
import Aboutus from "./pages/about-us";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App w-full h-full">
      <BrowserRouter>
        <Routes>
          <Route element={ <Layout /> }>
            <Route path="/ProjectInfo" element={ <ProjectInfo /> } />
			<Route path="/About-us" element={ <Aboutus /> } />	
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
 