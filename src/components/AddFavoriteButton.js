import React from "react";
import Button from "@mui/material/Button";
import ArchiveIcon from "@mui/icons-material/Archive";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const AddFavoriteButton = ({ handleClose, loading }) => {
  return (
    <Box sx={{ m: 0, position: "relative" }}>
      <Button
        // variant="outlined"
        // startIcon={<ArchiveIcon />}
        // sx={buttonSx}
        disabled={loading}
        onClick={handleClose}
      >
        Añadir
      </Button>
      {loading && (
        <CircularProgress
          size={24}
          sx={{
            // color: green[500],
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "-12px",
            marginLeft: "-12px",
          }}
        />
      )}
    </Box>
  );
};

export default AddFavoriteButton;
