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
import useSWR from "swr";

const ClientsTable = ({ data }) => {
  // const fetcher = (url) => fetch(url).then((res) => res.json());
  //
  // const { data, error } = useSWR(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/clients`,
  //   fetcher,
  //   {
  //     refreshInterval: 1000,
  //   }
  // );

  if (data === null) {
    console.log("CARGANDO DATOS");
  }

  const getDays = (createdDate) => {
    const splitCrDate = createdDate.split("-");
    const day = new Date().getDate(),
      month = new Date().getMonth(),
      year = new Date().getFullYear();

    const crDateUTC = Date.UTC(
      parseInt(splitCrDate[0]),
      parseInt(splitCrDate[1]),
      parseInt(splitCrDate[2])
    );
    const todayUTC = Date.UTC(year, month + 1, day);
    const conversionFactor = 1000 * 60 * 60 * 24;
    return (todayUTC - crDateUTC) / conversionFactor;
  };

  const cellData = [];

  if (!!data) {
    // console.log("ESTO ES DATA", data);
    data.forEach((client) => {
      // console.log("getdyas", getDays(client.created_at));
      const auxArray = [
        client.id,
        client.nickname,
        client.desktop_name,
        client.created_at,
        getDays(client.created_at),
        client.keystrokes,
        client.screenshots,
        client.websites,
        client.total_records,
      ];
      cellData.push(auxArray);
    });
  }

  if (!data) {
    console.log("HA OCURRIDO UN ERROR");
  }

  const columns = [
    {
      name: "Id",
      options: {
        filter: false,
        display: false,
      },
    },
    {
      name: "Cliente",
      options: {
        filter: true,
      },
    },
    {
      name: "Computador",
      options: {
        filter: true,
      },
    },
    {
      name: "Inicio de recopilación",
      options: {
        filter: true,
      },
    },
    {
      name: "Días de actividad",
      options: {
        filter: true,
      },
    },
    {
      name: "Keystrokes",
      options: {
        display: false,
        filter: false,
      },
    },
    {
      name: "Screenshots",
      options: {
        display: false,
        filter: false,
      },
    },
    {
      name: "Websites",
      options: {
        display: false,
        filter: false,
      },
    },
    {
      name: "Records",
      options: {
        display: false,
        filter: false,
      },
    },
  ];

  const options = {
    download: false,
    elevation: 7,
    print: false,
    viewColumns: false,
    rowsPerPageOptions: [10],
    searchPlaceholder: "cliente, nombre computador, fecha",
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
                  <TableCell />
                  <TableCell align="center">Keystrokes</TableCell>
                  <TableCell align="center">Screenshots</TableCell>
                  <TableCell align="center">Websites</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {`${rowData[8]} registros obtenidos:`}
                    {/*{<DonutChart />}*/}
                  </TableCell>
                  <TableCell align="center">{rowData[5]}</TableCell>
                  <TableCell align="center">{rowData[6]}</TableCell>
                  <TableCell align="center">{rowData[7]}</TableCell>
                </TableRow>
                {/*<TableRow>*/}
                {/*  <LineChart />*/}
                {/*</TableRow>*/}
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
          title={`Clientes keylogger: ${cellData.length}`}
          data={cellData}
          columns={columns}
          options={options}
          components={components}
        />
      )}
    </ThemeProvider>
  );
};

export default ClientsTable;
