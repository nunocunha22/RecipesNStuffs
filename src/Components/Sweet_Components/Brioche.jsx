import React from "react";
import { Card, CardContent, Link } from "@mui/material";

export default function Brioche() {
    return (
        <div className="margin-top-32">
            <h1>Receita de brioche</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                </li>
                <ul>
                    <h3>Esponja</h3>
                    <li>10g de fermento seco</li>
                    <li>100g de farinha sem fermento</li>
                    <li>100ml de agua</li>
                </ul>
                <ul>
                    <h3>Massa</h3>
                    <li>450 de farinha sem fermento</li>
                    <li>80 a 100g de açúcar</li>
                    <li>120g de manteiga sem sal (a temperatura ambiente: importante!!)</li>
                    <li>2 ovos M</li>
                    <li>200ml de leite</li>
                    <li>3 a 5g de sal</li>
                    <li>1 gema (para pincelar)</li>
                </ul>
            </ul>
            <ul>
                <li>
                    <h2>Preparação</h2>
                    <div className="prepTime">&#x1F552; <p>preparação + forno: </p>1h15</div>
                    <div className="prepTime">&#x1F552; <p>descanso da massa:</p>2h30 a 3h</div>
                </li>
                <ol>
                    <li>Preparação da esponja: Misturar todos os ingredientes (fermento, farinha e água) num recipiente. Cobrir com papel aderente ou alúminio e deixar repousar 30min.</li>
                    <li>Passados os 30 minutos, noutro recipiente (no da batedeira se for usar a batedeira planetária) colocar a farinha, os ovos, o leite, o açúcar e a esponja reservada.</li>
                    <li>Misturar para incorporar os ingredientes. Quando os ingredientes já estiverem ligeiramente incorporados, adicione o sal.</li>
                    <li>Bater bem durante uns 10 ou 12 minutos, até obter o ponto de véu. Nesta altura já teremos obtido uma massa homogénea que não cola nas mãos.</li>
                    <li>Se a massa ainda agarrar nas mãos, adicione aos poucos farinha. Se a massa estiver demasiado seca, acrescente um pouco de água. Misture muito bem sempre que se acrescentar algo.</li>
                    <li>Quando a massa já estiver no ponto certo, acrescentar a manteiga de uma só vez. Bater bem até a manteiga ficar completamente incorporada.</li>
                    <li>Cubra o recipiente onde está a massa com papel aderente e deixe repousar, em temperatura ambiente, cerca de 30min, até que dobre de volume.</li>
                    <li>Passado esse tempo, unte uma forma (usei uma de 30cm de comprimento e 7cm de altura). Corte a massa em 6, 8 ou 10 pedaços iguais. Faça bolas e disponha na forma em 2 ou 3 linhas. Pode também entrançar a massa ou fazer uma única bola. </li>
                    <li>Cobrir a massa com um pano e deixar que cresça dentro da forma cerca de 1h30 a 2h.</li>
                    <li>Passado esse tempo pré-aquecer o forno a 180ºC.</li>
                    <li>Antes de levar ao forno, misturar a gema de ovo com meia colher de sopa de água numa tigela. Pincelar o brioche.</li>
                    <li>Levar ao forno a 180ºC (com ventoinha) cerca de 45min. É possivel que aos 20min o brioche já esteja "tostado" na parte superior. Se for o caso cobrir com papel alumínio e deixar cozer.</li>
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
                        <Link href="./pictures/brioche1.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\brioche1.png" alt="Brioche" />
                        </Link>
                        <h2>Brioche</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="./pictures/brioche2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\brioche2.png" alt="Brioche" />
                        </Link>
                        <h2>Brioche</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="./pictures/brioche3.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\brioche3.png" alt="Brioche" />
                        </Link>
                        <h2> Brioche</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};