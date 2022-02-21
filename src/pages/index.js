import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "next/link";
import { useRouter } from "next/router";
import LoginForm from "../components/LoginForm";
import withoutAuth from "../hocs/withoutAuth";
import Head from "next/head";
import { Alert, AlertTitle, Slide } from "@mui/material";
import { useState } from "react";

function Copyright(props) {
  const { push } = useRouter();
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      Keylogger {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

// export default function SignIn() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     // eslint-disable-next-line no-console
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//   };
//
//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Ingresar al Dashboard
//           </Typography>
//           {/*<Box*/}
//           {/*  component="form"*/}
//           {/*  onSubmit={handleSubmit}*/}
//           {/*  noValidate*/}
//           {/*  sx={{ mt: 1 }}*/}
//           {/*>*/}
//           {/*  <TextField*/}
//           {/*    margin="normal"*/}
//           {/*    required*/}
//           {/*    fullWidth*/}
//           {/*    id="email"*/}
//           {/*    label="Identificacion"*/}
//           {/*    name="email"*/}
//           {/*    autoComplete="email"*/}
//           {/*    autoFocus*/}
//           {/*  />*/}
//           {/*  <TextField*/}
//           {/*    margin="normal"*/}
//           {/*    required*/}
//           {/*    fullWidth*/}
//           {/*    name="password"*/}
//           {/*    label="Contraseña"*/}
//           {/*    type="password"*/}
//           {/*    id="password"*/}
//           {/*    autoComplete="current-password"*/}
//           {/*  />*/}
//           {/*  <FormControlLabel*/}
//           {/*    control={<Checkbox value="remember" color="primary" />}*/}
//           {/*    label="Recordarme"*/}
//           {/*  />*/}
//           {/*  <Link href={"/dashboard"} passHref>*/}
//           {/*    <Button*/}
//           {/*      type="submit"*/}
//           {/*      fullWidth*/}
//           {/*      variant="contained"*/}
//           {/*      sx={{ mt: 3, mb: 2 }}*/}
//           {/*    >*/}
//           {/*      Ingresar*/}
//           {/*    </Button>*/}
//           {/*  </Link>*/}
//           {/*  /!* <Grid container>*/}
//           {/*    <Grid item xs>*/}
//           {/*      <Link href="#" variant="body2">*/}
//           {/*        Forgot password?*/}
//           {/*      </Link>*/}
//           {/*    </Grid>*/}
//           {/*    <Grid item>*/}
//           {/*      <Link href="#" variant="body2">*/}
//           {/*        {"Don't have an account? Sign Up"}*/}
//           {/*      </Link>*/}
//           {/*    </Grid>*/}
//           {/*  </Grid> *!/*/}
//           {/*</Box>*/}
//           <LoginForm />
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }

const Index = () => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };
  const [alertState, setAlertState] = useState(false);
  const setAlertStateAuth = (value) => {
    setAlertState(value);
  };

  const icon = (
    <Alert variant="outlined" severity="error">
      Combinación de usuario y contraseña incorrecta.
    </Alert>
    // <Alert variant="filled" severity="error">
    //   This is an error alert — check it out!
    // </Alert>
  );

  return (
    <>
      <Head>
        <title>Dashboard Web - Sign In</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />

          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/*<Alert severity="error">*/}
            {/*  <AlertTitle>No se pudo iniciar sesión</AlertTitle>*/}
            {/*  /!*This is an error alert — <strong>check it out!</strong>*!/*/}
            {/*  La combinación de correo y contraseña es incorrecta!*/}
            {/*</Alert>*/}
            {!!alertState ? (
              <Slide
                direction="down"
                in={alertState}
                timeout={500}
                // container={containerRef.current}
              >
                {icon}
              </Slide>
            ) : null}

            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Ingresar al Dashboard
            </Typography>
            {/*<Box*/}
            {/*  component="form"*/}
            {/*  onSubmit={handleSubmit}*/}
            {/*  noValidate*/}
            {/*  sx={{ mt: 1 }}*/}
            {/*>*/}
            {/*  <TextField*/}
            {/*    margin="normal"*/}
            {/*    required*/}
            {/*    fullWidth*/}
            {/*    id="email"*/}
            {/*    label="Identificacion"*/}
            {/*    name="email"*/}
            {/*    autoComplete="email"*/}
            {/*    autoFocus*/}
            {/*  />*/}
            {/*  <TextField*/}
            {/*    margin="normal"*/}
            {/*    required*/}
            {/*    fullWidth*/}
            {/*    name="password"*/}
            {/*    label="Contraseña"*/}
            {/*    type="password"*/}
            {/*    id="password"*/}
            {/*    autoComplete="current-password"*/}
            {/*  />*/}
            {/*  <FormControlLabel*/}
            {/*    control={<Checkbox value="remember" color="primary" />}*/}
            {/*    label="Recordarme"*/}
            {/*  />*/}
            {/*  <Link href={"/dashboard"} passHref>*/}
            {/*    <Button*/}
            {/*      type="submit"*/}
            {/*      fullWidth*/}
            {/*      variant="contained"*/}
            {/*      sx={{ mt: 3, mb: 2 }}*/}
            {/*    >*/}
            {/*      Ingresar*/}
            {/*    </Button>*/}
            {/*  </Link>*/}
            {/*  /!* <Grid container>*/}
            {/*    <Grid item xs>*/}
            {/*      <Link href="#" variant="body2">*/}
            {/*        Forgot password?*/}
            {/*      </Link>*/}
            {/*    </Grid>*/}
            {/*    <Grid item>*/}
            {/*      <Link href="#" variant="body2">*/}
            {/*        {"Don't have an account? Sign Up"}*/}
            {/*      </Link>*/}
            {/*    </Grid>*/}
            {/*  </Grid> *!/*/}
            {/*</Box>*/}
            <LoginForm setAlertState={setAlertStateAuth} />
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
};

// export default Index;
export default withoutAuth(Index);
