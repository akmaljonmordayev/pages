import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Users from "./pages/Users";
import Portfolia from "./pages/Portfolia";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Register from "./pages/Register";
import About from "./pages/About";
import Settings from "./pages/Settings";
import LayOut from "./componenets/LayOut";
import ProtectedRoute from "./componenets/ProtectedRoute";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <LayOut>
                {" "}
                <Home />{" "}
              </LayOut>
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <LayOut>
                {" "}
                <About />{" "}
              </LayOut>
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <LayOut>
                {" "}
                <Settings />{" "}
              </LayOut>
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <LayOut>
                {" "}
                <Contact />{" "}
              </LayOut>
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <LayOut>
                {" "}
                <Users />{" "}
              </LayOut>
            </ProtectedRoute>
          }
        />
        <Route
          path="/portfolio"
          element={
           <ProtectedRoute>
             <LayOut>
              {" "}
              <Portfolia />{" "}
            </LayOut>
           </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
