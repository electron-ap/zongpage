import React from "react";
import { Table } from 'antd';

import '../courseContent/courseContent.css'
import { useBackground } from '../../../libs/hooks'
import Myheader from '../../../components/home/header/index'
import Footer from '../../../components/home/footer/index'
import CourseBaner from '../../../common/component/course/courseBaner'

const dataSource = [
    {
      key: '1',
      name: '开机',
      publisher: '2min',
      address: '1min35s',
      size: '2022-12-12',
      uploadtime: '',
    },
    {
      key: '2',
      name: '如何添加辅料',
      publisher: '5min',
      address: '1min30s',
      size: '2022-12-12',
      uploadtime: '',
    },
    {
      key: '3',
      name: '开机',
      publisher: '2min',
      address: '1min35s',
      size: '2022-12-12',
      uploadtime: '',
    },
    {
      key: '4',
      name: '如何添加辅料',
      publisher: '5min',
      address: '1min30s',
      size: '2022-12-12',
      uploadtime: '',
    },   
  ];
  
  const columns = [
    {
      title: '课程名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '最低学习时间',
      dataIndex: 'publisher',
      key: 'publisher',
    },
    {
      title: '已学习时间',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '截止日期',
      dataIndex: 'size',
      key: 'size',
    },
    {
        title: '进入考试',
        dataIndex: 'uploadtime',
        key: 'uploadtime',
        render: (text) => {
            return <div className="course-enter">{text}进入考试</div>
        }
    },
    
  ];

const CourseOk = () => {
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
                {/* 已完成 */}
                <div className="study-in">
                    <Table dataSource={dataSource} columns={columns} />
                </div>
            </div>
            
            <Footer />
        </>
    )
}
export default CourseOk