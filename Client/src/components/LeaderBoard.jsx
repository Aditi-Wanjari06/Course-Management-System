import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(Rank, UserName, Points, Badges, Feedback ) {
  return { Rank, UserName, Points, Badges, Feedback };
}

const rows = [
  createData(1, 'Andys', 193, '🎖5',"😎Excellent Performance"),
  createData(2, 'Rayn', 190, '🎖4', "😍Superb"),
  createData(3, 'Tobi', 182, '🎖3',"🤩Well Done"),
  createData(4, 'Mike', 175, '🎖2',"🙌Good"),
  createData(4, 'Mike', 175, '🎖2',"🙌Good"),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>Rank</StyledTableCell>
     
            <StyledTableCell align="center">UserName</StyledTableCell>
            <StyledTableCell align="center">Points&nbsp;</StyledTableCell>
            <StyledTableCell align="center">Badges&nbsp;</StyledTableCell>
            <StyledTableCell align="center">Feedback&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row" align='center'>
                {row.Rank}
              </StyledTableCell>
        
              <StyledTableCell align="center">{row.UserName}</StyledTableCell>
              <StyledTableCell align="center">{row.Points}</StyledTableCell>
              <StyledTableCell align="center">{row.Badges}</StyledTableCell>
              <StyledTableCell align="center">{row.Feedback}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}