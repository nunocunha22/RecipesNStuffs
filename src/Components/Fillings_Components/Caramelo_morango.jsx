import React from "react";
import { Card, CardContent, Link } from "@mui/material";

export default function CarameloMorango() {
    return (
        <div className="margin-top-32">
            <h1>Receita de caramelo de morango</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                    <h3>&#45;&#62; para aproximadamente 50 a 60 macarrons</h3>
                    <h3>&#45;&#62; para aproximadamente 1 camada de bolo</h3>
                </li>
                <li>1 pacote de natas para bater (200ml)</li>
                <li>150g de chocolate branco</li>
                <li>50g de manteiga sem sal</li>
                <li>100ml de sumo de limão</li>
                <li>corante amarelo a gosto (opcional)</li>
                <li>6g de agar-agar ou 20gr de gelatina sem sabor em pó (opcional! Só uso agar-agar ou gelatina quando é para rechear macarrons. Se for para recheio de bolo não uso! )</li>
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
                        <Link href="./pictures/carameloMorango1.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\carameloMorango1.png" alt=" Caramelo Morango " />
                        </Link>
                        <h2>Caramelo Morango</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="./pictures/carameloMorango2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\carameloMorango2.png" alt="Caramelo Morango batido" />
                        </Link>
                        <h2>Caramelo Morango batido</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};