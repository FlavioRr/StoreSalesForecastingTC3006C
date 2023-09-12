import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectInfo from "./pages/ProjectInfo";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App w-full h-full">
      <BrowserRouter>
        <Routes>
          <Route element={ <Layout /> }>
            <Route path="/ProjectInfo" element={ <ProjectInfo /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
 