import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function Panquecas() {
    return (
        <div className="margin-top-32">
            <h1>Receita de Panquecas Prozis</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                    <h3>&#45;&#62; para aproximadamente 15 mini panquecas</h3>
                </li>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </ul>
            <ul>
                <li>
                    <h2>Preparação</h2>
                    <div className="prepTime">&#x1F552; <p>preparação</p>10min</div>
                    <div className="prepTime">&#x1F552; <p>descanso:</p>idealmente 2h, mas pode ser usado de imediato </div>
                </li>
                <ol>
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
                        <Link href="/pictures/panquecasProzis1.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\panquecasProzis1.png" alt="Donuts" />
                        </Link>
                        <h2>Panquecas Prozis</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/panquecasProzis2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\panquecasProzis2.png" alt="Donuts" />
                        </Link>
                        <h2>Panquecas Prozis</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};