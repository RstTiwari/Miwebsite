import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import './Search.css'
export default function Search() {

  const openWhatsApp = () => {
    const phoneNumber = "8767948130"; // Replace with your phone number
    const message = "Hello, I have a query about the project."; // Replace with your message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <>
    <div className="testborder">
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
          <button className="query-button" onClick={openWhatsApp}
           style={{width: 200 , backgroundColor: "#c96240" ,borderRadius : 70}}>Add  Your Query</button>
        </div>

    </div>
    <div className="title-sections">
        <h1>MERAKI PROJECT</h1>
        <p>DIY / TECHNOLOGY / LEARNING</p>
      </div>
      </div>

    </>
  );
}