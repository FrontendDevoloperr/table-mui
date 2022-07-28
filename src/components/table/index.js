import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
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

function Arrow() {
  return (
    <svg
      width="13"
      height="16"
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.66671 10.0007L5.00004 13.334L8.33337 10.0007"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33329 5.99935L4.99996 2.66602L1.66663 5.99935"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
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
    "React redux",
    "ID82724508",
    "Информация q312tr2314132",
    "Базовая витрина",
    "testnput12",
    "2testing-id-qwe412123-5122-fds1345121"
  ),
  createData(
    "Vue angular свойства и различия",
    "ID82724507",
    "Тест регистрация qvd2212143",
    "testnput12",
    "6.0",
    "62test52ing-id-qwe123-5122-fds1345121"
  ),
  createData(
    "Работа с данными",
    "ID82724509",
    "Тест регистрация qvd221143",
    "Специальная витрина",
    "new24",
    "5423testing234-id-123-5122-fds1345121"
  ),
  createData(
    "Что такое react",
    "ID82724507",
    "Тест регистрация qvd2143",
    "Сервис",
    "152test",
    "testing-id-qwe123-5122-fds1345121"
  ),
];

export default function BasicTable() {
  const [page, setPage] = React.useState(10);


  return (
    <Box
      sx={{
        width: "max-content",
        maxWidth: "calc(100vw - 50px)",
        margin: "0 auto",
        padding: "0px 24px",
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 420 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ width: "max-content" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <Arrow /> <p>Тест1</p>
                </Box>
              </TableCell>
              <TableCell align="left" sx={{ width: "max-content" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <Arrow /> <p>Тест2</p>
                </Box>
              </TableCell>
              <TableCell align="left" sx={{ width: "max-content" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <Arrow /> <p>Инфо</p>
                </Box>
              </TableCell>
              <TableCell align="left" sx={{ width: "max-content" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <Arrow /> <p>Тест3</p>
                </Box>
              </TableCell>
              <TableCell align="left" sx={{ width: "max-content" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <Arrow /> <p>Тест4</p>
                </Box>
              </TableCell>
              <TableCell align="left" sx={{ width: "max-content" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <Arrow /> <p>Test_ID</p>
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.test1}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.test1}
                </TableCell>
                <TableCell align="left" sx={{ width: "max-content" }}>
                  {row.test2}
                </TableCell>
                <TableCell align="left" sx={{ width: "max-content" }}>
                  {row.info}
                </TableCell>
                <TableCell align="left" sx={{ width: "max-content" }}>
                  {row.test3}
                </TableCell>
                <TableCell align="left" sx={{ width: "max-content" }}>
                  {row.test4}
                </TableCell>
                <TableCell align="left" sx={{ width: "max-content" }}>
                  {row.testID}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box
          sx={{
            justifyContent: "space-between",
            borderRadius: "0px 0px 4px 4px",
            borderTop: "1px solid #E0E0E0",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Typography
            align="left"
            variant="h6"
            component="h6"
            sx={{ fontSize: "0.875rem", padding: "16px" }}
          >
            Показано приложений: 1-10 из 85
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
                sx={{ fontSize: "0.875rem", height:"20px" , overflow:"hidden" }}
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
