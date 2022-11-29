import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { ISearchProps } from "./search.types";

const SearchBar = (props: ISearchProps) => {
  const { handleSearch } = props;
  return (
    <form>
      <TextField id="search_bar" onInput={handleSearch} label="Search a Keyword" variant="outlined" placeholder="Search..." size="small" />
      <IconButton size="medium" aria-label="search">
        <SearchIcon style={{ fill: "blue" }} />
      </IconButton>
    </form>
  );
};

export default SearchBar;
