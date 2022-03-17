import React from "react";
import { Table } from 'antd';
import './snlistsingle.css'

const dataSource = [
    {
      key: '1',
      name: '3D打印机的型号',
      publisher: 'RAISE3D',
      address: 'PDF',
      size: '16mb',
      uploadtime: '2022-01-13 04:30',
      collection: '加入收藏'     
    },
    {
      key: '2',
      name: '3D打印机的型号',
      publisher: 'RAISE3D',
      address: 'PDF',
      size: '16mb',
      uploadtime: '2022-01-13 04:30',
      collection: '加入收藏'     
    },
    {
      key: '3',
      name: '3D打印机的型号',
      publisher: 'RAISE3D',
      address: 'PDF',
      size: '16mb',
      uploadtime: '2022-01-13 04:30',
      collection: '加入收藏'     
    },
    {
      key: '4',
      name: '3D打印机的型号',
      publisher: 'RAISE3D',
      address: 'PDF',
      size: '16mb',
      uploadtime: '2022-01-13 04:30',
      collection: '加入收藏'     
    },   
  ];
  
  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '发布者',
      dataIndex: 'publisher',
      key: 'publisher',
    },
    {
      title: '文件类型',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '大小',
      dataIndex: 'size',
      key: 'size',
    },
    {
        title: '上传时间',
        dataIndex: 'uploadtime',
        key: 'uploadtime',
    },
    {
        title: '',
        dataIndex: 'collection',
        key: 'collection',
    },
  ];

const SnListsingle = () => {
    
    return (
        <>
            <div className="snltsgle-box">
                <div className="snltsgle-list">
                    <Table dataSource={dataSource} columns={columns} />;
                </div> 
            </div>
            {/* 3D打印-更新信息提示-弹窗 */}
            <div className="msg-nftion-wraper"></div>
            <div className="msg-nftion">
                <h1 className="msg-title">消息通知</h1>
                <p className="msg-p">已更新课程</p>
                <p className="msg-p msg-p-red">3D打印机的操作</p>
                <p className="msg-p msg-p-red">3D打印机的参数设置</p>
                <button className="msg-btn">确定</button>
            </div>
        </>
    )
}
export default SnListsingle