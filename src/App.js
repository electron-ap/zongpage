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
import CourseExam from './view/course/courseExam/courseExam'
import CourseBook from './view/course/courseBook/courseBook'
// 开始考试分类
import ExamDan from './view/exam/examDan/examDan'
import ExamDuo from './view/exam/examDuo/examDuo'
import ExamDuopc from './view/exam/examDuo/examDuopc'
import ExamSpeed from './view/exam/examSpeed/examSpeed'
import ExamPassd from './view/exam/examResult/examPassd'
import ExamFail from './view/exam/examResult/examfail'
import Admin from './view/admin/personal/index'
// 个人中心、代理商
import Personal from './view/admin/personal/index'
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
                <Route path="/courseExam/*" element={<CourseExam />} />
                <Route path="/courseBook/*" element={<CourseBook />} />
                {/* 开始考试分类 */}
                <Route path="/examDan/*" element={<ExamDan />} />
                <Route path="/examDuo/*" element={<ExamDuo />} />
                <Route path="/examDuopc/*" element={<ExamDuopc />} />
                <Route path="/examSpeed/*" element={<ExamSpeed />} />
                <Route path="/examPassd/*" element={<ExamPassd />} />
                <Route path="/examfail/*" element={<ExamFail />} />

                {/* 个人中心、代理商 */}
                <Route path="/personal/*" element={<Personal />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
