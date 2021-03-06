import { Menu, Typography, Select  } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import SubMenu from "antd/lib/menu/SubMenu";
import React from "react";
import {
  SettingTwoTone,
  BankOutlined,
  DesktopOutlined, 
  FormOutlined, 
  MonitorOutlined, 
  PieChartOutlined, 
  RadarChartOutlined, 
  TeamOutlined, 
  ToolOutlined, 
  WarningOutlined,
  BulbOutlined,
  SettingOutlined,
  SmileOutlined 
} from "@ant-design/icons";
const { Title } = Typography;

const SiteMenu = () => {
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={["sub10-1-1"]}
      mode="inline"
      style={{ height: "100%", borderRight: 0}}
    >
  <Menu.Item icon={<SmileOutlined style={{ padding: '45px', fontSize: '300%'}}/>}
                style={{ height: "50px", color:'white'}}            
       >
      </Menu.Item>
      
      <Menu.Item
                style={{ textAlign: 'center', fontSize: '18px',  paddingBottom: '20px', color:'white'}}
                
       >
           홍길동 님 <SettingTwoTone />
      </Menu.Item>
      <Select 
              style={{paddingLeft: '30px'}}
              defaultValue={"시스템관리자"}
              onChange={(value) => {
                console.log(`selected item ${value}`);
              }}
            >
              <Select.Option value="시스템관리자">시스템관리자</Select.Option>
              <Select.Option value="현업담당자">현업담당자</Select.Option>
              <Select.Option value="ITAC담당자">ITAC담당자</Select.Option>
              <Select.Option value="내부회계담당자">내부회계담당자</Select.Option>
              <Select.Option value="내부회계팀리더">내부회계팀리더</Select.Option>
              <Select.Option value="외부감사인">외부감사인</Select.Option>
              <Select.Option value="그룹리더">그룹리더</Select.Option>
              
            </Select>

      <Menu.Item key="3" icon={<BankOutlined  />}>
        Home
      </Menu.Item>

      <SubMenu icon={<PieChartOutlined  />} key="sub1" title="기준정보 관리">
        <SubMenu key="sub1-1" title="공통코드관리">
          <Menu.Item key="sub1-1-1">1</Menu.Item>
          <Menu.Item key="sub1-1-2">2</Menu.Item>
          <Menu.Item key="sub1-1-3">3</Menu.Item>
          <Menu.Item key="sub1-1-4">4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub1-2" title="조직정보관리">
          <Menu.Item key="sub1-2-1">1</Menu.Item>
          <Menu.Item key="sub1-2-2">2</Menu.Item>
          <Menu.Item key="sub1-2-3">3</Menu.Item>
          <Menu.Item key="sub1-2-4">4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub1-3" title="통제활동 관리">
          <Menu.Item key="sub1-3-1">평가연도 및 싸이클 관리</Menu.Item>
          <Menu.Item key="sub1-3-2">평가계획 관리</Menu.Item>
          <Menu.Item key="sub1-3-3">RCM조회</Menu.Item>
          <Menu.Item key="sub1-3-4">RCM관리(ELC)</Menu.Item>
          <Menu.Item key="sub1-3-4">RCM관리(PLC)</Menu.Item>
          <Menu.Item key="sub1-3-4">RCM관리(ITGC)</Menu.Item>
          <Menu.Item key="sub1-3-4">RCM담당자 관리</Menu.Item>
          <Menu.Item key="sub1-3-4">모집단관리</Menu.Item>
        </SubMenu>
        
      </SubMenu>


      <SubMenu icon={<BulbOutlined  />} key="sub2" title="평가계획 관리">
        <SubMenu key="sub2-1" title="평가계획 관리">
          <Menu.Item key="sub2-1-1">진도율</Menu.Item>
          <Menu.Item key="sub2-1-2">담당 통제 현황</Menu.Item>
          <Menu.Item key="sub2-1-3">공지사항</Menu.Item>
          <Menu.Item key="sub2-1-4">자료실</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2-2" title="RCM 관리">
          <Menu.Item key="sub2-2-1">진도율</Menu.Item>
          <Menu.Item key="sub2-2-2">담당 통제 현황</Menu.Item>
          <Menu.Item key="sub2-2-3">공지사항</Menu.Item>
          <Menu.Item key="sub2-2-4">자료실</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2-3" title="담당자 관리">
          <Menu.Item key="sub2-3-1">진도율</Menu.Item>
          <Menu.Item key="sub2-3-2">담당 통제 현황</Menu.Item>
          <Menu.Item key="sub2-3-3">공지사항</Menu.Item>
          <Menu.Item key="sub2-3-4">자료실</Menu.Item>
        </SubMenu>
        <MenuItem key="sub2-4">IT 시스템 담당자 관리</MenuItem>
        <Menu.Item key="sub2-5">모집단수/샘플수 관리</Menu.Item>
      </SubMenu>


      <SubMenu icon={<DesktopOutlined />} key="sub3" title="시스템관리">
        <SubMenu key="sub3-1" title="시스템관리">
          <Menu.Item key="sub3-1-1">1</Menu.Item>
          <Menu.Item key="sub3-1-2">2</Menu.Item>
          <Menu.Item key="sub3-1-3">3</Menu.Item>
          <Menu.Item key="sub3-1-4">4</Menu.Item>
        </SubMenu>
      </SubMenu>


      <SubMenu icon={<FormOutlined />} key="sub4" title="보고서 관리">
        <SubMenu key="sub4-1" title="보고서 관리">
          <Menu.Item key="sub4-1-1">1</Menu.Item>
          <Menu.Item key="sub4-1-2">2</Menu.Item>
          <Menu.Item key="sub4-1-3">3</Menu.Item>
          <Menu.Item key="sub4-1-4">4</Menu.Item>
        </SubMenu>
      </SubMenu>

      <SubMenu icon={<WarningOutlined />} key="sub5" title="미비점 관리">
        <SubMenu key="sub5-1" title="미비점 관리">
          <Menu.Item key="sub5-1-1">1</Menu.Item>
          <Menu.Item key="sub5-1-2">2</Menu.Item>
          <Menu.Item key="sub5-1-3">3</Menu.Item>
          <Menu.Item key="sub5-1-4">4</Menu.Item>
        </SubMenu>
      </SubMenu>

      <Menu.Item icon={<ToolOutlined />} key="6">설계평가</Menu.Item>
      <Menu.Item icon={<RadarChartOutlined />} key="7">운영평가</Menu.Item>
      <Menu.Item icon={<MonitorOutlined />} key="8">모니터링</Menu.Item>
      <Menu.Item icon={<TeamOutlined />} key="9">감사지원</Menu.Item>
    </Menu>
  );
};

export default SiteMenu;