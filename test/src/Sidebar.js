import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem
} from 'cdbreact';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            홍길동 님
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
          <Nav.Link href="#pricing"></Nav.Link>								
          <CDBSidebarMenuItem icon="columns">
           <NavDropdown title="기준정보 관리" id="collasible-nav-dropdown">	
            <CDBSidebarMenuItem icon="table">담당 통제 현황</CDBSidebarMenuItem>				
            <CDBSidebarMenuItem icon="table">공지사항</CDBSidebarMenuItem>			
            <CDBSidebarMenuItem icon="table">자료실</CDBSidebarMenuItem>			
            <CDBSidebarMenuItem icon="table">RCM 관리</CDBSidebarMenuItem>			
            <CDBSidebarMenuItem icon="table">담당자 관리</CDBSidebarMenuItem>			
            <CDBSidebarMenuItem icon="table">IT 시스템 담당자 관리</CDBSidebarMenuItem>			
            <CDBSidebarMenuItem icon="table">모집단수/샘플수 관리</CDBSidebarMenuItem>			
          </NavDropdown>
          </CDBSidebarMenuItem>	

          <CDBSidebarMenuItem icon="table">
           <NavDropdown title="평가계획 관리" id="collasible-nav-dropdown">	
            <CDBSidebarMenuItem icon="table">담당 통제 현황</CDBSidebarMenuItem>				
            <CDBSidebarMenuItem icon="table">공지사항</CDBSidebarMenuItem>			
            <CDBSidebarMenuItem icon="table">자료실</CDBSidebarMenuItem>			
            <CDBSidebarMenuItem icon="table">RCM 관리</CDBSidebarMenuItem>			
            <CDBSidebarMenuItem icon="table">담당자 관리</CDBSidebarMenuItem>			
            <CDBSidebarMenuItem icon="table">IT 시스템 담당자 관리</CDBSidebarMenuItem>			
            <CDBSidebarMenuItem icon="table">모집단수/샘플수 관리</CDBSidebarMenuItem>			
          </NavDropdown>
          </CDBSidebarMenuItem>	

          <CDBSidebarMenuItem icon="exclamation-circle">
           <NavDropdown title="시스템 관리" id="collasible-nav-dropdown">	
            <CDBSidebarMenuItem icon="table">담당 통제 현황</CDBSidebarMenuItem>				
            <CDBSidebarMenuItem icon="table">공지사항</CDBSidebarMenuItem>			
            <CDBSidebarMenuItem icon="table">자료실</CDBSidebarMenuItem>			
            <CDBSidebarMenuItem icon="table">RCM 관리</CDBSidebarMenuItem>			
            <CDBSidebarMenuItem icon="table">담당자 관리</CDBSidebarMenuItem>			
            <CDBSidebarMenuItem icon="table">IT 시스템 담당자 관리</CDBSidebarMenuItem>			
            <CDBSidebarMenuItem icon="table">모집단수/샘플수 관리</CDBSidebarMenuItem>			
          </NavDropdown>
          </CDBSidebarMenuItem>	

          <CDBSidebarMenuItem icon="user">
           <NavDropdown title="보고서 관리" id="collasible-nav-dropdown">	
            <CDBSidebarMenuItem icon="table">담당 통제 현황</CDBSidebarMenuItem>				
            <CDBSidebarMenuItem icon="table">공지사항</CDBSidebarMenuItem>			
            <CDBSidebarMenuItem icon="table">자료실</CDBSidebarMenuItem>			
            <CDBSidebarMenuItem icon="table">RCM 관리</CDBSidebarMenuItem>			
            <CDBSidebarMenuItem icon="table">담당자 관리</CDBSidebarMenuItem>			
            <CDBSidebarMenuItem icon="table">IT 시스템 담당자 관리</CDBSidebarMenuItem>			
            <CDBSidebarMenuItem icon="table">모집단수/샘플수 관리</CDBSidebarMenuItem>			
          </NavDropdown>
          </CDBSidebarMenuItem>	

          <CDBSidebarMenuItem icon="chart-line">
           <NavDropdown title="시스템 관리" id="collasible-nav-dropdown">	
            <CDBSidebarMenuItem icon="table">담당 통제 현황</CDBSidebarMenuItem>				
            <CDBSidebarMenuItem icon="table">공지사항</CDBSidebarMenuItem>			
            <CDBSidebarMenuItem icon="table">자료실</CDBSidebarMenuItem>			
            <CDBSidebarMenuItem icon="table">RCM 관리</CDBSidebarMenuItem>			
            <CDBSidebarMenuItem icon="table">담당자 관리</CDBSidebarMenuItem>			
            <CDBSidebarMenuItem icon="table">IT 시스템 담당자 관리</CDBSidebarMenuItem>			
            <CDBSidebarMenuItem icon="table">모집단수/샘플수 관리</CDBSidebarMenuItem>			
          </NavDropdown>
          </CDBSidebarMenuItem>	
    

   
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;