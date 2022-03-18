import React from "react";

import '../../../view/course/courseContent/courseContent.css'
// 考试分类样式都在这里
import '../examIndex.css'
import { useBackground } from '../../../libs/hooks'
import Myheader from '../../../components/home/header/index'
import Footer from '../../../components/home/footer/index'
import CourseBaner from '../../../common/component/course/courseBaner'


const ExamFail = () => {
    useBackground('#f7f7f7');
    return (
        <>
            <Myheader />
            <CourseBaner />
            {/* 栏目分类 */}
            <div className="course-column">
                <ul className="course-column-ul">
                    <li className="column-ulli">
                        <span>65</span>
                        <p>课程</p>
                    </li>
                    <li className="column-ulli">
                        <span>12</span>
                        <p>学习中</p>
                    </li>
                    <li className="column-ulli columnactive">
                        <span>8</span>
                        <p>已完成</p>
                    </li>
                    <li className="column-ulli">
                        <span>2</span>
                        <p>考试</p>
                    </li>
                    <li className="column-ulli">
                        <span>3</span>
                        <p>证书</p>
                    </li>
                </ul>
            </div>
            <div className="course-all">
                <div className="exam-title">
                    <div className="exam-title-left">考试进度(<span>3/25</span>)</div>
                    <div className="exam-title-right">
                        <span className="coun-down">考试结束</span>
                    </div>
                </div>
                <div className="exam-result">
                    <div className="exam-result-tle">很遗憾，本次考试未通过！</div>
                    <div className="exam-result-on">55分</div>
                    <div className="exam-result-p">考试成绩</div>
                    <div className="btn-exam-result-bg">
                        <button className="btn-exam-result">点击查看答案解析</button>
                    </div>
                </div>
            </div>
            
            <Footer />
            {/* 弹窗地址 */}
            <div className="result-wraper"></div>
            <div className="result-box">
                <div className="result-box-close"></div>
                <div className="result-nme">答案解析</div>
                <div className="result-title">考试进度(<span>3/25</span>)</div>
                <div className="option-questions-tle">
                    <span>3.</span>
                    <span className="single-choice">【单选题】</span>
                    <span>3D打印机的操作分为几个步骤？（3分）</span>
                </div>
                <ul className="result-subject">
                    <li className="result-items result-items-right">
                        <p className="result-items-p">A：3个步骤</p>  
                        {/* <img className="result-items-img" alt="" src={require("../../../assets/course/pct01.png")} />   */}
                    </li> 
                    <li className="result-items">
                        <p className="result-items-p">B：4个步骤</p>    
                    </li> 
                    <li className="result-items result-items-wrong">
                        <p className="result-items-p">C：5个步骤</p>    
                    </li> 
                    <li className="result-items">
                        <p className="result-items-p">D：6个步骤</p>    
                    </li> 
                </ul>
                <div className="result-answer">正确答案：AC</div>
                <div className="result-answer-p">答案解析：文字描述，3D打印机答案解析文字描述；答案解析文字描述，3D打印机答案解析文字描述；答案解析文字描述，3D打印机答案</div>
                <button className="btn-answer btn-answer-left">上一题</button>
                <button className="btn-answer">下一题</button>
            </div>
        </>
    )
}
export default ExamFail