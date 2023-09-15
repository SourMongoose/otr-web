import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/pages/Landing";
import NoPage from "./components/pages/NoPage";
import Auth from "./components/pages/Auth";
import Dashboard from "./components/pages/Dashboard";
import Submit from "./components/pages/Submit";
import { useState } from "react";
import Unauthorized from "./components/pages/Unauthorized";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route
          path="/auth"
          element={
            <Auth
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          path="/submit"
          element={
            <Submit />
          }
        />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              isAuthenticated={isAuthenticated}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
