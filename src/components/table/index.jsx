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

function UnfoldMoreIcon() {
  return (
    <svg
      width="13"
      height="16"
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.66683 10.0007L5.00016 13.334L8.3335 10.0007"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.33317 5.99935L4.99984 2.66602L1.6665 5.99935"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default function BasicTable() {
  const [page, setPage] = React.useState(10);

  return (
    <Box
      sx={{
        width: "max-content",
        maxWidth: "calc(100vw - 50px)",
        margin: "0 auto",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          width: "max-content",
          margin: "0 auto",
          padding: "0px 24px",
          boxShadow: "none",
        }}
      >
        <TableContainer sx={{ width: "calc(100vw - 96px)" }}>
          <Table
            sx={{ maxWidth: "calc(100vw - 50px)", overflow: "scroll" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                {HeadTitle.map((_title, i) => (
                  <TableCell
                    align="left"
                    key={i}
                    sx={{ width: "max-content", paddingTop: "40px" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        cursor: "pointer",
                      }}
                    >
                      <UnfoldMoreIcon />
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
                  <TableCell align="left" sx={{ width: "max-content" }}>
                    <Typography
                      sx={{
                        width: "max-content",
                        fontSize: ".875rem",
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
            height: "56px",
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
                sx={{
                  fontSize: "0.875rem",
                  height: "70px",
                  overflow: "hidden",
                  "*": {
                    background: "none",
                  },
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
