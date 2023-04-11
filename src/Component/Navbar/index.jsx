import React from "react";

import { Box, Typography, colors } from "@mui/material";
import { navbarSx as sx } from "./styles";

function Navbar() {
  const NavHome = [
    {
      id: "1",
      img: "../../../image/category-2.svg",
      title: " Dashboard",
    },
    {
      id: "2",
      img: "../../../image/battery-full.svg",
      title: "Stock",
    },
    {
      id: "3",
      img: "../../../image/profile-2user.svg",
      title: "Costumer",
    },
    {
      id: "4",
      img: "../../../image/reserve.svg",
      title: "reataurant",
    },
    {
      id: "5",
      img: "../../../image/mouse-square.svg",
      title: "Design",
    },
    {
      id: "6",
      img: "../../../image/document-normal.svg",
      title: "Report",
    },
    {
      id: "7",
      img: "../../../image/user-square.svg ",
      title: "Role & admin",
    },
    {
      id: "8",
      img: "../../../image/candle.svg",
      title: "Settings",
    },
  ];

  const NavIntegration = [
    {
      id: "1",
      img: "../../../image/shopping-cart.svg",
      title: "Stock",
    },
    {
      id: "2",
      img: "../../../image/truck.svg",
      title: "Supply",
    },
  ];

  return (
    <Box sx={sx.bodyNavbar}>
      <Box sx={sx.containerNavbar}>
        <Box>
          <Box>
            <img src="../../../image/Logo.svg" />
          </Box>
          <Box sx={sx.homeMenuNav}>
            <Typography sx={sx.titleMenu}>Menu</Typography>
            {NavHome.map((item) => (
              <Box sx={sx.homeNav}>
                <img src={item.img} sx={sx.iconNav} />
                <p> {item.title}</p>
              </Box>
            ))}

            <Typography sx={sx.titleMenu}>Integration</Typography>
            {NavIntegration.map((item) => (
              <Box sx={sx.integrationNav}>
                <img src={item.img} />
                <p> {item.title}</p>
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={sx.userNavbar}>
          <Box sx={sx.navbarProfile}>
            <img src="../../../image/Frame.svg" />
            <Box sx={sx.userTitle}>
              <Typography sx={sx.nameTitle}>Savannah N</Typography>
              <Typography sx={sx.jobTitle}> Food Quality Manager</Typography>
            </Box>
          </Box>
          <Box sx={sx.buttonLogout}>
            <img src="../../../image/logout.svg" />
            <p>Logout</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
