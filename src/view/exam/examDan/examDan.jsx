import React from "react";

import '../../../view/course/courseContent/courseContent.css'
// 考试分类样式都在这里
import '../examIndex.css'
import { useBackground } from '../../../libs/hooks'
import Myheader from '../../../components/home/header/index'
import Footer from '../../../components/home/footer/index'
import CourseBaner from '../../../common/component/course/courseBaner'

// 单项选择
import { Radio } from 'antd';
function onChange(e) {
  console.log(`radio checked:${e.target.value}`);
}

const ExamDan = () => {
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
                {/* 考试单选题 */}
                <div className="exam-title">
                    <div className="exam-title-left">考试进度(<span>3/25</span>)</div>
                    <div className="exam-title-right">
                        <span className="coun-down">倒计时 03:50</span>
                    </div>
                </div>
                <div className="option-questions-tle">
                    <span>3.</span>
                    <span className="single-choice">【单选题】</span>
                    <span>3D打印机的操作分为几个步骤？（3分）</span>
                </div>
                <div className="singlechoice-box">
                    <div className="group-dan">
                        <Radio.Group onChange={onChange} defaultValue="a">
                            <Radio.Button value="a">A：3个步骤</Radio.Button>
                            <Radio.Button value="b">B：4个步骤</Radio.Button>
                            <Radio.Button value="c">C：5个步骤</Radio.Button>
                            <Radio.Button value="d">D：6个步骤</Radio.Button>
                        </Radio.Group>
                    </div>
                    <button className="singlechoice-skip">跳过</button>
                    <button className="singlechoice-sign">标记</button>
                </div>
                <button className="singlechoice-submit">确定</button>
            </div>
            
            <Footer />
        </>
    )
}
export default ExamDan