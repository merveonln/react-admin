import React from "react";
import { tokens } from "../../theme";
import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
// import { mockDataInvoices } from "../../data/mockData";
import { useTheme } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setData(res.data))

      .catch((err) => console.log(err));
  });

  const columns = [
    { field: "postId", headerName: "postId", width: "50" },
    {
      field: "id",
      headerName: "id",
      width: "50",
    },
    {
      field: "name",
      headerName: "Name",
      width: "400",
    },
    {
      field: "email",
      headerName: "Email",
      width: "250",
    },
    {
      field: "body",
      headerName: "Body",
      width: "1800",
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.body}
        </Typography>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoıce Balance" />
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
            backgroundColor: colors.primary[600],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]}!important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={data} columns={columns}></DataGrid>
      </Box>
    </Box>
  );
};

export default Invoices;
