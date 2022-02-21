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

class TableUsers extends React.Component {
  render() {
    const columns = [
      {
        name: "Usuario",
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
        name: "Fecha",
        options: {
          filter: true,
        },
      },
      {
        name: "Days",
        options: {
          filter: true,
        },
      },
      {
        name: "Key",
        options: {
          display: false,
          filter: false,
        },
      },
      {
        name: "Screen",
        options: {
          display: false,
          filter: false,
        },
      },
      {
        name: "Web",
        options: {
          display: false,
          filter: false,
        },
      },
    ];

    const data = [
      ["Jaden Collins", "Attorney", "2021-12-21", 10, 8, 10, 15],
      ["Franky Rees", "Business Analyst", "2021-12-21", 27, 10, 15, 5],
      ["Aaren Rose", "Business Consultant", "2021-12-21", 27, 8, 10, 15],
      [
        "Blake Duncan",
        "Business Management Analyst",
        "2021-12-21",
        27,
        8,
        10,
        15,
      ],
      ["Frankie Parry", "Agency Legal Counsel", "2021-12-21", 27, 8, 10, 15],
      ["Lane Wilson", "Commercial Specialist", "2021-12-21", 27, 8, 10, 15],
      ["Robin Duncan", "Business Analyst", "2021-12-21", 27, 8, 10, 15],
      ["Mel Brooks", "Business Consultant", "2021-12-20", 27, 8, 10, 15],
      ["Harper White", "Attorney", "2021-12-21", 27, 8, 10, 15],
      ["Kris Humphrey", "Agency Legal Counsel", "2021-12-21", 27, 8, 10, 15],
      ["Frankie Long", "Industrial Analyst", "2021-12-21", 27, 8, 10, 15],
      ["Brynn Robbins", "Business Analyst", "2021-12-21", 27, 8, 10, 15],
      ["Justice Mann", "Business Consultant", "2021-12-21", 27, 8, 10, 15],
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
                    <TableCell></TableCell>
                    <TableCell align="right">KeyStrokes</TableCell>
                    <TableCell align="right">Screen</TableCell>
                    <TableCell align="right">Web</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Reportes
                    </TableCell>
                    <TableCell align="right">
                      {JSON.stringify(rowData[4])}
                    </TableCell>
                    <TableCell align="right">
                      {JSON.stringify(rowData[5])}
                    </TableCell>
                    <TableCell align="right">
                      {JSON.stringify(rowData[6])}
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
            title={"Lista de usuarios"}
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

export default TableUsers;
