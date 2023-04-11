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
      <Box
        sx={{
          bgcolor: "#5D5FEF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          // gap: "20px",
          height: " 167px",
          padding: "20px",
          borderRadius: "8px",
          backgroundImage:
            "url('../../../image/iconBanner/unsplash_wtevVfGYwnM.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "60%",
          backgroundPositionX: "right",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#fff",
            }}
          >
            {" "}
            Customer
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              width: "341px",
              height: "48px",
              color: "#fff",
            }}
          >
            On this menu you will be able to create, edit, and also delete the
            customer. Also you can manage it easily.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "20px",
            // backgroundColor: "yellow",
          }}
        >
          <Box>
            <Button
              sx={{
                color: "#fff",
                fontSize: "14px",
                fontWeight: "600",
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "8px",
                width: " 200px",
                height: " 45px",
                display: "flex",
                gap: "12px",
              }}
              onClick={handleOpen}
            >
              <img src="../../../image/iconBanner/Vector.svg" />
              Add New Customer
            </Button>
          </Box>
          <Box>
            <Search />
          </Box>
          <Box>
            <Button
              sx={{
                color: "#fff",
                fontSize: "14px",
                fontWeight: "600",
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "8px",
                width: " 120px",
                height: "45px",
                display: "flex",
                gap: "12px",
              }}
            >
              <img src="../../../image/iconBanner/filter.svg" />
              Filter
            </Button>{" "}
          </Box>
          <Box>
            <Button
              sx={{
                color: "#fff",
                fontSize: "14px",
                fontWeight: "600",
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "8px",
                width: " 120px",
                height: " 45px",
                display: "flex",
                gap: "12px",
              }}
            >
              <img src="../../../image/iconBanner/refresh-2.svg" />
              Refresh
            </Button>
          </Box>
          <Box>
            <Button
              sx={{
                color: "#fff",
                fontSize: "14px",
                fontWeight: "600",
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "8px",
                width: " 48px",
                height: " 45px",
              }}
            >
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
