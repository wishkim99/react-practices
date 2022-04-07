import { Breadcrumb } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";

import MyTable from "../MyTable";

const SiteContent = ({ test }) => {
  return (
    <Content style={{ margin: "0 16px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>{test}</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        Bill is a cat.
        <MyTable />
      </div>
    </Content>
  );
};

export default SiteContent;
