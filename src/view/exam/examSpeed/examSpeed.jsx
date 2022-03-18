import React from "react";

import '../../../view/course/courseContent/courseContent.css'
// 考试分类样式都在这里
import '../examIndex.css'
import { useBackground } from '../../../libs/hooks'
import Myheader from '../../../components/home/header/index'
import Footer from '../../../components/home/footer/index'
import CourseBaner from '../../../common/component/course/courseBaner'

// 单项选择
import { Radio, Checkbox, Row, Col } from 'antd';
function onChange(e, checkedValues) {
  console.log(`radio checked:${e.target.value}`);
  console.log('checked = ', checkedValues);
}
// 多选择
const plainOptions = ['A：3个步骤', 'B：4个步骤', 'C：5个步骤', 'D：6个步骤'];

const ExamSpeed = () => {
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
                <div className="singlechoice-box">
                    <div className="exam-speed">
                        <div className="exam-speed-tle">绿色为答题成功，黄色为标记（可回去检查、更改），红色为未选择</div>
                        <ul className="exam-speed-nr">
                            <li className="speed-nr-li">
                                <span className="speed-nr-tle">1</span>
                                <img className="speed-nr-img" alt="" src={require("../../../assets/course/start01.png")} />
                            </li>
                            <li className="speed-nr-li">
                                <span className="speed-nr-tle">2</span>
                                <img className="speed-nr-img" alt="" src={require("../../../assets/course/start03.png")} />
                            </li>
                            <li className="speed-nr-li">
                                <span className="speed-nr-tle">3</span>
                                <img className="speed-nr-img" alt="" src={require("../../../assets/course/start01.png")} />
                            </li>
                            <li className="speed-nr-li">
                                <span className="speed-nr-tle">4</span>
                                <img className="speed-nr-img" alt="" src={require("../../../assets/course/start01.png")} />
                            </li>
                            <li className="speed-nr-li">
                                <span className="speed-nr-tle">5</span>
                                <img className="speed-nr-img" alt="" src={require("../../../assets/course/start01.png")} />
                            </li>
                            <li className="speed-nr-li">
                                <span className="speed-nr-tle">6</span>
                                <img className="speed-nr-img" alt="" src={require("../../../assets/course/start01.png")} />
                            </li>
                            <li className="speed-nr-li">
                                <span className="speed-nr-tle">7</span>
                                <img className="speed-nr-img" alt="" src={require("../../../assets/course/start01.png")} />
                            </li>
                            <li className="speed-nr-li">
                                <span className="speed-nr-tle">8</span>
                                <img className="speed-nr-img" alt="" src={require("../../../assets/course/start01.png")} />
                            </li>
                            <li className="speed-nr-li">
                                <span className="speed-nr-tle">9</span>
                                <img className="speed-nr-img" alt="" src={require("../../../assets/course/start01.png")} />
                            </li>
                            <li className="speed-nr-li">
                                <span className="speed-nr-tle">10</span>
                                <img className="speed-nr-img" alt="" src={require("../../../assets/course/start01.png")} />
                            </li>
                            <li className="speed-nr-li">
                                <span className="speed-nr-tle">11</span>
                                <img className="speed-nr-img" alt="" src={require("../../../assets/course/start01.png")} />
                            </li>
                            <li className="speed-nr-li">
                                <span className="speed-nr-tle">12</span>
                                <img className="speed-nr-img" alt="" src={require("../../../assets/course/start01.png")} />
                            </li>
                            <li className="speed-nr-li">
                                <span className="speed-nr-tle">13</span>
                                <img className="speed-nr-img" alt="" src={require("../../../assets/course/start01.png")} />
                            </li>
                            <li className="speed-nr-li">
                                <span className="speed-nr-tle">14</span>
                                <img className="speed-nr-img" alt="" src={require("../../../assets/course/start03.png")} />
                            </li>
                            <li className="speed-nr-li">
                                <span className="speed-nr-tle">15</span>
                                <img className="speed-nr-img" alt="" src={require("../../../assets/course/start03.png")} />
                            </li>
                            <li className="speed-nr-li">
                                <span className="speed-nr-tle">16</span>
                                <img className="speed-nr-img" alt="" src={require("../../../assets/course/start01.png")} />
                            </li>
                            <li className="speed-nr-li">
                                <span className="speed-nr-tle">17</span>
                                <img className="speed-nr-img" alt="" src={require("../../../assets/course/start03.png")} />
                            </li>
                            <li className="speed-nr-li">
                                <span className="speed-nr-tle">18</span>
                                <img className="speed-nr-img" alt="" src={require("../../../assets/course/start01.png")} />
                            </li>
                            <li className="speed-nr-li">
                                <span className="speed-nr-tle">19</span>
                                <img className="speed-nr-img" alt="" src={require("../../../assets/course/start03.png")} />
                            </li>
                            <li className="speed-nr-li">
                                <span className="speed-nr-tle">20</span>
                                <img className="speed-nr-img" alt="" src={require("../../../assets/course/start01.png")} />
                            </li>
                            <li className="speed-nr-li">
                                <span className="speed-nr-tle">21</span>
                                <img className="speed-nr-img" alt="" src={require("../../../assets/course/start01.png")} />
                            </li>
                            <li className="speed-nr-li">
                                <span className="speed-nr-tle">22</span>
                                <img className="speed-nr-img" alt="" src={require("../../../assets/course/start02.png")} />
                            </li>
                            <li className="speed-nr-li">
                                <span className="speed-nr-tle">23</span>
                                <img className="speed-nr-img" alt="" src={require("../../../assets/course/start01.png")} />
                            </li>
                        </ul>
                    </div>
                </div>
                <button className="singlechoice-submit">确定</button>
            </div>
            
            <Footer />
            {/* 弹窗地址 */}
            <div className="popup-wraper"></div>
            <div className="popup-box">
                <div className="option-questions-tle">
                    <span>3.</span>
                    <span className="single-choice">【单选题】</span>
                    <span>3D打印机的操作分为几个步骤？（3分）</span>
                </div>
                <div className="group-dan" style={{display: "none"}}>
                    <Radio.Group onChange={onChange} defaultValue="a">
                        <Radio.Button value="a">A：3个步骤</Radio.Button>
                        <Radio.Button value="b">B：4个步骤</Radio.Button>
                        <Radio.Button value="c">C：5个步骤</Radio.Button>
                        <Radio.Button value="d">D：6个步骤</Radio.Button>
                    </Radio.Group>
                </div>
                <div className="group-duo" style={{display: "none"}}>
                    <Checkbox.Group options={plainOptions} defaultValue={['A：3个步骤']} onChange={onChange} />
                </div>
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
                <button className="btn-style-exam btn-cancel">取消</button>
                <button className="btn-style-exam btn-style-exam-on btn-modify">确认修改</button>
            </div>
        </>
    )
}
export default ExamSpeed