import React from "react";
import './snSearch.css'
import { Select, Input, Space } from 'antd';
import { useNavigate } from "react-router-dom";

const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}

const { Search } = Input;
const onSearch = value => console.log(value);

const SnSearch = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="SnSearch-box">
                <div className="SnSearch-tent">
                    <div className="SnSearch-tle">案例</div>
                    <button className="SnSearch-sh">筛选</button>
                    <div className="SnSearch-right">
                        
                    <button onClick={() => {
                                    navigate('SnListsingle', {replace: true});
                                }} className="list-pct"></button>
                    <button onClick={() => {
                                    navigate("SnList");
                                }}  className="list-tst"></button>
                    </div>
                </div>
                <div className="SnSearch-tn">
                    <div>
                        <Select className="SnSelect-style" defaultValue="行业" onChange={handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                        </Select>
                        <Select className="SnSelect-style" defaultValue="应用" onChange={handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                        </Select>
                        <Select className="SnSelect-style" defaultValue="文件格式" onChange={handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                        </Select>
                        <Space className="SnSpace-style" direction="vertical">
                            <Search placeholder="input search text" onSearch={onSearch} enterButton />
                        </Space>
                   </div>
                   <div className="search-option">
                        <span className="sn-option-on">行业ABC<span className="option-poor">×</span></span>
                        <span className="sn-option-on">PDF<span className="option-poor">×</span></span>
                   </div>
                   <button className="screen-pon screen-pon-on">应用筛选</button>
                   <button className="screen-pon">清除筛选</button>
                </div>
            </div>
        </>
    )
}

export default SnSearch