import React from "react";
import {UserOutlined} from "@ant-design/icons";
import {HeartOutlined} from "@ant-design/icons";
import {SearchOutlined} from "@ant-design/icons";

import "../src/styles/multikart.css";
const Start=()=> {
return(

<div className="header">
        
      
        <p>HOME</p>
        <p>SHOP</p>
        <p>PRODUCTS</p>
        <p>FEATURES</p>
        <p>PAGES</p>
        <p>BLOGS</p>
        <p><UserOutlined /></p>
        <p><HeartOutlined /></p>
        <p><SearchOutlined /></p>
        

     
       
    </div>
)
}
export default Start;