import React from "react";
import { sideBarSx as sx } from "./styles";
import { Box, Button, Typography } from "@mui/material";

function SideBar() {
  return (
    <Box sx={sx.bodySidebar}>
      <Box sx={sx.containerSidebar}>
        <Box sx={sx.bannerSidebar}>
          <Box sx={sx.textAnalytics}>
            <Typography sx={sx.analytic}>
              See analytics of the Customer Clearly
            </Typography>
          </Box>
          <Box sx={sx.buttonAnalytic}>
            <Button sx={sx.buttonSidebar}>See analytics</Button>
          </Box>
          <Box sx={sx.circle1}></Box>
          <Box sx={sx.circle2}></Box>
          <Box sx={sx.circle3}></Box>
        </Box>
        <Box sx={sx.menuSidebar}>
          <Box sx={sx.menuTextSidebar}>
            <Box sx={sx.sideTitle}>
              <Box sx={sx.textSide}>
                <Typography sx={sx.topMenu}>Top Menu</Typography>
                <Typography sx={sx.thisWeek}>This Week</Typography>
              </Box>
              <Typography
                //
                sx={sx.dateSide}
              >
                10 - 12 Agustus 2023
              </Typography>
            </Box>

            <Box
              //
              sx={sx.sideSpesialMenu}
            >
              <Box sx={sx.firstSpesialMenu}>
                <Typography sx={sx.titleFirst}> Nasi Goreng Jamur</Typography>
                <Typography sx={sx.spesial}> Spesial Resto Pak Min</Typography>
                <Box sx={sx.no1}>1</Box>
              </Box>
              <Box sx={sx.sideSpesialMenuMenu}>
                <Typography>2. Tongseng Sapi Gurih</Typography>
                <Typography>3. Nasi Gudeg Telur Ceker</Typography>
                <Typography>4. Nasi Ayam Serundeng</Typography>
                <Typography>5. Nasi Goreng Seafood</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={sx.iconGrafik}>
            <img src="../../../image/Vector.svg" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SideBar;
