import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/index";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App w-full h-full">
      <BrowserRouter>
        <Routes>
          <Route element={ <Layout /> }>
            <Route path="/index" element={ <Index /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
 