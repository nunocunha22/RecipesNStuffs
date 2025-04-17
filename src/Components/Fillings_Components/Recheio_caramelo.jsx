import React from "react";
import { Card, CardContent, Link } from "@mui/material";

export default function RecheioCaramelo() {
    return (
        <div className="margin-top-32">
            <h1>Receita de recheio de caramelo</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                    <h3>&#45;&#62; para aproximadamente 50 a 60 macarrons</h3>
                    <h3>&#45;&#62; para aproximadamente 1 camada de bolo</h3>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
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
                        <Link href="../pictures/xxx.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="..\pictures\xxx.png" alt="Recheio caramelo" />
                        </Link>
                        <h2>Recheio caramelo</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};