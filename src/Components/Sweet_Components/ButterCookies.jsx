import React from "react";
import { Card, CardContent, Link } from "@mui/material";

export default function ButterCookies() {
    return (
        <div className="margin-top-32">
            <h1>Receita de Butter Cookies</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                </li>
                <li>350 de farinha sem fermento</li>
                <li>150g de açúcar em pó</li>
                <li>230g de manteiga sem sal (a temperatura ambiente)</li>
                <li>2 ovos L</li>
                <li>1 gema</li>
                <li>uma pitada de sal</li>
                <li>chocolate a gosto para decorar (opcional)</li>
            </ul>
            <ul>
                <li>
                    <h2>Preparação</h2>
                </li>
                <ol>
                    <li>Bater  manteiga com o açucar e a pitada de sal até onter um creme homogéneo e liso.</li>
                    <li>Adicionar um a um os dois ovos. Bater muito bem a cada adição até os ovos ficarem bem incorporados à mistura.</li>
                    <li>Adicionar a gema e misturar bem.</li>
                    <li>Por fim, acrescentar a farinha e misturar bem até obter uma massa homogénea.</li>
                    <li>Colocar a massa num saco de confeiteiro com um bico que se pretenda usar. Se a massa estiver muito líquida pode ser colocada no frigorifico uns 30min.</li>
                    <li>Pré-aquecer o forno a 180ºC quando a massa estiver pronta a ser usada.</li>
                    <li>Num tabuleiro forrado com papel vegetal, fazer as formas que se deseje dar aos biscoitos.</li>
                    <li>Colocar o(s) tabuleiro(s) no forno e cozer durante uns 15min, ou até ficarem dourados, a 180ºC (com ventoinha).</li>
                    <li>Retirar do forno e decorar com chocolate se for o caso</li>
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
                        <Link href="./pictures/butterCookies1.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\butterCookies1.png" alt="Butter cookies" />
                        </Link>
                        <h2>Butter cookies</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};