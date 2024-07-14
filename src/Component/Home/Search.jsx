import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import './Search.css'
export default function Search() {
  return (
    <>
    <div className="main-input">
        <div className="inside-input">
          <Input
            placeholder="Mechanical Project"
            suffix={<SearchOutlined />}
            style={{ height: 45,
              width:250,
              borderRadius : 10}}
          />
        </div>

        <div className="inside-input">
          <Input
            placeholder="Electronic Project"
            suffix={<SearchOutlined />}
            style={{ height: 45,
              width:250,
              borderRadius : 10}}
          />
        </div>

        <div className="inside-input">
          <Input
            placeholder="Software Project"
            suffix={<SearchOutlined />}
            style={{ height: 45,
              width:250,
              borderRadius : 10}}
          />
        </div>

        <div>
          <button className="query-button"
           style={{width: 200 , backgroundColor: "#c96240" ,borderRadius : 70}}>Add  Your Query</button>
        </div>

    </div>
    <div className="title-sections">
        <h1>MERAKI PROJECT</h1>
        <p>DIY / TECHNOLOGY / LEARNING</p>
      </div>

    </>
  );
}
