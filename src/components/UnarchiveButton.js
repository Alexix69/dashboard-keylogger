import * as React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import UnarchiveIcon from "@mui/icons-material/Unarchive";

import { blue } from "@mui/material/colors";
import Button from "@mui/material/Button";
import ArchiveIcon from "@mui/icons-material/Archive";

import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";
import Utils from "../utils/utils";
import { useState } from "react";

export default function ArchiveButton({ indexOfReport, confirmRequestUpdate }) {
  const [loading, setLoading] = useState(false);
  // const [success, setSuccess] = React.useState(false);
  // const timer = React.useRef();

  // const buttonSx = {
  //   ...(success && {
  //     bgcolor: blue,
  //     "&:hover": {
  //       bgcolor: blue,
  //     },
  //   }),
  // };

  // React.useEffect(() => {
  //   return () => {
  //     clearTimeout(timer.current);
  //   };
  // }, []);

  const handleButtonClick = () => {
    console.log("index of report", indexOfReport);
    console.log("valor de loading", loading);

    if (!loading) {
      // setSuccess(false);
      setLoading(true);
      // timer.current = window.setTimeout(() => {
      //   setSuccess(true);
      //   setLoading(false);
      // }, 2000);
      Utils.removeFromTheList(indexOfReport).then(() => {
        console.log("TERMINO ARCHIVACION");
        // confirmRequestUpdate();
        setLoading(false);
      });
    }
  };

  return (
    // <Box sx={{ display: "flex", alignItems: "center" }}>
    <Box sx={{ m: 0, position: "relative" }}>
      <Button
        // variant="outlined"
        startIcon={<UnarchiveIcon />}
        // sx={buttonSx}
        disabled={loading}
        onClick={handleButtonClick}
      >
        Desarchivar registro
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
    // </Box>
  );
}
