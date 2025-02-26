import React from "react";
import { Card, CardContent, Link } from "@mui/material";

export default function Yalanci() {
    return (
        <div className="margin-top-32">
            <h1>Receita de Yalancı Tavuk Göğsü (com chocolate)</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                </li>
                <ul>
                    <h3>Creme</h3>
                    <li>125gr de manteiga sem sal</li>
                    <li>120gr de farinha</li>
                    <li>200gr de açucar</li>
                    <li>1l de leite frio</li>
                    <li>1 colher de sopa de aroma de baunilha (opcional) </li>
                    <p className="nota"><strong>Nota: pode-se retirar 50gr de açúcar e o aroma de baunilha e substituir por 50gr de açúcar baunilhado (Aprox. 6 saquetas)</strong>.</p>
                </ul>
                <ul>
                    <h3>Cobertura</h3>
                    <li>1 pacote de natas para bater (200ml)</li>
                    <li>150gr de chocolate (negro ou leite ou misturar ambos)</li>
                </ul>
            </ul>
            <ul>
                <li>
                    <h2>Preparação</h2>
                    <div className="prepTime">&#x1F552; <p>tempo de preparação: </p>30min</div>
                </li>
                <ol>
                    <li>Numa panela, derreter a manteiga em fogo médio. Adicionar a farinha e mexer constantemente até ficar ligeiramente dourada e perfumada.</li>
                    <li>Acrescente o leite e mexer constantementeaté engrossar.</li>
                    <li>Quando começar a ferver, adicionar o açúcar e mexer. Cozinhar até obter uma consistência cremosa.</li>
                    <li>Retirar do lume e bater com a batedeia cerca de 2 minutos. </li>
                    <li>Untar uma forma ou travessa com manteiga ou forrar com papel vegetal. Verter a mistura na forma.</li>
                    <li>Cobrir e levar ao frigorífico o tempo de preparar a cobertura de chocolate.</li>
                    <li>Numa panela aquecer as natas até começar a ferver ligeiramente.</li>
                    <li>Retirar do lume e deitar o chocolate na panela.</li>
                    <li>Mexer até o chocolate derreter completamente.</li>
                    <li>Deixar arrefecer um pouco (cerca de 5 a 10min).</li>
                    <li>Por esta altura o creme já deve ter minimamente solidificado. Retirar do frigorífico e deitar a cobertura de chocolate por cima. Espalhar homogeneamente. </li>
                    <li>Cobrir e levar ao frigorífico cerca de 1h.</li>
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
                        <Link href="/pictures/Yalanci1.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\Yalanci1.png" alt="Yalanci" />
                        </Link>
                        <h2>Yalancı Tavuk Göğsü</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/videos/Yalanci1.gif" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\videos\Yalanci1.gif" alt="Yalanci" />
                        </Link>
                        <h2>Yalancı Tavuk Göğsü</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};