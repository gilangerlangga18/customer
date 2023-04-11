import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Table,
  Button,
  Typography,
  Box,
} from "@mui/material";
import React, { useEffect } from "react";
import TablePage from "../PageNation";
import { useGlobalContext } from "../GlobalContext/Context";
import ModalNewCustomer from "../ModalNewCustpmer";
import { tableSx as sx } from "./styles";

function DataTable() {
  const { data, getData, deleteData } = useGlobalContext();
  const [isEditId, setIsEdit] = React.useState(false);
  const closeModalEdit = () => {
    setIsEdit(false);
  };
  const openEdit = (id) => {
    setIsEdit(id);
  };

  const [page, setPage] = React.useState(1);
  const [dataRow, setDataRow] = React.useState([]);

  const handleChangePage = (newPage) => {
    setPage(newPage);
    const lastEnd = newPage * 10;
    setDataRow(data.slice(lastEnd - 10, lastEnd));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setDataRow(data.slice(0, 10));
    setPage(1);
  }, [data]);

  return (
    <>
      <Paper>
        <TableContainer component={Paper} sx={sx.tableContainer}>
          <Table aria-label="simple table">
            <TableHead
              sx={{
                backgroundColor: "#FAFAFA",
              }}
            >
              <TableRow sx={sx.borderNone}>
                <TableCell
                  justifyContent="center"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "none !important",
                  }}
                >
                  <Typography>Customer Name</Typography>
                  <img src="../../../image/iconBanner/Vectortable.svg" />
                </TableCell>
                <TableCell sx={sx.borderNone}>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography> Level </Typography>
                    <img src="../../../image/iconBanner/Vectortable.svg" />{" "}
                  </Typography>
                </TableCell>
                <TableCell sx={sx.borderNone}>
                  <Typography sx={sx.spaceBw}>
                    <Typography>Favorite Menu</Typography>

                    <img src="../../../image/iconBanner/Vectortable.svg" />
                  </Typography>
                </TableCell>
                <TableCell sx={sx.borderNone}>
                  <Typography sx={sx.spaceBw}>
                    {" "}
                    <Typography>Total Transaction</Typography>
                    <img src="../../../image/iconBanner/Vectortable.svg" />
                  </Typography>
                </TableCell>
                <TableCell sx={sx.borderNone}>
                  <Typography sx={sx.centerText}>
                    {" "}
                    <Typography>Action</Typography>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataRow.map((row) => (
                <TableRow key={row.title}>
                  <TableCell component="th" scope="row" sx={sx.tableRow}>
                    {row.name}
                  </TableCell>
                  <TableCell align="center" sx={sx.borderNone}>
                    {row.level === "Warga" ? (
                      <Typography sx={sx.warga}>{row.level}</Typography>
                    ) : row.level === "Sultan" ? (
                      <Typography sx={sx.sultan}>{row.level}</Typography>
                    ) : row.level === "Juragan" ? (
                      <Typography sx={sx.juragan}>{row.level}</Typography>
                    ) : (
                      <Typography sx={sx.konglomerat}>{row.level}</Typography>
                    )}
                  </TableCell>
                  <TableCell align="center" sx={sx.tableRow}>
                    {row.favorit}
                  </TableCell>
                  <TableCell align="center" sx={sx.tableRow}>
                    {row.total}
                  </TableCell>
                  <TableCell align="center" sx={sx.borderNone}>
                    <Box
                      sx={{
                        display: "flex",
                        // padding: "20px",
                        justifyContent: "space-around",
                      }}
                    >
                      <Button sx={sx.btnDetail}>
                        <img src="../../../image/iconTable/shield-search.svg" />{" "}
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: "600",
                          }}
                        >
                          {" "}
                          detail
                        </Typography>
                      </Button>
                      <Button sx={sx.btnEdit} onClick={() => openEdit(row.id)}>
                        <img src="../../../image/iconTable/edit-2.svg" />
                      </Button>
                      <Button sx={sx.btnDlt} onClick={() => deleteData(row.id)}>
                        {" "}
                        <img src="../../../image/iconTable/trash.svg" />
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePage
          dataShow={dataRow.length}
          pageNow={page}
          handleChangePage={handleChangePage}
          totalPage={Math.ceil(data.length / 10)}
        />
      </Paper>
      <ModalNewCustomer
        close={closeModalEdit}
        isOpen={isEditId !== false}
        isEditId={isEditId}
      />
    </>
  );
}

export default DataTable;
