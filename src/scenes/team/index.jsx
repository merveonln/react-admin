import React, { useEffect, useState } from "react";
import { tokens } from "../../theme";
import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
// import { mockDataTeam } from "../../data/mockData";
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
    {
      field: "name",
      headerName: "Name",
      width: "150",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "username",
      headerName: "User Name",
      width: "120",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: "180",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "address",
      headerName: "Address",
      width: "400",
      headerAlign: "center",
      align: "center",
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
    {
      field: "phone",
      headerName: "Phone",
      width: "150",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "website",
      headerName: "Website",
      width: "200",
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { website } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={colors.greenAccent[600]}
            borderRadius="4px"
          >
            <AdminPanelSettingsOutlinedIcon />
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {website}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "company",
      headerName: "Company",
      width: "350",
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Typography>
            {row.company && (
              <>
                {row.company.name},{row.company.catchPhrase}
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
            backgroundColor: colors.primary[800],
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
