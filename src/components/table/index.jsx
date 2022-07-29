import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import {
  Pagination,
  Typography,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";

function createData(test1, test2, info, test3, test4, testID) {
  return { test1, test2, info, test3, test4, testID };
}

const rows = [
  createData(
    "Обработка различной тестовой информации",
    "ID82724506",
    "CGLOGGING регистрация app_id",
    "Приложение",
    "reestrdover",
    "uslndlcrmrb-svd-4d03-94a5-e144fcb78d34"
  ),
  createData(
    "Обработка различной тестовой информации",
    "ID82724506",
    "CGLOGGING регистрация app_id",
    "Приложение",
    "reestrdover",
    "uslndlcrmrb-svd-4d03-94a5-e144fcb78d34"
  ),
  createData(
    "Обработка различной тестовой информации",
    "ID82724506",
    "CGLOGGING регистрация app_id",
    "Приложение",
    "reestrdover",
    "uslndlcrmrb-svd-4d03-94a5-e144fcb78d34"
  ),
  createData(
    "Обработка различной тестовой информации",
    "ID82724506",
    "CGLOGGING регистрация app_id",
    "Приложение",
    "reestrdover",
    "uslndlcrmrb-svd-4d03-94a5-e144fcb78d34"
  ),
  createData(
    "Обработка различной тестовой информации",
    "ID82724506",
    "CGLOGGING регистрация app_id",
    "Приложение",
    "reestrdover",
    "uslndlcrmrb-svd-4d03-94a5-e144fcb78d34"
  ),
  createData(
    "Обработка различной тестовой информации",
    "ID82724506",
    "CGLOGGING регистрация app_id",
    "Приложение",
    "reestrdover",
    "uslndlcrmrb-svd-4d03-94a5-e144fcb78d34"
  ),
  createData(
    "Обработка различной тестовой информации",
    "ID82724506",
    "CGLOGGING регистрация app_id",
    "Приложение",
    "reestrdover",
    "uslndlcrmrb-svd-4d03-94a5-e144fcb78d34"
  ),
  createData(
    "Обработка различной тестовой информации",
    "ID82724506",
    "CGLOGGING регистрация app_id",
    "Приложение",
    "reestrdover",
    "uslndlcrmrb-svd-4d03-94a5-e144fcb78d34"
  ),
  createData(
    "Обработка различной тестовой информации",
    "ID82724506",
    "CGLOGGING регистрация app_id",
    "Приложение",
    "reestrdover",
    "uslndlcrmrb-svd-4d03-94a5-e144fcb78d34"
  ),
  createData(
    "Обработка различной тестовой информации",
    "ID82724506",
    "CGLOGGING регистрация app_id",
    "Приложение",
    "reestrdover",
    "uslndlcrmrb-svd-4d03-94a5-e144fcb78d34"
  ),
];

const HeadTitle = [
  {
    id: "test1",
    label: "Название теста",
    align: "left",
    sortable: true,
    sortDirection: "asc",
  },
  {
    id: "test2",
    label: "Идентификатор",
    align: "left",
    sortable: true,
    sortDirection: "asc",
  },
  {
    id: "info",
    label: "Информация",
    align: "left",
    sortable: true,
    sortDirection: "asc",
  },
  {
    id: "test3",
    label: "Тип",
    align: "left",
    sortable: true,
    sortDirection: "asc",
  },
  {
    id: "test4",
    label: "Значение",
    align: "left",
    sortable: true,
    sortDirection: "asc",
  },
  {
    id: "testID",
    label: "Идентификатор",
    align: "left",
    sortable: true,
    sortDirection: "asc",
  },
];

export default function BasicTable() {
  const [page, setPage] = React.useState(10);

  return (
    <Box
      sx={{
        width: "max-content",
        maxWidth: "calc(1920px - 50px)",
        margin: "24px auto",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          width: "max-content",
          margin: "0 auto",
          boxShadow: "none",
        }}
      >
        <TableContainer 
        sx={{ maxWidth: "calc(100vw - 50px)", }}
        >
          <Table
            sx={{
              maxWidth: "calc(100vw - 50px)",
              // width: "1920px",
              overflow: "scroll",
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                {HeadTitle.map((_title, i) => (
                  <TableCell
                    align="left"
                    key={i}
                    sx={{
                      width: "max-content",
                      paddingTop: "40px",
                      // minWidth: "calc(100vw / 6 - 50px)",
                    }}
                  >
                    <Box
                      sx={{
                        alignItems: "center",
                        gap: "8px",
                        cursor: "pointer",
                        display: "flex",
                        // justifyContent: i !== 5 ? "flex-start" : "flex-end",
                      }}
                    >
                      <UnfoldMoreIcon
                        sx={{
                          width: "15px",
                          height: "20px",
                        }}
                      />
                      <Typography
                        sx={{
                          width: "max-content",
                          fontSize: ".875rem",
                        }}
                      >
                        {_title?.id}
                      </Typography>
                    </Box>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography
                      sx={{
                        width: "max-content",
                        fontSize: ".875rem",
                      }}
                    >
                      {row.test1}
                    </Typography>
                  </TableCell>
                  <TableCell align="left" sx={{ width: "max-content" }}>
                    <Typography
                      sx={{
                        width: "max-content",
                        fontSize: ".875rem",
                      }}
                    >
                      {row.test2}
                    </Typography>
                  </TableCell>
                  <TableCell align="left" sx={{ width: "max-content" }}>
                    <Typography
                      sx={{
                        width: "max-content",
                        fontSize: ".875rem",
                      }}
                    >
                      {row.info}
                    </Typography>
                  </TableCell>
                  <TableCell align="left" sx={{ width: "max-content" }}>
                    <Typography
                      sx={{
                        width: "max-content",
                        fontSize: ".875rem",
                      }}
                    >
                      {row.test3}
                    </Typography>
                  </TableCell>
                  <TableCell align="left" sx={{ width: "max-content" }}>
                    <Typography
                      sx={{
                        width: "max-content",
                        fontSize: ".875rem",
                      }}
                    >
                      {row.test4}
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      width: "max-content",
                    }}
                  >
                    <Typography
                      sx={{
                        width: "max-content",
                        fontSize: ".875rem",
                        // minWidth: "100%",
                        // textAlign: "right",
                      }}
                    >
                      {row.testID}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            justifyContent: "space-between",
            borderRadius: "0px 0px 4px 4px",
            alignItems: "center",
            display: "flex",
            margin: "0 auto",
            background: "#FFFFFF",
            // marginTop: "19px",
            borderTop: "1px solid #E0E0E0",
            height: "55px",
            overflow: "hidden",
          }}
        >
          <Typography
            align="left"
            variant="h6"
            component="h6"
            sx={{ fontSize: "0.875rem", padding: "16px" }}
          >
            Показано приложений: 1-10 из 100
          </Typography>
          <Box
            sx={{
              justifyContent: "space-between",
              borderRadius: "0px 0px 4px 4px",
              alignItems: "center",
              display: "flex",
            }}
          >
            <FormControl variant="standard" sx={{ m: 0, border: "none" }}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={page}
                sx={{
                  fontSize: "0.875rem",
                  height: "70px",
                  overflow: "hidden",
                }}
              >
                <MenuItem
                  sx={{ fontSize: "0.875rem" }}
                  onClick={() => setPage(10)}
                  value={10}
                >
                  Показывать по 10
                </MenuItem>
                <MenuItem
                  sx={{ fontSize: "0.875rem" }}
                  onClick={() => setPage(20)}
                  value={20}
                >
                  Показывать по 20
                </MenuItem>
                <MenuItem
                  sx={{ fontSize: "0.875rem" }}
                  onClick={() => setPage(30)}
                  value={30}
                >
                  Показывать по 30
                </MenuItem>
              </Select>
            </FormControl>
            <Pagination count={100} color="primary" />
          </Box>
        </Box>
      </TableContainer>
    </Box>
  );
}
