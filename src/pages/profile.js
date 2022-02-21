import React from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import Layout from "../components/Layout";

const Profile = () => {
  return (
    <Layout>
      <Container>
        <Grid
          container
          spacing={2}
          marginTop={10}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={5}>
            <Typography align="center" variant="h4">
              Cambiar contraseña de inicio de sesion
            </Typography>
          </Grid>
          <Grid>
            <Grid paddingY={1}>
              <Typography align="center">Antigua contraseña</Typography>
            </Grid>
            <Grid paddingY={1}>
              <TextField
                fullWidth="100%"
                id="outlined-password-input"
                label="Contraseña"
                type="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Grid margin={2}>
            <Grid paddingY={1}>
              <Typography align="center">Nueva contraseña</Typography>
            </Grid>
            <Grid paddingY={1}>
              <TextField
                id="outlined-password-input"
                label="Contraseña"
                type="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button variant="contained">Cambiar</Button>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Profile;
