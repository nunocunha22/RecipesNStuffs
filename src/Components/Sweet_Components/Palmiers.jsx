import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function Palmiers() {
    return (

        <div className="margin-top-32">
            <h1>Receita de palmiers</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                </li>
                <ul>
                    <li>Massa folhada quadrada</li>
                    <li>Para "recheio":</li>
                    <ul>
                        <li>Açúcar (a gosto)</li>
                        ou
                        <li>Açúcar e canela (a gosto)</li>
                        ou
                        <li>Nutella (a gosto)</li>
                    </ul>
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
                        <Link href="./pictures/palmiers.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\palmiers.png" alt="Palmiers" />
                        </Link>
                        <h2>Açúcar e canela + Nutella</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )

};