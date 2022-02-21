import React from "react";
import MUIDataTable, { ExpandButton } from "mui-datatables";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import UnarchiveIcon from "@mui/icons-material/Unarchive";

class TableArchive extends React.Component {
  render() {
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
        name: "Computadora",
        options: {
          filter: true,
        },
      },
      {
        name: "Usuario",
        options: {
          filter: true,
        },
      },
      {
        name: "Evento",
        options: {
          filter: true,
        },
      },
      {
        name: "Valor",
        options: {
          searchable: true,
          display: false,
          filter: true,
        },
      },
    ];

    const data = [
      [
        "2021-12-21",
        "12:13:04",
        "Attorney",
        "Jaden Collins",
        "Keystrokes",
        "Teclas Presionadas....................",
      ],
      [
        "2021-12-20",
        "12:13:04",
        "Attorney",
        "Elise Campbell",
        "Keystrokes",
        "Teclas Presionadas....................",
      ],
      [
        "2021-12-19",
        "12:13:04",
        "Attorney",
        "Elise Campbell",
        "Captura Pantalla",
        "Teclas Presionadas....................",
      ],
      [
        "2021-12-18",
        "12:13:04",
        "Attorney",
        "Elise Campbell",
        "Keystrokes",
        "Teclas Presionadas....................",
      ],
      [
        "2021-12-18",
        "12:13:04",
        "House",
        "Franky Rees",
        "Keystrokes",
        "Teclas Presionadas....................",
      ],
      [
        "2021-12-17",
        "12:13:04",
        "House",
        "Franky Rees",
        "Keystrokes",
        "Teclas Presionadas....................",
      ],
      [
        "2021-12-17",
        "12:13:04",
        "House",
        "Franky Rees",
        "Keystrokes",
        "Teclas Presionadas....................",
      ],
      [
        "2021-12-17",
        "12:13:04",
        "House",
        "Franky Rees",
        "Keystrokes",
        "Teclas Presionadas....................",
      ],
      [
        "2021-12-16",
        "12:13:04",
        "Business",
        "Mel Brooks",
        "Keystrokes",
        "Teclas Presionadas....................",
      ],
      [
        "2021-12-16",
        "12:13:04",
        "Business",
        "Mel Brooks",
        "Keystrokes",
        "Teclas Presionadas....................",
      ],
      [
        "2021-12-15",
        "12:13:04",
        "Business",
        "Mel Brooks",
        "Keystrokes",
        "Teclas Presionadas....................",
      ],
      [
        "2021-12-15",
        "12:13:04",
        "Attorney",
        "Jaden Collins",
        "Keystrokes",
        "Teclas Presionadas....................",
      ],
      [
        "2021-12-15",
        "12:13:04",
        "Attorney",
        "Jaden Collins",
        "Keystrokes",
        "Teclas Presionadas....................",
      ],
      [
        "2021-12-15",
        "12:13:04",
        "Attorney",
        "Jaden Collins",
        "Keystrokes",
        "Teclas Presionadas....................",
      ],
      [
        "2021-12-14",
        "12:13:04",
        "Business",
        "Mel Brooks",
        "Keystrokes",
        "Teclas Presionadas....................",
      ],
      [
        "2021-12-14",
        "12:13:04",
        "Business",
        "Brynn Robbins",
        "Keystrokes",
        "Teclas Presionadas....................",
      ],
      [
        "2021-12-14",
        "12:13:04",
        "Attorney",
        "Jaden Collins",
        "Keystrokes",
        "Teclas Presionadas....................",
      ],
      [
        "2021-12-14",
        "12:13:04",
        "Business",
        "Brynn Robbins",
        "Keystrokes",
        "Teclas Presionadas....................",
      ],
    ];

    const options = {
      filter: true,
      filterType: "dropdown",
      responsive: "standard",
      selectableRows: "none",
      expandableRows: true,
      expandableRowsHeader: true,
      expandableRowsOnClick: true,
      renderExpandableRow: (rowData, rowMeta) => {
        console.log("RowData", rowData);
        console.log("RowMeta", rowMeta);
        return (
          <TableCell colSpan={6}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">
                      Tipo de evento: {JSON.stringify(rowData[4])}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {JSON.stringify(rowData[5])}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" component="th" scope="row">
                      <UnarchiveIcon /> <p>Desarchivar este registro</p>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </TableCell>
        );
      },
      onRowExpansionChange: (curExpanded, allExpanded, rowsExpanded) =>
        console.log(curExpanded, allExpanded, rowsExpanded),
    };

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

    const components = {
      ExpandButton: function (props) {
        // if (props.dataIndex === 3 || props.dataIndex === 4)
        //   return <div style={{ width: "24px" }} />;
        return <ExpandButton {...props} />;
      },
    };

    return (
      <ThemeProvider theme={theme}>
        {typeof window !== "undefined" && (
          <MUIDataTable
            title={"Registros Archivados"}
            data={data}
            columns={columns}
            options={options}
            components={components}
          />
        )}
      </ThemeProvider>
    );
  }
}

export default TableArchive;
