import React from "react";
import useSWR from "swr";
import { createTheme } from "@mui/material/styles";
import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";
import ArchiveIcon from "@mui/icons-material/Archive";
import MUIDataTable, { ExpandButton } from "mui-datatables";
import { ThemeProvider } from "@mui/styles";
import StarIcon from "@mui/icons-material/Star";
import Report from "../api/report";
import FolderOffIcon from "@mui/icons-material/FolderOff";
import FavoriteCategory from "../api/favorite_category";
import Utils from "../utils/utils";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const FavoritesTable = ({ data, requestUpdate, selectedItemIndex }) => {
  // const fetcher = (url) => fetch(url).then((res) => res.json());
  //
  // const { data, error } = useSWR(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/records/favorites`,
  //   fetcher,
  //   {
  //     refreshInterval: 1000,
  //   }
  // );
  //
  // if (data === null) {
  //   console.log("CARGANDO DATOS");
  // }

  const cellData = [];

  if (!!data) {
    // console.log("ESTO ES DATA", data);
    data.forEach((record) => {
      // const auxArray = [
      //   record.date,
      //   record.time,
      //   record.app_name,
      //   record.window_name,
      //   record.event_type,
      //   record.type,
      //   record.content,
      //   record.client.nickname,
      //   record.client.desktop_name,
      //   record.id,
      // ];
      const auxArray = [
        // record.date,
        // "28/01/2022",
        Utils.dateTransformation(record.date),
        record.time,
        record.app_name,
        record.window_name,
        // record.event_type,
        record.type,
        record.content,
        record.client_nickname,
        record.client_desktop_name,
        record.id,
      ];
      cellData.push(auxArray);
    });

    // const auxArray = [
    //   data[0].date,
    //   data[0].time,
    //   data[0].app_name,
    //   data[0].window_name,
    //   data[0].event_type,
    //   data[0].type,
    //   data[0].content,
    //   data[0].client.nickname,
    //   data[0].client.desktop_name,
    //   data[0].id,
    // ];
    //
    // cellData.push(auxArray);
  }

  if (!data) {
    console.log("HA OCURRIDO UN ERROR");
  }

  const theme = createTheme({
    overrides: {
      MUIDataTableSelectCell: {
        expandDisabled: {
          // Soft hide the button.
          visibility: "hidden",
        },
      },
    },
  });

  const columns = [
    {
      name: "Fecha",
      options: {
        filter: true,
      },
    },
    {
      name: "Hora",
      options: {
        filter: true,
      },
    },
    {
      name: "Aplicacion",
      options: {
        filter: true,
      },
    },
    {
      name: "Ventana",
      options: {
        filter: false,
      },
    },
    // {
    //   name: "Evento",
    //   options: {
    //     filter: false,
    //   },
    // },
    {
      name: "Tipo",
      options: {
        filter: true,
      },
    },
    {
      name: "Contenido",
      options: {
        filter: false,
        display: false,
      },
    },
    {
      name: "Cliente",
      options: {
        filter: true,
        display: false,
      },
    },
    {
      name: "Computador",
      options: {
        filter: false,
        display: false,
      },
    },
    {
      name: "Id",
      options: {
        filter: false,
        display: false,
      },
    },
  ];
  const options = {
    download: false,
    elevation: 7,
    print: false,
    viewColumns: false,
    rowsPerPageOptions: [10, 25],
    searchPlaceholder: "ventana, aplicación, fecha o tipo",
    filter: true,
    filterType: "dropdown",
    responsive: "stacked",

    // rowsExpanded: indexToShow,
    selectableRows: "none",
    expandableRows: true,
    expandableRowsHeader: true,
    expandableRowsOnClick: true,
    renderExpandableRow: (rowData) => {
      // console.log("QUES ES ROWDATA", rowData);
      // console.log("QUES ES columdef", columnsDef);
      //console.log("RowMeta", rowMeta);
      return (
        <TableCell colSpan={7}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  {/*<TableCell align="right">*/}
                  {/*  <b>Cliente:</b> {rowData[7]} <br /> <b>Computador:</b>{" "}*/}
                  {/*  {rowData[8]}*/}
                  {/*</TableCell>*/}
                  <TableCell align="center" padding="none">
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid item paddingRight={2} paddingY={1}>
                        <b>Cliente:</b> {rowData[6]}
                      </Grid>
                      <Grid item paddingLeft={2} paddingY={1} paddingRight={2}>
                        <b>Computador:</b> {rowData[7]}
                      </Grid>
                      {rowData[4] === "screenshot" ? (
                        <Grid item paddingLeft={2} paddingY={1}>
                          <Button
                            endIcon={<FileDownloadIcon />}
                            onClick={() =>
                              downloadImage(
                                rowData[5],
                                rowData[3],
                                Utils.dateReverseTrans(rowData[0])
                              )
                            }
                          >
                            descargar
                          </Button>
                        </Grid>
                      ) : null}
                    </Grid>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  {/*<TableCell component="th" scope="row">*/}
                  {/*  {rowData[5] === "keystroke" ? (*/}
                  {/*    rowData[6]*/}
                  {/*  ) : rowData[5] === "website" ? (*/}
                  {/*    rowData[6]*/}
                  {/*  ) : rowData[5] === "screenshot" ? (*/}
                  {/*    <Image*/}
                  {/*      src={rowData[6]} // Route of the image file*/}
                  {/*      //src=''*/}
                  {/*      height={600} // Desired size with correct aspect ratio*/}
                  {/*      width={1050} // Desired size with correct aspect ratio*/}
                  {/*      alt="Logo"*/}
                  {/*    />*/}
                  {/*  ) : (*/}
                  {/*    "Cargando contenido..."*/}
                  {/*  )}*/}
                  {/*</TableCell>*/}
                  <TableCell
                    component="th"
                    scope="row"
                    padding="normal"
                    align="center"
                  >
                    {rowData[4] === "keystroke" ? (
                      rowData[5]
                    ) : rowData[4] === "website" ? (
                      <a href={rowData[5]} target="_blank" rel="noreferrer">
                        {rowData[5]}
                      </a>
                    ) : rowData[4] === "screenshot" ? (
                      <>
                        <Image
                          src={rowData[5]} // Route of the image file
                          // src="data:image/jpeg;base64,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"
                          height={600} // Desired size with correct aspect ratio
                          width={1050} // Desired size with correct aspect ratio
                          alt="Logo"
                        />
                        {/*<Button*/}
                        {/*  endIcon={<FileDownloadIcon />}*/}
                        {/*  onClick={() =>*/}
                        {/*    downloadImage(rowData[5], rowData[3], rowData[0])*/}
                        {/*  }*/}
                        {/*>*/}
                        {/*  descargar*/}
                        {/*</Button>*/}
                      </>
                    ) : (
                      "Cargando contenido..."
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  {/*<TableCell align="center" component="th" scope="row">*/}
                  {/*<StarIcon />*/}
                  <TableCell
                    align="center"
                    component="th"
                    // scope="row"
                    padding="none"
                  >
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid item paddingRight={1}>
                        <Button
                          startIcon={<StarIcon />}
                          onClick={() => removeFromFavorites(rowData[8])}
                        >
                          Quitar de favoritos
                        </Button>
                      </Grid>
                      <Grid item paddingX={2}>
                        <Button
                          startIcon={<ArchiveIcon />}
                          onClick={() => markAsArchived(rowData[8])}
                          // onClick={() => console.log(rowData[9])}
                        >
                          Archivar
                        </Button>
                      </Grid>
                      {!!selectedItemIndex && selectedItemIndex !== 0 ? (
                        <Grid item paddingLeft={1}>
                          <Button
                            startIcon={<FolderOffIcon />}
                            onClick={() =>
                              removeFavFromCategory(
                                selectedItemIndex,
                                rowData[8]
                              )
                            }
                          >
                            Quitar de categoría
                          </Button>
                        </Grid>
                      ) : null}
                    </Grid>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </TableCell>
      );
    },
    onRowExpansionChange: (curExpanded, allExpanded, rowsExpanded) => {
      // console.log("ROWS EXPANDED", curExpanded, allExpanded, rowsExpanded);
    },
  };

  const components = {
    ExpandButton: function (props) {
      // if (props.dataIndex === 3 || props.dataIndex === 4)
      //   return <div style={{ width: "24px" }} />;
      return <ExpandButton {...props} />;
    },
  };

  const removeFromFavorites = async (index) => {
    try {
      console.log("PRESIONAR BOTON DE QUITAR FAVORITO", index);
      await Report.removeFavorite(index);
      requestUpdate();
    } catch (e) {
      console.log("Error at remove from favorites", e);
    }
  };

  const removeFavFromCategory = async (categoryID, index) => {
    try {
      await FavoriteCategory.removeFavFromCategory(categoryID, index);
      requestUpdate();
    } catch (e) {
      console.log("Error at remove fav from categ", e);
    }
  };

  const markAsArchived = async (index) => {
    try {
      await Report.handleArchivedStatus(index);
      requestUpdate();
      console.log("SE TERMINO ARCHIVACION");
    } catch (e) {
      console.log("Error Mark as archived", e);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {typeof window !== "undefined" && (
        <MUIDataTable
          title={`Registros Favoritos: ${cellData.length}`}
          data={cellData}
          // data={indexToShow}
          columns={columns}
          options={options}
          components={components}
        />
      )}
    </ThemeProvider>
  );
};

export default FavoritesTable;
