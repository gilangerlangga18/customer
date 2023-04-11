import { Box, Pagination, Stack, Typography } from "@mui/material";
import React from "react";
import { pagenationSx as sx } from "./styles";

function TablePage({ totalPage, pageNow, handleChangePage, dataShow }) {
  return (
    <Box sx={sx.containerPage}>
      <Box sx={sx.pageBox}>
        <Typography sx={sx.textPage}>
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
