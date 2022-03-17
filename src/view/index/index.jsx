import React from "react";
import Myheader from "../../components/home/header/index"
import Banner from "../../components/home/banner/index"
import Contents from "../../components/home/contents/index"
import Myfooter from "../../components/home/footer/index"
const Index = () => {

    return (
        <>
        <div>
            <Myheader />
            <Banner />
            <Contents />
            <Myfooter />
        </div>
        </>
    )
}
export default Index;