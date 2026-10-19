"use client";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import { useMemo, useState } from "react";
import { moduleRecords, type ModuleRecord } from "@/data/moduleRecords";

const columns: { key: keyof Omit<ModuleRecord, "id">; label: string }[] = [
  { key: "requestType", label: "Request Type" },
  { key: "phoneNumber", label: "Phone Number" },
  { key: "personalIdType", label: "Personal ID Type" },
  { key: "personalId", label: "Personal ID" },
  { key: "accountNumber", label: "Account Number" },
  { key: "cif", label: "CIF" },
  { key: "email", label: "Email" },
];

const requestTypes = [...new Set(moduleRecords.map((record) => record.requestType))];

export function ModuleRecordTable() {
  const [query, setQuery] = useState("");
  const [requestType, setRequestType] = useState("all");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filterAnchor, setFilterAnchor] = useState<HTMLElement | null>(null);

  const filteredRecords = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return moduleRecords.filter((record) => {
      const matchesType = requestType === "all" || record.requestType === requestType;
      if (!matchesType) {
        return false;
      }
      if (!needle) {
        return true;
      }

      return columns.some((column) => record[column.key].toLowerCase().includes(needle));
    });
  }, [query, requestType]);

  const visibleRecords = filteredRecords.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  const applyRequestType = (nextType: string) => {
    setRequestType(nextType);
    setPage(0);
    setFilterAnchor(null);
  };

  return (
    <Stack spacing={2}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ alignItems: { sm: "center" } }}>
        <TextField
          value={query}
          placeholder="Search"
          aria-label="Search"
          size="small"
          onChange={(event) => {
            setQuery(event.target.value);
            setPage(0);
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            },
          }}
          sx={{ width: { xs: "100%", sm: 280 }, bgcolor: "background.paper" }}
        />
        <Button
          variant="outlined"
          endIcon={<KeyboardArrowDownIcon />}
          aria-haspopup="menu"
          aria-expanded={filterAnchor ? "true" : "false"}
          onClick={(event) => setFilterAnchor(event.currentTarget)}
          sx={{ alignSelf: { xs: "flex-start", sm: "auto" }, px: 2, bgcolor: "background.paper" }}
        >
          Filter
        </Button>
        <Menu
          anchorEl={filterAnchor}
          open={Boolean(filterAnchor)}
          onClose={() => setFilterAnchor(null)}
        >
          <MenuItem selected={requestType === "all"} onClick={() => applyRequestType("all")}>
            All request types
          </MenuItem>
          {requestTypes.map((type) => (
            <MenuItem
              key={type}
              selected={requestType === type}
              onClick={() => applyRequestType(type)}
            >
              {type}
            </MenuItem>
          ))}
        </Menu>
      </Stack>
      <Box sx={{ bgcolor: "background.paper" }}>
        <TableContainer>
          <Table sx={{ minWidth: 1200 }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.key}
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleRecords.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={columns.length} sx={{ color: "text.secondary" }}>
                    No records match this search.
                  </TableCell>
                </TableRow>
              ) : (
                visibleRecords.map((record) => (
                  <TableRow key={record.id} hover>
                    {columns.map((column) => (
                      <TableCell
                        key={column.key}
                        sx={{
                          whiteSpace: column.key === "requestType" ? "normal" : "nowrap",
                          maxWidth: column.key === "requestType" ? 220 : "none",
                          verticalAlign: "top",
                        }}
                      >
                        {record[column.key]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={filteredRecords.length}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[10, 25]}
          onPageChange={(_event, nextPage) => setPage(nextPage)}
          onRowsPerPageChange={(event) => {
            setRowsPerPage(Number(event.target.value));
            setPage(0);
          }}
        />
      </Box>
    </Stack>
  );
}
