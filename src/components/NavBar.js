import * as React from "react";
import Link from "next/link";
import { alpha, styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useRouter } from "next/router";
import { Container, Grid } from "@mui/material";
import { useAuth } from "../contexts/auth";
import { useState } from "react";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function NavBar() {
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  // const { push } = useRouter();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <Container>
      <AppBar>
        <Toolbar>
          <Grid
            container
            // spacing={8}
            alignItems="center"
            justifyContent="space-around"
            direction="row"
          >
            <Grid item marginY={0} paddingY={0}>
              <Typography variant="h4" component="div">
                <Link href={"/dashboard"}>SpyKey</Link>
              </Typography>
            </Grid>
            <Grid item marginY={0} paddingY={0}>
              <Link href={"/dashboard"}>
                <Button color="inherit">Inicio</Button>
              </Link>
              <Link href={"/dashboard/clientes"}>
                <Button color="inherit">Clientes</Button>
              </Link>
              <Link href={"/dashboard/reportes"}>
                <Button color="inherit">Reportes</Button>
              </Link>
              <Link href={"/dashboard/archivados"}>
                <Button color="inherit">Archivados</Button>
              </Link>
              <Link href={"/dashboard/favoritos"}>
                <Button color="inherit">Favoritos</Button>
              </Link>
              {/*<div>{!!user ? user.role : "sin usuario"}</div>*/}
            </Grid>
            <Grid item marginY={0} paddingY={0}>
              <IconButton
                size="small"
                // edge="end"
                color="inherit"
                aria-label="Usuario"
                // sx={{ mr: 2 }}
                id="demo-customized-button"
                aria-controls="demo-customized-menu"
                // aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                // variant="contained"
                onClick={handleClick}
              >
                {!!user ? user.role : "sin usuario"}
                <KeyboardArrowDownIcon />
              </IconButton>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  // onClose={handleClose}
                  // disableRipple
                  onClick={handleLogout}
                >
                  <ExitToAppIcon />
                  Salir
                </MenuItem>
              </StyledMenu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
