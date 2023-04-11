import React, { useState } from "react";
import { Button, IconButton, InputBase, Paper } from "@mui/material";
import { useGlobalContext } from "../GlobalContext/Context";
import { searchSx as sx } from "./styles";

function Search() {
  const { searchByName } = useGlobalContext();
  const [search, setSearch] = useState("");
  const submitSearch = () => {
    searchByName(search);
  };
  return (
    <Paper component="form" sx={sx.boxSearch}>
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

      <Button sx={sx.btnSearch} onClick={submitSearch}>
        Search
      </Button>
    </Paper>
  );
}

export default Search;
