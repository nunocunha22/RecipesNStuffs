import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function Bolachas() {
    return (

        <div className="margin-top-32">
            <h1>Receita de Bolachas</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                    <h3>&#45;&#62; para 60 a 70 bolachas</h3>
                </li>
                <ul>
                    <li>125gr de manteiga (a temperatura ambiente)</li>
                    <li>125gr de açúcar</li>
                    <li>1 ovo</li>
                    <li>300gr de farinha</li>
                    <li>1 colher de sopa de baunilha</li>
                </ul>
            </ul>
            <ul>
                <li>
                    <h2>Preparação</h2>
                </li>
                <ol>
                    <li>Num recipiente juntar a manteiga e o açúcar. Misturar até obter uma pasta homogénea.</li>
                    <li>Acrescentar o ovo e a baunilha. Misturar bem até incorporar tudo muito bem.</li>
                    <li>Juntar a farinha e mexer até formar uma massa.</li>
                    <li>Espalhar a massa numa bancada enfarinhada ou entre 2 folhas de papel vegetal. A massa pode ter a espessura que se quiser. As bolachas da foto têm 5mm de espessura.</li>
                    <li>Usar cortadores de bolachas da forma que se queira. Colocar num tabuleiro forrado com papel vegetal. Não precisa espaçar as bolachas, uma vez que elas não vão alterar de tamanho no forno</li>
                    <li>Repetir o processo até não ter mais massa</li>
                    <li>Pré-aquecer o forno a 180ºC</li>
                    <li>Colocar o(s) tabuleiro(s) no forno por uns 17 a 20min.</li>
                    <li>Retirar do forno...e esperar que arrefeçam para não queimar os dedos e a língua &#128514;</li>
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
                        <Link href="/pictures/BolachasCoração.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\BolachasCoração.png" alt="Bolachas" />
                        </Link>
                        <h2>Bolachas</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )

};