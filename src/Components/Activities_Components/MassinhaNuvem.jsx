import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function MassinhaNuvem() {
    return (
        <div className="margin-top-32">
            <h1>Massinha Nuvem</h1>
            <ul>
                <li>
                    <h2>Material necessário</h2>
                </li>
                <ul>
                    <li>3x chávena de amido de milho</li>
                    <li>1x chávenas de amaciador para cabelo</li>
                    <li>1 alguidar ou qualquer outro recipiente</li>
                    <li>Colher de pau para misturar</li>
                    <li>Avental ou roupa velha</li>
                    <li>Corante (opcional)</li>
                </ul>
            </ul>
            <ul>
                <li>
                    <h2>Como fazer</h2>
                </li>
                <ol>
                    <li>Colocar no alguidar uma chávena de amaciador, o corante (se necessário) e uma chávena de amido de milho. Misturar tudo muito bem </li>
                    <li>Colocar mais uma chávena de amida de milho e misturar muito bem.</li>
                    <li>Repetir a operação até obter uma consistência agradavél onde já nada cola aos dedos, como nos vídeos.
                        <br /> Nota: é possivel que seja preciso mais uma ou 2 chávenas de amido de milho para conseguir obter uma boa consistência.
                    </li>
                    <li>Nesta fase já se poderá retirar a massinha de dentro do recipiente.</li>
                    <li>Bom divertimento!!</li>
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
                        <Link href="./videos/cloud_dough1.mp4" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\videos\Video1_thumbnail.png" alt="massinha de nuvem" />
                        </Link>
                        <h2>Video 1</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="./videos/cloud_dough2.mp4" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\videos\Video2_thumbnail.png" alt="massinha de nuvem" />
                        </Link>
                        <h2>Video 2</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="./pictures/minnie.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\minnie.png" alt="minnie" />
                        </Link>
                        <h2>Minnie?</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};