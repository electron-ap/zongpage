import './App.css';
import 'antd/dist/antd.css';
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Index from './view/index/index'
import Login from './components/userTent/login/login'
import Screen from './components/screen/screen'
import CourseDtals from './view/course/courseDtals/courseDtals'
import CourseContent from './view/course/courseContent/courseContent'
import CourseStudyin from './view/course/courseStudyin/courseStudyin'
import CourseOk from './view/course/courseOk/courseOk'
import Admin from './view/admin/index'
import Error from './view/error/index'
function App() {
  
  return (
      <div className="App">
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="home/*" element={<Index />} />
                <Route path="/login/*" element={<Login />} />
                <Route path="/screen/*" element={<Screen />} />
                <Route path="/admin/*" element={<Admin />} />
                <Route path="/courseDtals/*" element={<CourseDtals />} />
                <Route path="/courseContent/*" element={<CourseContent />} />
                <Route path="/courseStudyin/*" element={<CourseStudyin />} />
                <Route path="/courseOk/*" element={<CourseOk />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
