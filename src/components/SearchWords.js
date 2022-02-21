import React from "react";
import { Input } from "antd";

const { Search } = Input;
const SearchWords = () => {
  return (
    <Search
      value
      placeholder="Ingrese una palabra"
      enterButton="Search"
      size="large"
      loading={false}
      numberFromSearch={5}
    />
  );
};

export default SearchWords;
