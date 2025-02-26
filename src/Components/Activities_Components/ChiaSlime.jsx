import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function ChiaSlime() {
    return (
        <div className="margin-top-32">
            <h1>Slime com chia</h1>
            <ul>
                <li>
                    <h2>Material necessário</h2>
                </li>
                <ul>
                    <li>&#189; copo de sementes de chia</li>
                    <li>1 copo de água</li>
                    <li>2 copos de amido de milho (Maizena)</li>
                    <li>1 alguidar ou tigela</li>
                    <li>Corante (opcional)</li>
                </ul>
            </ul>
            <ul>
                <li>
                    <h2>Como fazer</h2>
                </li>
                <ol>
                    <li>Verter as sementes de chia e a água num recipiente. Mexer ligeiramente.</li>
                    <li>Esperar uns 8 a 10 minutos para que as sementes absorvam bem a água.</li>
                    <li>Acrescentar os copos de amido de milho e mexer tudo muito bem até ficar uma mistura homogénea.</li>
                    <li>Pode também acrescentar corante alimentar para dar a cor desejada ao slime.</li>
                    <li>Bom divertimento!!</li>
                    <p className="nota"><strong>Nota: </strong> Pode guardar o slime por vários dias. Sempre que ficar seco pode, aos poucos, acrescentar um pouco de água para reidratá-lo. Geralmente &#188; da medida do copo utilizado é suficiente.
                    </p>
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
                        <Link href="../pictures/ChiaSlime1.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="..\pictures\ChiaSlime1.png" alt="Slime" />
                        </Link>
                        <h2>Preparação 1</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="../pictures/ChiaSlime2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="..\pictures\ChiaSlime2.png" alt="Slime" />
                        </Link>
                        <h2>Preparação 2</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="../pictures/ChiaSlime3.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="..\pictures\ChiaSlime3.png" alt="Slime" />
                        </Link>
                        <h2>Preparação 3</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="../pictures/ChiaSlime4.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="..\pictures\ChiaSlime4.png" alt="Slime" />
                        </Link>
                        <h2>Preparação 4</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="../pictures/ChiaSlime5.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="..\pictures\ChiaSlime5.png" alt="Slime" />
                        </Link>
                        <h2>Preparação 5</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="../pictures/ChiaSlime6.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="..\pictures\ChiaSlime6.png" alt="Slime" />
                        </Link>
                        <h2>Preparação 6</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="../pictures/ChiaSlime7.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="..\pictures\ChiaSlime7.png" alt="Slime" />
                        </Link>
                        <h2>Preparação 7</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="../videos/ChiaSlime1.gif" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="..\videos\ChiaSlime1.gif" alt="Slime video" />
                        </Link>
                        <h2>Video 1</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="../videos/ChiaSlime2.gif" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="..\videos\ChiaSlime2.gif" alt="Slime video" />
                        </Link>
                        <h2>Video 2</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="../videos/ChiaSlime3.gif" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="..\videos\ChiaSlime3.gif" alt="Slime video" />
                        </Link>
                        <h2>Video 3</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};