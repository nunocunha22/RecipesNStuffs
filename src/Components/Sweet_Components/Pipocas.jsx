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
                        <h3>Para pipocas sem nada</h3></li>
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
                            <li>15 a 20g de manteiga</li>
                            <li>aproximadamente 15g de água</li>
                            <li>10 a 15g de açúcar refinado</li>
                            <li>Corante (em gel ou liquido) da cor pretendida</li>
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
                        <h3>Pipocas simples:</h3>
                    </li>
                    <ol>
                        <li>Colocar numa panela as pipocas e a matéria gorda. Ligar em fogo medio-baixo (no meu caso é o nivel 5).</li>
                        <li>No inicio mexer com uma colher de pau e tapar a panela.</li>
                        <li>Ir abanando a panela (não deve ser retirada de cima do lume) para não queimar/colar.</li>
                        <li>Ao fim de 3 min aproximadamente, as primeiras pipocas vão começar a estourar.</li>
                        <li>Baixar o fogão um nivel (no meu caso para 4).</li>
                        <li>Ir abanando a panela até as pipocas já não estourarem mais.</li>
                        <li>Retirar a panela e deitar as pipocas numa tigela.</li>
                        Nota: Ter em conta que há milho que ainda pode estourar. Cuidado para não se assustarem e deixarem cair tudo ao chão! Sim, falo com conhecimento de causa... &#128514;
                    </ol>
                    <li>
                        <h3>Pipocas coloridas:</h3>
                    </li>
                    <ol>
                        <li>Seguir os passos para fazer pipocas simples e reservar as pipocas para usar depois.</li>
                        <li>Colocar numa panela: a agua + a manteiga + o açúcar + o corante (a gosto).</li>
                        <li>Aquecer em lume baixo (no meu caso nivel 4).</li>
                        <li>Ir mexendo até o açúcar ficar dissolvido e o corante ficar bem misturado.</li>
                        <li>Quando começar a fervilhar, continuar a mexer durante 1min (aproximadamente) até começar a ficar um pouco mais espesso. </li>
                        <li>Retirar do lume.</li>
                        <li>Se quiser adicionar um aroma é nesta fase que tem de ser feito. Eu pus 4 gotas de aroma de framboesa, mas pode variar consoante os gostos e/ou o aroma utilizado.</li>
                        <li>Verter as pipocas na panela e misturar tudo muito bem até ficarem bem envolvidas na mistura.</li>
                        <li>Voltar a colocar as pipocas na tigela.</li>
                        <li>Já está pronto!</li>
                        Nota: pode eventulamente colocar as pipocas uns 10min no frigorifico para a mistura "secar" bem em cima da pipocas.

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
                        <Link href="./pictures/pipocasRosaEscuro.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\pipocasRosaEscuro.png" alt="Pipocas rosa escuro" />
                        </Link>
                        <h2>Pipocas rosa escuro</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )

};