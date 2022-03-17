import React from "react";
import './course.css'
import Background from '../../../common/image/cs-baner.png'
const SectionStyle = {
    width: '100%',
    height: '240px',
    background: `url(${Background}) no-repeat center center fixed`,
    backgroundSize: 'cover',
}

const CourseBaner = () => {

    return (
        <>
            <div style={SectionStyle} className="coursed-banner">
                <div className="coursed-tent">
                    <div className="coursed-tle">Sales Partner Academy</div>
                    <div className="coursed-rln">当前位置：<span className="coursed-index">首页</span> - <span>Sales Partner Academy</span></div>
                </div>
            </div>
        </>
    )
}

export default CourseBaner