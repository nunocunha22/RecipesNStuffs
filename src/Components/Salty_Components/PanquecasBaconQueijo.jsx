import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function PanquecasBaconQueijo() {
    return (

        <div className="margin-top-32">
            <h1>Receita de Panquecas de queijo e bacon</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                    <h3>&#45;&#62; para 15 mini panquecas</h3>
                </li>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </ul>
            <ul>
                <li>
                    <h2>Preparação</h2>
                </li>
                <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            </ul>
            <ul>
                <li>
                    <h2>Galeria de imagens</h2>
                </li>
            </ul>
            <div className="display-grid-pic">
                <Card>
                    <CardContent>
                        <Link href="/pictures/panquecasBaconQueijo1.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\panquecasBaconQueijo1.png" alt="panquecas" />
                        </Link>
                        <h2>Panquecas</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/panquecasBaconQueijo2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\panquecasBaconQueijo2.png" alt="panquecas" />
                        </Link>
                        <h2>Panquecas</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )

};