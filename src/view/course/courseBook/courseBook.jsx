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
      name: '3D打印开关机',
      publisher: '2022-12-12',
      address: '永久',
      size: '',
    },
    {
      key: '2',
      name: '3D打印开关机',
      publisher: '2022-12-12',
      address: '永久',
      size: '',
    },
    {
      key: '3',
      name: '3D打印开关机',
      publisher: '2022-12-12',
      address: '永久',
      size: '',
    },
    {
      key: '4',
      name: '3D打印开关机',
      publisher: '2022-12-12',
      address: '永久',
      size: '',
    },
    {
      key: '5',
      name: '3D打印开关机',
      publisher: '2022-12-12',
      address: '永久',
      size: '',
    },

];
  
  const columns = [
    {
      title: '证书名称',
      dataIndex: 'name',
      key: 'name',

    },
    {
      title: '颁发日期',
      dataIndex: 'publisher',
      key: 'publisher',
    },
    {
      title: '失效日期',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '下载',
      dataIndex: 'size',
      key: 'size',
      width: 100,
      align: 'center',
      render: () => {
          return <div className="coursedload"><img alt="" src={require("../../../assets/course/coursedload.png")} /></div>
      },
    },
  ];

const CourseBook = () => {
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
                    <li className="column-ulli">
                        <span>2</span>
                        <p>考试</p>
                    </li>
                    <li className="column-ulli columnactive">
                        <span>3</span>
                        <p>证书</p>
                    </li>
                </ul>
            </div>
            <div className="course-all">
                <div className="study-in">
                    <Table dataSource={dataSource} columns={columns} />
                </div>
            </div>
            
            <Footer />
        </>
    )
}
export default CourseBook