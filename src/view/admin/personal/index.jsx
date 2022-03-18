import React from 'react';

import { useBackground } from '../../../libs/hooks'
import Myheader from '../../../components/home/header/index'
import Footer from '../../../components/home/footer/index'
import CourseBaner from '../../../common/component/course/courseBaner'

const Personal = () => {
    useBackground('#f7f7f7');
    return (
        <>
            <Myheader />
            <CourseBaner />
            <div className="course-column">
                
            </div>
            <Footer />
        </>
    )
}
export default Personal
