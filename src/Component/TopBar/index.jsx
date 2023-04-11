import { Box, Typography, Tabs, Tab } from "@mui/material";
import React, { useState } from "react";
import CustomerTabs from "../CustomerTabs";
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
    <Box
      sx={{
        display: "flex",
        // bgcolor: "gold",
        width: "100%",
        borderBottom: "1px solid gray",
        padding: "20px",
        paddingBottom: "0",
      }}
    >
      <Box
        sx={{
          //   bgcolor: "dodgerblue",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider", display: "flex" }}>
          <Box
            sx={{
              //   bgcolor: "salmon",
              display: "flex",
              flexDirection: "column",
              flex: 1,
              paddingBottom: "20px",
            }}
          >
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "24px",
              }}
            >
              Customer
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#98949E",
              }}
            >
              You can manage and organize your customer and other things here
            </Typography>
          </Box>

          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              display: "flex",
              flex: 1,
              alignItems: "end",
            }}
          >
            <Tab
              label="Customer"
              sx={{
                display: "flex",
                flex: 1,
                fontSize: "14px",
                fontWeight: "600",
                color: "#98949E",
              }}
            />
            <Tab
              label="Promo"
              sx={{
                display: "flex",
                flex: 1,
                fontSize: "14px",
                fontWeight: "600",
                color: "#98949E",
              }}
            />
            <Tab
              label="Voucer"
              sx={{
                display: "flex",
                flex: 1,
                fontSize: "14px",
                fontWeight: "600",
                color: "#98949E",
              }}
            />
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
