import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function Waffles() {
    return (
        <div className="margin-top-32">
            <h1>Receita de cookies</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                    <h3>&#45;&#62; para 7 waffles "grandes"</h3>
                </li>
                <ul>
                    <li>2 ovos M</li>
                    <li>240ml de leite</li>
                    <li>240gr de farinha</li>
                    <li>150gr de manteiga sem sal derretida</li>
                    <li>5ml de aroma de baunilha</li>
                    <li>6g de sal</li>
                    <li>9gr de fermento em pó</li>
                    <li>40gr de açúcar (opcional: eu não costumo pôr)</li>
                </ul>
            </ul>
            <ul>
                <li>
                    <h2>Preparação</h2>
                </li>
                <ol>
                    <li>Misturar todos os ingredientes com uma varinha de arames ou numa batedeira ou até mesmo no liquidificador</li>
                    <li>Pode usar a massa logo de seguida</li>
                    <li>Se não usar a massa toda, o recipiente deve ser coberto e deve ser guardado no frigorifico por uns 3 ou 4 dias</li>
                    <p className="nota"><strong>Nota: </strong>A massa vai ficar mais espessa no frigorifico. Não acrescentar mais leite, apenas mexer/ misturar bem e usar assim espessa
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
                        <Link href="/pictures/wafflz3.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\wafflz3.png" alt="waffles" />
                        </Link>
                        <h2>Waffles</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/videos/wafflz2.gif" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\videos\wafflz2.gif" alt="preparação waffles" />
                        </Link>
                        <h2>Waffles mágicas</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};