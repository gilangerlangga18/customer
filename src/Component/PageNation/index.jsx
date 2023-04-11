import { Box, Pagination, Stack, Typography } from "@mui/material";
import React from "react";

function TablePage({ totalPage, pageNow, handleChangePage, dataShow }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "50px",
        background: "#FAFAFA",
        borderRadius: "8px",
        alignItems: "center",
        marginTop: "70px",
        marginBottom: "24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "90%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "16px",
            color: "#98949E",
          }}
        >
          Showing {dataShow} Data Customers
        </Typography>
        <Stack>
          <Pagination
            count={totalPage}
            shape="rounded"
            page={pageNow}
            onChange={(_, page) => handleChangePage(page)}
            hidePrevButton={pageNow === 1}
            hideNextButton={pageNow === totalPage}
          />
        </Stack>
      </Box>
    </Box>
  );
}

export default TablePage;
