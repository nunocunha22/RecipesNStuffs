import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function Pipocas() {
    return (

        <div className="margin-top-32">
            <h1>Receita de pipocas</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                </li>
                <ul>
                    <li>
                        <h3>Para pipocas "simples"</h3></li>
                    <ul>
                        <li>50g de milho pipoca</li>
                        <li>Matéria gorda:</li>
                        <ul>
                            <li>15 a 20g de manteiga sem sal</li>
                            ou
                            <li>15 a 20g de óleo girassol</li>
                            ou
                            <li>15 a 20g de óleo de coco</li>
                        </ul>
                    </ul>
                </ul>
                <ul>
                    <li>
                        <h3>Para pipocas doces</h3></li>
                    <ul>
                        <li>50g de milho pipoca</li>
                        <li>50gr de açúcar</li>
                        <li>75ml de agua</li>
                        <li>Matéria gorda:</li>
                        <ul>
                            <li>30g a 35g de manteiga sem sal</li>
                            ou
                            <li>30g a 35g de óleo girassol</li>
                            ou
                            <li>30g a 35g de óleo de coco</li>
                        </ul>
                    </ul>
                </ul>
                <ul>
                    <li>
                        <h3>Para pipocas salgadas</h3></li>
                    <ul>
                        <li>50g de milho pipoca</li>
                        <li>sal a gosto (para mim, apenas com a manteiga com sal fica suficientemente salgado)</li>
                        <li>Matéria gorda:</li>
                        <ul>
                            <li>15 a 20g de manteiga sem sal</li>
                            ou
                            <li>15g a 20g de óleo (não esquecer que com óleo terá de se acrescentar sal) </li>
                        </ul>
                    </ul>
                </ul>
                <ul>
                    <li>
                        <h3>Para pipocas coloridas</h3></li>
                    <ul>
                        <li>50g de milho pipoca</li>
                        <li>Matéria gorda:</li>
                        <ul>
                            <li>15 a 20g de manteiga sem sal</li>
                            ou
                            <li>Óleo girassol</li>
                            ou
                            <li>Óleo de coco</li>
                        </ul>
                        <li>Para coloração:</li>
                        <ul>
                            <li>100g de água</li>
                            <li>100g de açúcar refinado</li>
                            <li>Corante (em gel ou liquido ou em pó) da cor pretendida</li>
                            <li>Aroma (opcional)</li>
                        </ul>
                    </ul>
                </ul>
            </ul>
            <ul>
                <li>
                    <h2>Preparação</h2>
                </li>
                <ul>
                    <li>
                        <h3>Pipocas "simples"</h3>
                        <div className="prepTime">&#x1F552; 10 a 15min</div>
                    </li>
                    <ol>
                        <li>Colocar numa panela as pipocas e a matéria gorda. Ligar em fogo medio (no meu caso é o nivel 6 em 10).</li>
                        <li>Ir mexendo de vez em quando com uma colher de pau até as primeiras pipocas rebentarem (demora cerca de 6 a 7 min)</li>
                        <li>Tapar a panela e baixar o fogo um nivel (no meu caso para 5 em 10).</li>
                        <li>Ir abanando a panela de vez em quando até as pipocas já não estourarem mais.</li>
                        <li>Retirar a panela do fogão e deitar as pipocas num recipiente.</li>
                        <p className="nota"><strong>Nota: </strong> Ter em conta que há milho que ainda pode estourar. Cuidado para não se assustarem e deixarem cair tudo ao chão! Sim, falo com conhecimento de causa... &#128514;</p>
                    </ol>
                    <li>
                        <h3>Pipocas doces</h3>
                        <div className="prepTime">&#x1F552; 15 a 20min</div>
                    </li>
                    <ol>
                        <li>Colocar numa panela as pipocas e a matéria gorda, a água e o açúcar.</li>
                        <li>Ligar em fogo medio-baixo (no meu caso é o nivel 5 em 10).</li>
                        <li>Inicialmente ir mexendo até o açúcar ficar derretido. Quando as primeiras pipocas rebentarem (demora cerca de 11 a 12 min)</li>
                        <li>Tapar a panela e baixar o fogo um nivel (no meu caso para 3 em 10).</li>
                        <li>Ir abanando energicamente a panela de vez em quando, para não queimar/colar, até as pipocas já não estourarem mais.</li>
                        <li>Retirar a panela do fogão e deitar as pipocas num recipiente.</li>
                    </ol>
                    <li>
                        <h3>Pipocas salgadas</h3>
                        <div className="prepTime">&#x1F552; 10 a 15min</div>
                    </li>
                    <ol>
                        <li>Colocar numa panela as pipocas e a matéria gorda + a quantidade de sal desejada. Ligar em fogo medio (no meu caso é o nivel 5 em 10).</li>
                        <li>Ir mexendo de vez em quando com uma colher de pau até as primeiras pipocas rebentarem (demora cerca de 6 a 7 min)</li>
                        <li>Tapar a panela e baixar o fogo um nivel (no meu caso para 5 em 10).</li>
                        <li>Ir abanando a panela de vez em quando até as pipocas já não estourarem mais.</li>
                        <li>Retirar a panela do fogão e deitar as pipocas num recipiente.</li>
                    </ol>
                    <li>
                        <h3>Pipocas coloridas:</h3>
                        <div className="prepTime">&#x1F552; 25 a 30min</div>
                    </li>
                    <ol>
                        <li>Seguir os passos para fazer pipocas "simples" e reservar as pipocas para usar depois.</li>
                        <li>Colocar numa panela: a agua + o açúcar.</li>
                        <li>Aquecer em lume baixo (no meu caso nivel 5).</li>
                        <li>Ir mexendo até o açúcar ficar dissolvido.</li>
                        <li>Quando começar a fervilhar, continuar a mexer de minuto a minuto aproximadamente e é nesta fase que se colocam o corante e o aroma desejados. Mexer tudo muito bem para ficar uma cor uniforme.</li>
                        <li>Quando começar a ficar um pouco espesso. Baixar o lume um ou dois niveis, mas NÃO desligar.</li>
                        Nota: para ter a certeza se a mistura já está no ponto, usar um pires (ou um prato de sobremesa) com um pouco de água. Verter uma gota da mistura colirida na água e se ela se mantiver e não se dissolver: está no ponto certo! (ver foto "Teste gota").
                        <li>Verter as pipocas na panela e misturar tudo muito bem até ficarem bem envolvidas na mistura.</li>
                        <li>Desligar o fogo e esperar um pouco até o açúcar cristalizar completamente.</li>
                        <li>Voltar a colocar as pipocas na tigela.</li>
                        <li>Já está pronto!</li>
                    </ol>
                </ul>
            </ul>
            <ul>
                <li>
                    <h2>Galeria de imagens</h2>
                </li>
            </ul>
            <div className="display-grid-pic">
                <Card>
                    <CardContent>
                        <Link href="./pictures/piocasVerdes.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\piocasVerdes.png" alt="Pipocas verdes" />
                        </Link>
                        <h2>Pipocas verdes</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="./pictures/pipocasDoces.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\pipocasDoces.png" alt="Pipocas Doces" />
                        </Link>
                        <h2>Pipocas doces</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="./pictures/testeGota.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\testeGota.png" alt="Ponto teste gota" />
                        </Link>
                        <h2>Teste gota</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )

};