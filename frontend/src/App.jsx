import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import Clients from "./pages/Clients";
import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
