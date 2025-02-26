import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function Crepes() {
    return (
        <div className="margin-top-32">
            <h1>Receita de crepes</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                    <h3>&#45;&#62; para aproximadamente 15 crepes</h3>
                </li>
                <ul>
                    <li>500ml de leite</li>
                    <li>5 ovos</li>
                    <li>250gr de farinha</li>
                    <li>80g de manteiga derretida</li>
                    ou
                    <li>2 colheres de sopa de óleo</li>
                    <li>50g de açúcar (opcional ou pode-se reduzir a quantidade)</li>
                    <li>1 colher de sopa de aroma de baunilha</li>
                    <li>1 pitada de sal</li>
                </ul>
            </ul>
            <ul>
                <li>
                    <h2>Preparação</h2>
                    <div className="prepTime">&#x1F552; <p>preparação: </p>10min</div>
                    <div className="prepTime">&#x1F552; <p>descanso (opcional):</p> 1h </div>
                </li>
                <ol>
                    <li>Num recipiente, misturar a farinha, o sal, os ovos, o aroma de baunilha e a manteiga derretida (ou óleo) até obter uma massa homogénea e sem grumos</li>
                    <li>Adicionar aos poucos o leite e mexer sempre tudo muito bem até ficar tudo homogéneo </li>
                    <li>Opcional: Cobrir o recipiente com papel aderente ou alumínio e deixar repousar 1h</li>
                    <li>Depois é só aquecer uma frigideira anti-aderente, mexer a massa e deitar uma concha de sopa cheia na frigideira quente.</li>
                    <li>Virar o crepe quando começar a ficar "seco" do lado que não está em contacto com a frigideira </li>
                    <li>Colocar num prato e rechear a gosto!</li>
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
                        <Link href="/pictures/Crepes1.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\Crepes1.png" alt="Crepes" />
                        </Link>
                        <h2>Crepes</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/Crepes2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\Crepes2.png" alt="Crepes" />
                        </Link>
                        <h2>Crepes</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};