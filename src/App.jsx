import ARPizza from './ARPizza';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import ARView from "./ARView";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/ar/:id" element={<ARView />} />
      </Routes>
    </BrowserRouter>
  );
}
