import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Employees from "./Employees";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
