import React from "react";
import { Card, CardContent, Link } from "@mui/material";

export default function BiscoitosAvelã() {
    return (
        <div className="margin-top-32">
            <h1>Receita de biscoitos de avelã recheados</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                </li>
            </ul>
            <ul>
                <li>
                    <h2>Preparação</h2>
                </li>
            </ul>
            <ul>
                <li>
                    <h2>Galeria de imagens</h2>
                </li>
            </ul>
            <div className="display-grid-pic">
                <Card>
                    <CardContent>
                        <Link href="./pictures/biscoitoAvela2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\biscoitoAvela2.png" alt="Biscoitos avelã" />
                        </Link>
                        <h2>Biscoitos de avelã</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="./pictures/biscoitoAvela3.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\biscoitoAvela3.png" alt="Biscoitos avelã" />
                        </Link>
                        <h2>Biscoitos de avelã</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};