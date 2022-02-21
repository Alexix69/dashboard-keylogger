import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import Button from "@mui/material/Button";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import User from "../api/user";
import { useAuth } from "../contexts/auth";
import { useRouter } from "next/router";
import * as yup from "yup";
import { string } from "yup";
import { Alert } from "@mui/material";

const schema = yup
  .object()
  .shape({
    email: string()
      .email("Ingrese un correo válido")
      .required("Este campo debe ser completado"),
    password: string().required("Este campo debe ser completado"),
  })
  .required();
const LoginForm = ({ setAlertState }) => {
  const { login } = useAuth();
  // const [respLogin, setRespLogin] = useState("");
  const {
    control,
    // resetField,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // defaultValues: {
    //     folder_name: "",
    //     description: "",
    // },
    resolver: yupResolver(schema),
  });
  const [result, setResult] = useState("");
  const [errorsList, setErrorsList] = useState([]);

  const onFinishLog = async (data) => {
    try {
      const userData = {
        ...data,
      };
      const response = await login(userData);
      console.log("REPSONSE LOGIN .data", response.data);
      if (response.data?.error) {
        setAlertState(true);
        setTimeout(() => {
          setAlertState(false);
        }, 5000);
      }

      if (response.data?.user) {
        setAlertState(false);
      }
      // setResult("Usuario logueado");
    } catch (e) {
      const { response } = e;

      if (!!response) {
        if (response.data.errors) {
          const errors = response.data.errors;
          const newErrorList = [];

          for (let field in errors) {
            newErrorList.push(...errors[field]);
          }
          // setErrorsList(newErrorList);
        }
      }
    }
  };

  useEffect(() => {
    console.log("RESULT", result);
  }, [result]);

  useEffect(() => {
    console.log("errorList", errorsList);
  }, [errorsList]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onFinishLog)}
        // onSubmit={() => console.log("INGRESAR")}
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            // <Input {...field} />
            <TextField
              {...field}
              margin="normal"
              // required
              fullWidth
              // id="email"
              label="Correo del administrador"
              // name="email"
              autoComplete="email"
              autoFocus
              type="email"
            />
          )}
        />
        {!!errors.email ? <>{errors.email?.message}</> : null}
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            // <Input {...field} />
            <TextField
              {...field}
              margin="normal"
              // required
              fullWidth
              // name="password"
              label="Contraseña"
              type="password"
              // id="password"
              autoComplete="current-password"
            />
          )}
        />
        {!!errors.password ? <>{errors.password?.message}</> : null}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Ingresar
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
