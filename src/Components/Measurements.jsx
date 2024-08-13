import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(name, conversion) {
    return { name, conversion };
}

const rows = [
    createData('Açúcar', 200),
    createData('Farinha de trigo', 120),
]

export default function Measurements() {
    return (
        <div className="display-grid">
            <img className="pagePicture" src=".\pictures\bluestain.png" alt="blue stain" />

            <TableContainer className="margin-top-32">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Xícara</TableCell>
                            <TableCell align="right">Conversão&nbsp;(g)</TableCell>
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
                                <TableCell align="right">{row.conversion}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableHead>
                        <TableRow>
                            <TableCell>Colher sopa</TableCell>
                            <TableCell align="right">Conversão&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        </div>
    )
}