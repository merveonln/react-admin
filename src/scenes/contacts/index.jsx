import React from "react";
import { tokens } from "../../theme";
import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { mockDataContacts } from "../../data/mockData";
import { useTheme } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setData(res.data))

      .catch((err) => console.log(err));
  });

  const columns = [
    {
      field: "userId",
      headerName: "User ID",
      headerAlign: "center",
      align: "center",
      width: "200",
    },
    {
      field: "id",
      headerName: "id",
      headerAlign: "center",
      align: "center",
      width: "200",
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>{params.row.id}</Typography>
      ),
    },
    {
      field: "title",
      headerName: "Title",
      headerAlign: "center",
      align: "center",
      width: "400",
    },
    {
      field: "completed",
      headerName: "Completed",
      headerAlign: "center",
      align: "center",
      width: "400",
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        width="168vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[800],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        ></DataGrid>
      </Box>
    </Box>
  );
};

export default Contact;
