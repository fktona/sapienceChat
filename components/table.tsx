import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from './button';
import Paper from '@mui/material/Paper';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

function createData(
    name: string,
    link: string,
    ID: number,
    visits: number,
    button: () => JSX.Element,
) {
    return { name, link, ID, visits, button};
}

const rows = [
    createData( 'Send spear', 'link', 6567, 24, () => <Button icons={<SyncAltIcon />}>update</Button>),
];

export default function AiTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">NAME</TableCell>
            <TableCell align="right">LINK</TableCell>
            <TableCell align="right">VISITS</TableCell>
            <TableCell align="right">ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.link}</TableCell>
              <TableCell align="right">{row.ID}</TableCell>
              <TableCell align="right">{row.visits}</TableCell>
              <TableCell align="right"> {row.button()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}