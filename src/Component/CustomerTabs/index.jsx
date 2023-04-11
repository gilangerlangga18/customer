import { Box } from "@mui/material";
import React from "react";
import DataTable from "../Tabble";
import BannerMain from "../MainBanner";
import SideBar from "../Sidebar";

function CustomerTabs() {
  return (
    <Box display={"flex"} gap={"26px"}>
      <Box flex={1}>
        <BannerMain />
        <DataTable />
      </Box>
      <SideBar />
    </Box>
  );
}

export default CustomerTabs;
