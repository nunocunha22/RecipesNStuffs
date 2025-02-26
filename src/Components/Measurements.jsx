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

const rows_solid_xicara = [
    createData('Açúcar', 200),
    createData('Farinha de trigo', 120),
]
const rows_solid_sopa = [
    createData('Açúcar', 20),
    createData('Farinha de trigo', 10),
]

const rows_liquid_xicara = [
    createData('Água', 240),
]
const rows_liquid_sopa = [
    createData('Água', 15),
]


export default function Measurements() {
    return (
        <div>
            <TableContainer className="margin-top-32">
                <h1>Sólidos</h1>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Xícara</TableCell>
                            <TableCell align="right">Conversão&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows_solid_xicara.map((row) => (
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
                    <TableBody>
                        {rows_solid_sopa.map((row) => (
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
                            <TableCell>Colher sobremesa</TableCell>
                            <TableCell align="right">Conversão&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>
                            <TableCell>Colher chá</TableCell>
                            <TableCell align="right">Conversão&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
            <TableContainer className="margin-top-32">
                <h1>Liquidos</h1>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Xícara</TableCell>
                            <TableCell align="right">Conversão&nbsp;(ml)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows_liquid_xicara.map((row) => (
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
                            <TableCell align="right">Conversão&nbsp;(ml)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows_liquid_sopa.map((row) => (
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
                            <TableCell>Colher sobremesa</TableCell>
                            <TableCell align="right">Conversão&nbsp;(ml)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>
                            <TableCell>Colher chá</TableCell>
                            <TableCell align="right">Conversão&nbsp;(ml)</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        </div>
    )
}