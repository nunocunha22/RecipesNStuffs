import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function MousseChocolate() {
    return (

        <div className="margin-top-32">
            <h1>Mousse Chocolate</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                    <h3>&#45;&#62; para 6 a 8 pessoas</h3>
                </li>
                <ul>
                    <li>150gr chocolate</li>
                    <li>3 colheres sopa leite</li>
                    <li>200ml de natas</li>
                    <li>1 ovo</li>
                </ul>
            </ul>
            <ul>
                <li>
                    <h2>Preparação</h2>
                </li>
                <ol>
                    <li>Num recipiente juntar o chocolate e o leite. Levar a banho-maria até derreter o chocolate.</li>
                    <li>Separar a gema e a clara do ovo. Bater a clara em castelo.</li>
                    <li>Quando o chocolate estiver derretido, retirar do banho-maria e misturar tudo homogeneamente.</li>
                    <li>Bater a natas até ficarem firmes.</li>
                    <li>Acrescentar a gema ao chocolate derretido e misturar bem.</li>
                    <li>Juntar a mistura às natas batidas e mexer, com uma espátula, até a mistura ficar homogenea.</li>
                    <li>Juntar as claras delicadamente para não quebrá-las.</li>
                    <li>Colocar no frigorifico e deixar repousar no mínimo 3h.</li>
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
                        <Link href="/pictures/MousseChocolate1.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\MousseChocolate1.png" alt="Mousse Chocolate" />
                        </Link>
                        <h2>Mousse Chocolate</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/MousseChocolate2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\MousseChocolate2.png" alt="Mousse Chocolate" />
                        </Link>
                        <h2>Mousse Chocolate</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )

};