import React from "react";
import Myheader from "../home/header";
import SnBanner from "./snBanner/snBanner";
import SnSearch from "./snSearch/snSearch";
import SnListsingle from "./snlistsingle/snlistsingle";
import SnList from "./snlist/snlist";
import Myfooter from "../home/footer";
import { Route, Routes } from "react-router-dom";

import './screen.css'
import { Checkbox } from 'antd';
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

const Screen = () => {

    return (
        <>
            <Myheader />
            <SnBanner />
            <SnSearch />
            <div className="list-title">
                <div className="list-number">
                    全部内容<span className="list-number-on">568</span>
                </div>
                <div className="list-timessort">
                    按时间排序<span className="timessort-pc"></span>
                </div>
                <div className="list-dload">
                    <Checkbox onChange={onChange}>
                        <span className="dload-pc"></span>
                        DOWNLOAD(<span>568</span>)
                    </Checkbox>                    
                </div>
            </div>
            <Routes>
            <Route path="snlistsingle" element={<SnListsingle />} />
            <Route path="snlist" element={<SnList />} />
            </Routes>
            <Myfooter />
        </>
    )
}

export default Screen