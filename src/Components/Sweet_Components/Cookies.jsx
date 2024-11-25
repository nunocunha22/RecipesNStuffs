import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function Cookies() {
    return (
        <div className="margin-top-32">
            <h1>Receita de cookies</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                    <h3>&#45;&#62; para aproximadamente 60 ccookies</h3>
                </li>
                <ul>
                    <li>125g de manteiga sem sal (temperatura ambiente)</li>
                    <li>1 ovo</li>
                    <li>125g de açúcar</li>
                    <li>75g de açúcar mascavado</li>
                    <li>210g de farinha</li>
                    <li>5g de fermento em pó</li>
                    <li>5ml de aroma de baunilha (1 colher de sobremesa)</li>
                    <li>300g de chocolate picado</li>
                    ou
                    <li>300g de pepitas de chocolate</li>
                </ul>
            </ul>
            <ul>
                <li>
                    <h2>Preparação</h2>
                    <div className="prepTime">&#x1F552; <p>preparação + forno: </p>25min</div>
                    <div className="prepTime">&#x1F552; <p>descanso (opcional):</p>45min a 1h: </div>
                </li>
                <ol>
                    <li>Num recipiente, misturar a manteiga, o açúcar mascavado, o açucar e o aroma de baunilha até obter uma massa homogénea</li>
                    <li>Adicionar o ovo e bater tudo muito bem</li>
                    <li>Adicionar aos poucos a farinha e o fermento e misturar tudo muito bem. Há-de chegar um ponto em que será preciso usar as mãos para misturar. Usando uma espátula de silicone também serve, mas a força tende em faltar ao fim de 1min...</li>
                    <li>Depois de tudo bem misturado, acrescentar o chocolate picado (finamente ou em pedaços maiores, depende do gosto de cada um) ou as pepitas de chocolate</li>
                    <li>Misturar tudo muito bem até o chocolate ficar bem espalhado pela massa</li>
                    <li>Agarrar em aproximadamente 15g de massa e fazer bolinhas com as mãos. Dispor num tabuleiro forrado com papel vegetal, e deixar cerca de 2 a 3cm entre a bolinhas porque vão "derreter" para obter a forma os cookies.</li>
                    <li>Este passo agora é opcional, mas confesso que ao fazê-la a textura dos cookies parece-me melhor. O passo consiste em colocar os cookies no frigorifico por aproximadamente 45min a 1h</li>
                    <li>Ao fim desse tempo, pré_aquecer o forno a 200ºC</li>
                    <li>Colocar no forno, com ventoinha, uns 10min</li>
                    <li>Retirar do forno e avisar as crianças para não mexer porque ainda estão muito quente. O aviso também serve para os adultos gulosos&#128514;</li>
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
                        <Link href="./pictures/cookies2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\cookies2.png" alt="Tabuleiro de cookies" />
                        </Link>
                        <h2>Disposição</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="./pictures/cookies1.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\cookies1.png" alt="Cookies" />
                        </Link>
                        <h2>Cookies</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};