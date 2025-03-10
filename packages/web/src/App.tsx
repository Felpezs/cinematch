import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./views/Home";
import NavBar from "./components/ui/navBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
