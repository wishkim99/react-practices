import { LaptopOutlined } from '@ant-design/icons';
import { Layout, Menu, Select, Typography } from "antd";
import React from "react";
import '../../assets/css/App.css';



const { SubMenu } = Menu;
const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;


const SiteHeader = () => {
  return (
    <React.Fragment>
      <Layout>
          <Header style={{padding:15}}>
          <Title style={{color:'white', float:'left'}} level={3}><LaptopOutlined />With POSCO  | 내부회계관리 시스템</Title>    
          
          <Menu
            theme="dark"
            defaultSelectedKeys={["sub10-1-1"]}
            style={{ height: "0", marginLeft: '30px', marginRight: '800px'}}
          >
            <Menu.Item
                        style={{ paddingLeft: '160px',  fontSize: '15px',  color:'white'}}            
              >
                포스코 ITGC실 ITAC그룹 AC섹션 홍길동 님
              </Menu.Item>
            </Menu>

            <Select
                style={{padding:5, float:'right'}}
                defaultValue={"한국어"}
                onChange={(value) => {
                  console.log(`selected item ${value}`);
                }}
              >
              <Select.Option value="ko">한국어</Select.Option>
              <Select.Option value="en">English</Select.Option>
              <Select.Option value="cn">中文</Select.Option>
            </Select>

            <Select
              style={{padding:5, float:'right'}}
              defaultValue={"2021년"}
              onChange={(value) => {
                console.log(`selected item ${value}`);
              }}
            >
              <Select.Option value="2021">2021년</Select.Option>
              <Select.Option value="2020">2020년</Select.Option>
              <Select.Option value="2019">2019년</Select.Option>
              <Select.Option value="2018">2018년</Select.Option>
            </Select>
            <Select
              style={{padding:5, float:'right'}}
              defaultValue={"포스코"}
              onChange={(value) => {
                console.log(`selected item ${value}`);
              }}
            >
              <Select.Option value="p">포스코</Select.Option>
              <Select.Option value="pict">포스코ICT</Select.Option>
              <Select.Option value="pb">포스코건설</Select.Option>
              <Select.Option value="pi">포스코인터네셔널</Select.Option>
            </Select>
          </Header>
        </Layout>
  </React.Fragment>
  );
};

export default SiteHeader;
