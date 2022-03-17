import React from "react";
import { Input } from 'antd';
import { Pagination } from 'antd';

import './courseContent.css'
import { useBackground } from '../../../libs/hooks'
import Myheader from '../../../components/home/header/index'
import Footer from '../../../components/home/footer/index'
import CourseBaner from '../../../common/component/course/courseBaner'

const { Search } = Input;
const onSearch = value => console.log(value);


const CourseContent = () => {
    useBackground('#f7f7f7');
    return (
        <>
            <Myheader />
            <CourseBaner />
            {/* 栏目分类 */}
            <div className="course-column">
                <ul className="course-column-ul">
                    <li className="column-ulli columnactive">
                        <span>65</span>
                        <p>课程</p>
                    </li>
                    <li className="column-ulli">
                        <span>12</span>
                        <p>学习中</p>
                    </li>
                    <li className="column-ulli">
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
            {/* 全部课程 */}
            <div className="course-all">
                <div className="course-search">
                    <div className="cs-search-left">全部课程</div>
                    <div className="cs-search-right">
                    <Search placeholder="input search text" onSearch={onSearch} enterButton />
                    </div>
                </div>
                <div className="course-all-tent">
                    <ul>
                        <li>
                            <div className="course-series">
                                <div className="course-series-left">001. Pro2系列教程<span className="courseon"></span></div>
                                <button className="cs-ser-on cs-ser-showon">展开</button>
                           </div>
                            <div className="course-series-nr">
                                <div className="series-nr-list">
                                    <p className="srsnr-rt">开机教程<span className="srsnr-lf">（第1节）</span></p>
                                    <span className="srsnr-lf">最低学习时间：5min</span>
                                </div>
                                <div className="series-nr-list">
                                    <p className="srsnr-rt">3D打印机操作教程<span className="srsnr-lf">（第1节）</span></p>
                                    <span className="srsnr-lf">最低学习时间：5min</span>
                                </div>                        
                            </div>
                        </li>
                        <li>
                            <div className="course-series">
                                <div className="course-series-left">001. Pro2系列教程<span className=""></span></div>
                                <button className="cs-ser-on cs-ser-showon">展开</button>
                           </div>
                            <div className="course-series-nr">
                                <div className="series-nr-list">
                                    <p className="srsnr-rt">开机教程<span className="srsnr-lf">（第1节）</span></p>
                                    <span className="srsnr-lf">最低学习时间：5min</span>
                                </div>
                                <div className="series-nr-list">
                                    <p className="srsnr-rt">3D打印机操作教程<span className="srsnr-lf">（第1节）</span></p>
                                    <span className="srsnr-lf">最低学习时间：5min</span>
                                </div>                        
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="course-paging">
                    <Pagination defaultCurrent={1} total={50} />
                </div>
            </div>
            
            <Footer />
        </>
    )
}
export default CourseContent