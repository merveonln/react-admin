import React, { useEffect, useState } from "react";
import { tokens } from "../../theme";
import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import axios from "axios";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: "50" },
    { field: "name", headerName: "name", width: "150" },
    { field: "username", headerName: "username", width: "150" },
    { field: "email", headerName: "email", width: "200" },
    {
      field: "address",
      headerName: "address",
      width: "400",
      renderCell: ({ row }) => {
        return (
          <Typography>
            {row.address && (
              <>
                {row.address.street}, {row.address.suite}, {row.address.city},{" "}
                {row.address.zipcode}
              </>
            )}
          </Typography>
        );
      },
    },
    { field: "phone", headerName: "phone", width: "200" },
    { field: "website", headerName: "website", width: "100" },
    {
      field: "company",
      headerName: "company",
      width: "500",
      renderCell: ({ row }) => {
        return (
          <Typography>
            {row.company && (
              <>
                {row.company.name},{row.company.catchPhrase},{row.company.bs}
              </>
            )}
          </Typography>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        sx={{
          overflowX: "auto",
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
          // "& .MuiDataGrid-cell": {
          //   minWidth: "200px !important",
          //   minHeight: "200px !important",
          // },
        }}
      >
        <DataGrid rows={data} columns={columns}></DataGrid>
      </Box>
    </Box>
  );
};

export default Team;
