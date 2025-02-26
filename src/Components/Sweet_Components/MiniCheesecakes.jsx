import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function MiniCheesecakes() {
    return (
        <div className="margin-top-32">
            <h1>Receita de mini cheesecakes</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                    <h3>&#45;&#62; para aproximadamente 15 mini cheesecakes</h3>
                </li>
                <ul>
                    <li>200gr de bolachas (da sua preferência)</li>
                    <li>80gr de manteiga derretida</li>
                    <li>300gr de queijo creme natural</li>
                    <li>200gr de açúcar</li>
                    <li>1 pacote de natas</li>
                    <li>10gr de amido de milho (Maizena)</li>
                    <li>2 ovos</li>
                </ul>
            </ul>
            <ul>
                <li>
                    <h2>Preparação</h2>
                    <div className="prepTime">&#x1F552; <p>preparação: </p>30min</div>
                    <div className="prepTime">&#x1F552; <p>forno: </p>20 a 25min</div>
                </li>
                <ol>
                    <li>Triturar as bolachas e deitar num recipiente. Derreter a manteiga e juntar às bolachas trituradas. Misturar muito bem até ficar uma massa homogénea.</li>
                    <li>Colocar o queijo creme (deitar fora o excesso de água da embalagem) e o açúcar num recipiente. Bater a uma velocidade baixa por uns 3 minutos até que o açúcar se dissolva e se incorpore completamente.</li>
                    <li>Acrescentar as natas e voltar a bater muito bem.</li>
                    <li>Acrescentar a farinha e o amido de milho. Bater até obter uma mistura homogénea.</li>
                    <li>Acrescentar os ovos e bater bem até se incorporarem completamente à mistura.</li>
                    <li>Pré-aquecer o forno a 160ºC.</li>
                    <li>Deitar a mistura em formas para muffins/cupcakes. Forrar com papel vegetal ou untar com manteiga e farinha.</li>
                    <li>Deitar um pouco de água num tabuleiro de forno e colocar as formas no tabuleiro. </li>
                    <li>Levar ao forno cerca de 25min.</li>
                    <li>Passado esse tempo, desligar o forno e deixar os cheesecakes cerca de 1h lá dentro.</li>
                    <li>Para a cobertura: ir à pagina <a href="/recheios">Recheios</a> e escolher a cortura que pretende usar.</li>
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
                        <Link href="/pictures/MiniCheesecake1.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\MiniCheesecake1.png" alt="Mini Cheesecake" />
                        </Link>
                        <h2>Morango e limão</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/MiniCheesecake2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\MiniCheesecake2.png" alt="Mini Cheesecake" />
                        </Link>
                        <h2>Caramelo e chocolate</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};