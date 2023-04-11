import React, { useState } from "react";
import { Button, IconButton, InputBase, Paper } from "@mui/material";
import { useGlobalContext } from "../GlobalContext/Context";

function Search() {
  const { searchByName } = useGlobalContext();
  const [search, setSearch] = useState("");
  const submitSearch = () => {
    searchByName(search);
  };
  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: "400px",
        height: "45px",
        borderRadius: "8px",
      }}
    >
      <IconButton>
        <img src="../../../image/iconBanner/search-normal.svg" />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Customer"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <Button
        sx={{
          width: "78px",
          height: "37px",
          bgcolor: "#5D5FEF",
          color: "#fff",
          fontSize: "14px",
          fontWeight: "500",
          marginRight: "7px",
          borderRadius: "8px",
        }}
        onClick={submitSearch}
      >
        Search
      </Button>
    </Paper>
  );
}

export default Search;
