import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function Cupcakes() {
    return (
        <div className="margin-top-32">
            <h1>Receita de cupcakes</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                    <h3>&#45;&#62; para 15 a 17 cupcakes</h3>
                </li>
                <ul>
                    <li>3 ovos (separar as claras e as gemas)</li>
                    <li>100g de manteiga sem sal (temperatura ambiente)</li>
                    <li>160g de açúcar</li>
                    <li>120ml de leite</li>
                    <li>180g de farinha</li>
                    <li>5ml de aroma de baunilha</li>
                    <li>9g de fermento em pó</li>
                </ul>
            </ul>
            <ul>
                <li>
                    <h2>Preparação</h2>
                </li>
                <ol>
                    <li>Bater as claras em castelo e reservar.</li>
                    <li>Num recipiente juntar as gemas, o açúcar e a manteiga até formarem um creme.</li>
                    <li>Adicionar o leite e aroma de baunilha. Bater muito bem.</li>
                    <li>Adicionar a farinha e o fermento e bater tudo até obter uma massa homogénea e sem grumos.</li>
                    <li>Adicionar as claras batidas em 2 ou 3 vezes. Mexer delicadamente, com um salazar ou uma colher de pau, até incorporar tudo muito bem.</li>
                    <li>Pré-aquecer o forno a 180ºC </li>
                    <li>Verter a massa em forminhas de cupcakes. Encher as forminhas pela metade ou, no máximo, até aos 2/3 para obter um cupcake um pouco mais alto que a forminha</li>
                    <li>Colocar no forno a 180ºC, com ventoinha, por 20min.</li>
                    <li>Esperar até arrefecerem completamente para poder decorá-los</li>
                </ol>
                <p className="nota"><strong>Nota: </strong> Conservar os cupcakes fora do frigorifico. Conservá-los num recipiente fechado, de preferência hermético, à temperatura ambiente. </p>
            </ul>
            <ul>
                <li>
                    <h2>Galeria de imagens</h2>
                </li>
            </ul>
            <div className="display-grid-pic">
                <Card>
                    <CardContent>
                        <Link href="/pictures/cupcakes2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\cupcakes2.png" alt="cupcakes" />
                        </Link>
                        <h2>Cupcakes</h2>
                    </CardContent>
                </Card>
            </div>
        </div >
    )
};