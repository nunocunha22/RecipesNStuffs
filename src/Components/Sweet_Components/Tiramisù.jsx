import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function Tiramisu() {
    return (
        <div className="margin-top-32">
            <h1>Receita de Tiramisù de speculoos</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                    <h3>&#45;&#62; para aproximadamente 6 a 8 doses</h3>
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
                    <div className="prepTime">&#x1F552; <p>preparação</p>30 a 40min</div>
                    <div className="prepTime">&#x1F552; <p>descanso:</p>6h (min)</div>
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
                        <Link href="/pictures/tiramiuSpeculoos1.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\tiramiuSpeculoos1.png" alt="Tiramisù" />
                        </Link>
                        <h2>Tiramisù Speculoos</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/tiramiuSpeculoos2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\tiramiuSpeculoos2.png" alt="Tiramisù" />
                        </Link>
                        <h2>Tiramisù Speculoos</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};