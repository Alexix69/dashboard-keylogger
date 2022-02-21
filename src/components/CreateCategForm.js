import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FavoriteCategory from "../api/favorite_category";
/// FLUJO DE INTERFAZ ESPERADO, AÑADIR NOMBRES Y FUNICONES PARA ENVIO DE DATOS
const schema = yup
  .object()
  .shape({
    folder_name: yup
      .string()
      .required("Defina el nombre de la nueva categoría"),
  })
  .required();
const CreateCategForm = ({ sendAndClose }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      folder_name: "",
      description: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    try {
      await FavoriteCategory.newCategory(data);
    } catch (e) {
      console.log("Error at Create category", e);
    }

    console.log(data);
    sendAndClose(false);
  };

  const handleClose = () => {
    sendAndClose(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      //onSubmit={() => console.log("on submit")}
    >
      <Controller
        name="folder_name"
        control={control}
        render={({ field }) => (
          // <Input {...field} />
          <TextField
            {...field}
            color="warning"
            autoFocus
            margin="dense"
            // name="name"
            label="Nombre categoría"
            type="text"
            fullWidth
            variant="standard"
          />
        )}
      />
      {/*<p>{errors.name?.message}</p>*/}
      {!!errors.folder_name ? <>{errors.folder_name?.message}</> : null}
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          // <Select
          //   {...field}
          //   options={[
          //     { value: "chocolate", label: "Chocolate" },
          //     { value: "strawberry", label: "Strawberry" },
          //     { value: "vanilla", label: "Vanilla" },
          //   ]}
          // />
          <TextField
            {...field}
            multiline
            // rows={2}
            margin="dense"
            // name="description"
            label="Descripción"
            type="text"
            color="secondary"
            variant="standard"
            fullWidth
          />
        )}
      />
      <Button type="submit">Crear</Button>
      <Button onClick={handleClose}>Cancelar</Button>
    </form>
  );
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });
  // const onSubmit = (data) => console.log(data);
  //
  // return (
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //     <input {...register("firstName")} />
  //     <p>{errors.firstName?.message}</p>
  //
  //     <input {...register("age")} />
  //     <p>{errors.age?.message}</p>
  //
  //     <input type="submit" />
  //   </form>
  // );
};

export default CreateCategForm;
