import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavCategList from "./FavCategList";
import { useEffect, useState } from "react";
import CreateCategModal from "./CreateCategModal";
import useSWR from "swr";
import FavoriteCategory from "../api/favorite_category";
import Utils from "../utils/utils";
import AddFavoriteButton from "./AddFavoriteButton";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FavCategModal = ({ indexOfRecord, confirmRequestUpdate }) => {
  const [open, setOpen] = useState(false);
  const [indexOfCategory, setIndexOfCategory] = useState("");
  const [indexOfElementToSend, setIndexOfElementToSend] = useState("");

  const [loading, setLoading] = useState(false);

  // const [queryTrigger, setQueryTrigger] = useState("");

  // const fetcher = (url) => fetch(url).then((res) => res.json());
  // console.log("EJECUCION ...");
  // const { data, error } = useSWR(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/favorite_categories`,
  //   fetcher,
  //   {
  //     refreshInterval: 5000,
  //   }
  // );
  // //console.log("DATA", data);
  // console.log("... de SWR");
  //
  // if (error) {
  //   console.log("HA OCURRIDO UN ERROR", error);
  // }
  //
  // if (!!data) {
  //   console.log("ES DATA DE CATEGR", data);
  // }

  // useEffect(() => {
  //   console.log("NUMBRE", number);
  //   setOpen(false);
  // }, [number]);
  useEffect(() => {
    setIndexOfElementToSend(indexOfRecord);
  }, [indexOfCategory]);

  const setFavWithoutCategory = async (indexOfRecord) => {
    try {
      await FavoriteCategory.setFavoriteWithoutCategory(indexOfRecord);
    } catch (e) {
      console.log("Error at mark as favorite", e);
    }
  };

  const setFavWithCategory = async (categoryIndex, indexOfRecord) => {
    try {
      await FavoriteCategory.setFavoriteWithCategory(
        categoryIndex,
        indexOfRecord
      );
    } catch (e) {
      console.log("Error ar mark as favorite with category", e);
    }
  };

  const handleGetIndex = (newIndex) => {
    setIndexOfCategory(newIndex);
  };

  const handleClickOpen = () => {
    setOpen(true);
    // setQueryTrigger("consultar");
  };

  const handleClose = async () => {
    if (!!indexOfCategory && !!indexOfElementToSend) {
      if (indexOfCategory !== "0" && !loading) {
        setLoading(true);
        await setFavWithCategory(indexOfCategory, indexOfElementToSend).then(
          () => {
            console.log("TERMINO favorito a categoria");
            confirmRequestUpdate();
            setLoading(false);
          }
        );
      }

      if (indexOfCategory === "0" && !loading) {
        setLoading(true);
        await setFavWithoutCategory(indexOfElementToSend).then(() => {
          console.log("TERMINO favorito sin categoria");
          confirmRequestUpdate();
          setLoading(false);
        });
      }
    }
    // confirmRequestUpdate();
    setOpen(false);

    // if (!loading) {
    //   // setSuccess(false);
    //   setLoading(true);
    //   // timer.current = window.setTimeout(() => {
    //   //   setSuccess(true);
    //   //   setLoading(false);
    //   // }, 2000);
    //   Utils.markAsArchived(indexOfReport).then(() => {
    //     console.log("TERMINO ARCHIVACION");
    //     confirmRequestUpdate();
    //     setLoading(false);
    //   });
    // }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        // variant="outlined"
        startIcon={<StarBorderIcon />}
        onClick={handleClickOpen}
      >
        A??adir a favoritos
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Seleccione una categor??a </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <FavCategList
              // newNumber={handleNumberChange}
              setIndexToSend={handleGetIndex}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <CreateCategModal />
          <Button onClick={handleCancel}>Cancelar</Button>
          {/*<Button onClick={handleClose}>A??adir</Button>*/}
          <AddFavoriteButton handleClose={handleClose} loading={loading} />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FavCategModal;
