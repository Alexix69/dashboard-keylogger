import React from "react";
import Button from "@mui/material/Button";
import RefreshIcon from "@mui/icons-material/Refresh";

const RefreshContentButton = ({ setConfirmationButton }) => {
  return (
    <Button onClick={setConfirmationButton}>
      <RefreshIcon />
    </Button>
  );
};

export default RefreshContentButton;
