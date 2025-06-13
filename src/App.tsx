import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import AppLayout from "./layout/AppLayout";
import Home from "@/pages/Home";
import Resume from "@/pages/Resume.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route index path="/" element={<Home/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
