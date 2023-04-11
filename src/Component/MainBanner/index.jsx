import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Search from "../Search";
import { bannerSx as sx } from "./styles";
import ModalNewCustomer from "../ModalNewCustpmer";

function BannerMain() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Box sx={sx.containerBanner}>
        <Box>
          <Typography sx={sx.customerText}> Customer</Typography>
          <Typography sx={sx.textBAnner}>
            On this menu you will be able to create, edit, and also delete the
            customer. Also you can manage it easily.
          </Typography>
        </Box>
        <Box sx={sx.conatinerButton}>
          <Box>
            <Button sx={sx.ButtonNewCs} onClick={handleOpen}>
              <img src="../../../image/iconBanner/Vector.svg" />
              Add New Customer
            </Button>
          </Box>
          <Box>
            <Search />
          </Box>
          <Box>
            <Button sx={sx.BtnFilter}>
              <img src="../../../image/iconBanner/filter.svg" />
              Filter
            </Button>{" "}
          </Box>
          <Box>
            <Button sx={sx.btnRefresh}>
              <img src="../../../image/iconBanner/refresh-2.svg" />
              Refresh
            </Button>
          </Box>
          <Box>
            <Button sx={sx.btnPrint}>
              <img src="../../../image/iconBanner/printer.svg" />
            </Button>
          </Box>
        </Box>
      </Box>
      <ModalNewCustomer close={handleClose} isOpen={open} />
    </Box>
  );
}

export default BannerMain;
