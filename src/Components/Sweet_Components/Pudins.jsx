import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function Pudins() {
    return (
        <div className="margin-top-32">
            <h1>Receita de Pudins</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                    <h3>&#45;&#62; para aproximadamente 6 doses </h3>
                </li>
                <ul>
                    <li></li>
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
                    <div className="prepTime">&#x1F552; <p>preparação: </p>15min</div>
                    <div className="prepTime">&#x1F552; <p>descanso:</p>2h (min) </div>
                    <div className="preservTime"><p>&#x2746;</p><p>conservação:</p>5 dias, no frigorifico </div>
                </li>
                <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
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
                        <Link href="/pictures/pudimPipoca1.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\pudimPipoca1.png" alt="Pudim" />
                        </Link>
                        <h2>Pudim Pipoca</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/pudimPipoca2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\pudimPipoca2.png" alt="Pudim" />
                        </Link>
                        <h2>Pudim Pipoca</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};