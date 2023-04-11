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
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none !important",
            marginTop: "20px",
          }}
        >
          <Table aria-label="simple table">
            <TableHead
              sx={{
                backgroundColor: "#FAFAFA",
              }}
            >
              <TableRow
                sx={{
                  border: "none !important",
                }}
              >
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
                <TableCell
                  sx={{
                    borderBottom: "none !important",
                  }}
                >
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
                <TableCell
                  sx={{
                    borderBottom: "none !important",
                  }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography>Favorite Menu</Typography>

                    <img src="../../../image/iconBanner/Vectortable.svg" />
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "none !important",
                  }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {" "}
                    <Typography>Total Transaction</Typography>
                    <img src="../../../image/iconBanner/Vectortable.svg" />
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "none !important",
                  }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                    <Typography>Action</Typography>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataRow.map((row) => (
                <TableRow key={row.title}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      borderBottom: "none !important",
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderBottom: "none !important",
                    }}
                  >
                    {row.level === "Warga" ? (
                      <Typography
                        sx={{
                          width: "93px",
                          height: "37px",
                          bgcolor: "#FEFBF6",
                          color: "#F46B45",
                          borderRadius: "4px",
                          fontSize: "14px",
                          fontWeight: "600",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {row.level}
                      </Typography>
                    ) : row.level === "Sultan" ? (
                      <Typography
                        sx={{
                          width: "104px",
                          height: "37px",
                          bgcolor: "#F6FCFE",
                          color: "#11998E",
                          borderRadius: "4px",
                          fontSize: "14px",
                          fontWeight: "600",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {row.level}
                      </Typography>
                    ) : row.level === "Juragan" ? (
                      <Typography
                        sx={{
                          width: "93px",
                          height: "37px",
                          bgcolor: "#F6FCFE",
                          color: "#2F80ED",
                          borderRadius: "4px",
                          fontSize: "14px",
                          fontWeight: "600",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {row.level}
                      </Typography>
                    ) : (
                      <Typography
                        sx={{
                          width: "135px",
                          height: "37px",
                          bgcolor: " #FEF5FF",
                          color: "#7F00FF",
                          borderRadius: "4px",
                          fontSize: "14px",
                          fontWeight: "600",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {row.level}
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      borderBottom: "none !important",
                    }}
                  >
                    {row.favorit}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      borderBottom: "none !important",
                    }}
                  >
                    {row.total}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderBottom: "none !important",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        // padding: "20px",
                        justifyContent: "space-around",
                      }}
                    >
                      <Button
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "89.8px",
                          height: "29px",
                          color: "black",
                          bgcolor: "#FAFAFA",
                          gap: "8px",
                        }}
                      >
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
                      <Button
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "30px",
                          height: "29px",
                          color: "black",
                          bgcolor: "#FAFAFA",
                        }}
                        onClick={() => openEdit(row.id)}
                      >
                        <img src="../../../image/iconTable/edit-2.svg" />
                      </Button>
                      <Button
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "30px",
                          height: "29px",
                          color: "black",
                          bgcolor: "#FEF5F6",
                        }}
                        onClick={() => deleteData(row.id)}
                      >
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
