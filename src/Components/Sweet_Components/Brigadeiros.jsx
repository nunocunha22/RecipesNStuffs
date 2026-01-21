import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function Brigadeiros() {
    return (
        <div className="margin-top-32">
            <h1>Receita de Brigadeiros de lima</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                    <h3>&#45;&#62; para aproximadamente 25 brigadeiros</h3>
                </li>
                <ul>
                    <li>1 lata de leite condensado (395g)</li>
                    <li>20g de chocolate branco</li>
                    <li>15g de manteiga sem sal</li>
                    <li>sumo de 2 limas</li>
                    <li>raspa de 2 limas</li>
                    <li>açúcar impalpavél para decoração (opcional)</li>
                    <li>granulado para decoração (opcional)</li>
                </ul>
            </ul>
            <ul>
                <li>
                    <h2>Preparação</h2>
                    <div className="prepTime">&#x1F552; <p>preparação + confeção: </p>45min a 1h</div>
                    <div className="prepTime">&#x1F552; <p>descanso:</p>4h (min)</div>
                </li>
                <ol>
                    <li>Colocar o sumo e a raspa de limão junto num recipiente. Reservar.</li>
                    <li>Colocar o leite condensado, o chocolate branco e a manteiga numa panela. Misture antes de ligar o fogo.</li>
                    <li>Ligue o fogo na intensidade média e vá mexendo sempre devagar.</li>
                    <li>Passados 7 a 8 min., a mistura irá começar a engrossar.</li>
                    <li>Continuar a mexer até obter o ponto de brigadeiro, que é quando a mistura demorar a juntar-se após passar a espátula no meio.</li>
                    <li>Quando chegar ao ponto certo, retirar a panela do lume e acrescentar o sumo e as raspas previamente reservados.</li>
                    <li>Misture bem até até ficar tudo totalmente incorporado.</li>
                    <li>Colocar a mistura num recipiente. Tapar com filme ao contacto e levar ao frigorífico por, no mínimo, 4h</li>
                    <li>Depois desse tempo, retirar do frigorífico e fazer bolinhas do tamanho pretendido.</li>
                    <li>Enrolar no açúcar impalpavél ou no granulado.</li>
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
                        <Link href="/pictures/brigadeirosLima.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\brigadeirosLima.png" alt="brigadeiros" />
                        </Link>
                        <h2>Brigadeiros de lima</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};