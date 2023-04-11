import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../GlobalContext/Context";

function ModalNewCustomer({ close, isOpen, isEditId }) {
  const { data, updateData, addNewDataCustomer } = useGlobalContext();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    height: "auto",
    bgcolor: "background.paper",
    boxShadow: "0 1px 8px rgba(0, 0, 0, 0.15)",
    BorderRadius: 5,
    p: 4,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const [name, setName] = React.useState("");
  const [favorit, setFavorit] = React.useState("");
  const [total, setTotal] = React.useState("");
  const [level, setLevel] = React.useState("");

  const isDisabled =
    name === "" || favorit === "" || total === "" || level === "";

  const handleChange = (event) => {
    setLevel(event.target.value);
  };

  const submitData = () => {
    if (isEditId) {
      updateData({
        id: isEditId,
        name,
        favorit,
        total,
        level,
      });
    } else {
      addNewDataCustomer(name, level, total, favorit);
    }
    setName("");
    setFavorit("");
    setTotal("");
    setLevel("");
    close();
  };

  useEffect(() => {
    if (isEditId) {
      const calledData = data.find((item) => item.id === isEditId);
      setName(calledData.name);
      setLevel(calledData.level);
      setFavorit(calledData.favorit);
      setTotal(calledData.total);
    }
  }, [isEditId]);

  return (
    <Modal
      open={isOpen}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography>{isEditId ? `Edit Customer` : "New Customer"}</Typography>
        <TextField
          placeholder=" Name Customer "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          placeholder=" Favorite Menu  "
          value={favorit}
          onChange={(e) => setFavorit(e.target.value)}
        />
        <TextField
          placeholder=" Total Transaction "
          value={total}
          onChange={(e) => setTotal(e.target.value)}
        />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Level</InputLabel>
          <Select
            value={level}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            label="Level"
            sx={{
              width: "150px",
            }}
          >
            <MenuItem value={"Warga"}>Warga</MenuItem>
            <MenuItem value={"Sultan"}>Sultan</MenuItem>
            <MenuItem value={"Juragan"}>Juragan</MenuItem>
            <MenuItem value={"Konglomerat"}>Konglomerat</MenuItem>
          </Select>
        </FormControl>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              width: "100px",
              height: "40px",
              boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.09)",
              color: "black",
            }}
            disabled={isDisabled}
            onClick={submitData}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default ModalNewCustomer;
