import { Box, Typography, Tabs, Tab } from "@mui/material";
import React, { useState } from "react";
import CustomerTabs from "../CustomerTabs";
import { topbarSx as sx } from "./styles";
// import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box>
      {value === index && (
        <Box sx={{ paddingTop: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

function TopBar() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={sx.bodytopbar}>
      <Box sx={sx.containerTop}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", display: "flex" }}>
          <Box sx={sx.textTop}>
            <Typography sx={sx.textCustomer}>Customer</Typography>
            <Typography sx={sx.textTopBar}>
              You can manage and organize your customer and other things here
            </Typography>
          </Box>

          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={sx.tabTop}
          >
            <Tab label="Customer" sx={sx.tabs} />
            <Tab label="Promo" sx={sx.tabs} />
            <Tab label="Voucer" sx={sx.tabs} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <CustomerTabs />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Promo
        </TabPanel>
        <TabPanel value={value} index={2}>
          Voucer
        </TabPanel>
      </Box>
    </Box>
  );
}

export default TopBar;
