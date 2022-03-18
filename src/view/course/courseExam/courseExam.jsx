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
      name: '3D打印的开关机',
      publisher: '3D打印机的操作',
      address: '2022-12-12 30:21',
      size: 'PASSED',
      time: '-',
      uploadtime: '2min30s',
    },
    {
      key: '2',
      name: '3D打印的开关机',
      publisher: '3D打印机的操作',
      address: '2022-12-12 30:21',
      size: 'FAILED',
      time: '',
      uploadtime: '2min30s',
    },
    {
      key: '3',
      name: '3D打印的开关机',
      publisher: '3D打印机的操作',
      address: '2022-12-12 30:21',
      size: 'MAKE-UP',
      time: '1',
      uploadtime: '2min30s',
    },
    {
      key: '4',
      name: '3D打印的开关机',
      publisher: '3D打印机的操作',
      address: '2022-12-12 30:21',
      size: 'FAILED',
      time: '2',
      uploadtime: '2min30s',
    },   
  ];
  
  const columns = [
    {
      title: '考试',
      dataIndex: 'name',
      key: 'name',
      width: 220,

    },
    {
      title: '课程名称',
      dataIndex: 'publisher',
      key: 'publisher',
      width: 220,
    },
    {
      title: '考试时间',
      dataIndex: 'address',
      key: 'address',
      width: 210,
    },
    {
      title: '考试状态',
      dataIndex: 'size',
      key: 'size',
      width: 120,
      align: 'center',
      render: (text) => {
       if (text === "PASSED") {
        return <div className="exam-passed">{text}</div>
       } else if (text === "FAILED") {
        return <div className="exam-failed">{text}</div>
       }
        return <div className="exam-makeup">{text}</div>
      }
    },
    {
        title: '补考次数',
        dataIndex: 'time',
        key: 'time',
        align: 'center',        
    },
    {
      title: '时长',
      dataIndex: 'uploadtime',
      key: 'uploadtime',
    },
  ];

const CourseExam = () => {
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
                    <li className="column-ulli">
                        <span>8</span>
                        <p>已完成</p>
                    </li>
                    <li className="column-ulli columnactive">
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
export default CourseExam