import React from 'react';
import { Outlet } from 'react-router';
import SiteLayout from "../../layout/SiteLayout";
import Navigation from './Navigation';
//router 설정한 component가 자동으로 outlet에 꽂힘

export default function About() {
    return (
        <SiteLayout>
            <Navigation />
            <Outlet/>
        </SiteLayout>
    );
}