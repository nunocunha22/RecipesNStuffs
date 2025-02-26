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
                    <li>Massa folhada retangular</li>
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
                    <li>Abrir e estender a massa folhada. Dividir e marcar 6 partes iguais como está na imagem "Passo 1" (NÃO CORTAR! Só marcar)</li>
                    <li>Barrar na totalidade o creme de chocolate ou o açucar com a canela ou qualquer outro Ingredientes que se prefira.</li>
                    <li>Dobrar os dois lados da massa 2 vezes cada uma sempre em cima das marcas feitas no Passo 1. (Ver imagem Passo 3) </li>
                    <li>Quando os 2 lados da massa estiverem um ao lado do outro, dobrar uma metade para cima da outra. Para obter algo parecido com a imagem do "passo 4"</li>
                    Nota: depois deste passo completado, costumo cobrir a massa e pô-la no congelador 30min. Ela fica mais rija e é mais fácil cortar os pedaços sem que fique colada à faca.
                    <li>Pré-aquecer o forno a 200ºC</li>
                    <li>Cortar fatias de aproximadamente 1cm de largura e dispôr num tabuleiro com papel vegetal. Dispôr todas as fatias no mesmo sentido e deixando algum espaço entre elas para poderem abrir </li>
                    <li>Meter no forno a 200ºC (com ventoinha) durante aproximadamente uns 15 a 17min</li>
                    <li>Retirar do forno e esperar uns bons minutos antes de comer.....que é para não queimar a língua e os dedos</li>
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
                        <Link href="/pictures/Palmiers1.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\Palmiers1.png" alt="Palmiers" />
                        </Link>
                        <h2>Passo 1</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/Palmiers2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\Palmiers2.png" alt="Palmiers" />
                        </Link>
                        <h2>Passo 2</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/Palmiers3.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\Palmiers3.png" alt="Palmiers" />
                        </Link>
                        <h2>Passo 3</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/Palmiers4.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\Palmiers4.png" alt="Palmiers" />
                        </Link>
                        <h2>Passo 4</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/Palmiers5.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\Palmiers5.png" alt="Palmiers" />
                        </Link>
                        <h2>Passo 5</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/Palmiers6.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\Palmiers6.png" alt="Palmiers" />
                        </Link>
                        <h2>Passo 6</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/Palmiers7.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\Palmiers7.png" alt="Palmiers" />
                        </Link>
                        <h2>Passo 7</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/palmiersAcucar.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\palmiersAcucar.png" alt="Palmiers" />
                        </Link>
                        <h2>Palmiers açúcar e canela</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/palmiersChocolate.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\palmiersChocolate.png" alt="Palmiers" />
                        </Link>
                        <h2>Palmiers chocolate</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )

};