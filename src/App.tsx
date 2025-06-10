import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import AppLayout from "./layout/AppLayout";
import Home from "@/pages/Home";
import About from "@/pages/About.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route index path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
