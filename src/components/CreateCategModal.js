import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CreateCategForm from "./CreateCategForm";

const CreateCategModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleCloseWithData = (send) => {
    setOpen(send);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Nueva categoría</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nueva Categoría</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Especifique un nombre y una descripción (opcional) para la nueva
            categoría
          </DialogContentText>
          <CreateCategForm sendAndClose={handleCloseWithData} />
          {/*<div>*/}
          {/*  <TextField*/}
          {/*    color="warning"*/}
          {/*    autoFocus*/}
          {/*    margin="dense"*/}
          {/*    id="name"*/}
          {/*    label="Nombre categoría"*/}
          {/*    type="text"*/}
          {/*    fullWidth*/}
          {/*    variant="standard"*/}
          {/*  />*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*  <TextField*/}
          {/*    multiline*/}
          {/*    // rows={2}*/}
          {/*    margin="dense"*/}
          {/*    id="description"*/}
          {/*    label="Descripción"*/}
          {/*    type="text"*/}
          {/*    color="secondary"*/}
          {/*    variant="standard"*/}
          {/*    fullWidth*/}
          {/*  />*/}
          {/*</div>*/}
        </DialogContent>
        {/*<DialogActions>*/}
        {/*  <Button onClick={handleClose}>Cancelar</Button>*/}
        {/*  /!*<Button*!/*/}
        {/*  /!*  // onClick={handleClose}*!/*/}
        {/*  /!*  type="submit"*!/*/}
        {/*  /!*>*!/*/}
        {/*  /!*  Crear*!/*/}
        {/*  /!*</Button>*!/*/}
        {/*</DialogActions>*/}
      </Dialog>
    </div>
  );
};

export default CreateCategModal;
