import React from "react";

import '../../../view/course/courseContent/courseContent.css'
// 考试分类样式都在这里
import '../examIndex.css'
import { useBackground } from '../../../libs/hooks'
import Myheader from '../../../components/home/header/index'
import Footer from '../../../components/home/footer/index'
import CourseBaner from '../../../common/component/course/courseBaner'

// 多选择-picture
import { Checkbox, Row, Col } from 'antd';
function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const ExamDuopc = () => {
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
                {/* 考试多选题 */}
                <div className="exam-title">
                    <div className="exam-title-left">考试进度(<span>3/25</span>)</div>
                    <div className="exam-title-right">
                        <span className="coun-down">倒计时 03:50</span>
                    </div>
                </div>
                <div className="option-questions-tle">
                    <span>3.</span>
                    <span className="single-choice">【多选题】</span>
                    <span>3D打印机的操作分为几个步骤？（3分）</span>
                </div>
                <div className="singlechoice-box">
                    <div className="group-duo group-duopc">
                    <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                        <Row>
                        <Col span={8}>
                            <Checkbox value="A"><span className="duo-span">A：3个步骤</span><img className="duo-img" alt="" src={require("../../../assets/course/pct01.png")} /></Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="B"><span className="duo-span">B：3个步骤</span><img className="duo-img" alt="" src={require("../../../assets/course/pct01.png")} /></Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="C"><span className="duo-span">C：3个步骤</span><img className="duo-img" alt="" src={require("../../../assets/course/pct01.png")} /></Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="D"><span className="duo-span">D：3个步骤</span><img className="duo-img" alt="" src={require("../../../assets/course/pct01.png")} /></Checkbox>
                        </Col>
                        </Row>
                    </Checkbox.Group>
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
export default ExamDuopc