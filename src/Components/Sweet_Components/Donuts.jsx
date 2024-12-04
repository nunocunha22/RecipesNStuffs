import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function Donuts() {
    return (
        <div className="margin-top-32">
            <h1>Receita de donuts</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                    <h3>&#45;&#62; para aproximadamente 15 donuts (8cm de diâmetro) </h3>
                    <h3>&#45;&#62; para aproximadamente 25 donuts médios (5cm de diâmetro)</h3>
                </li>
                <ul>
                    <li><h4><u>Para a massa:</u></h4>
                        <li>250ml de leite</li>
                        <li>450g de farinha</li>
                        <li>12g de fermento padeiro (ou fermento específico para massas doces) </li>
                        <li>70 a 80g de açúcar</li>
                        <li>50g manteiga derretida</li>
                        <li>1 ovo</li>
                        <li>3g de sal (&#189; colher chá)</li>
                    </li>
                    <li><h4><u>Para a cobertura:</u></h4>
                        <li>150g de açúcar em pó</li>
                        <li>1 clara de ovo</li>
                        <li>1 colher de aroma de baunilha (opcional)</li>
                    </li>
                </ul>
            </ul>
            <ul>
                <li>
                    <h2>Preparação</h2>
                    <div className="prepTime">&#x1F552; <p>preparação + forno: </p>30min</div>
                    <div className="prepTime">&#x1F552; <p>descanso:</p>1h40 (1h + 30min + 10min) </div>
                </li>
                <ol>
                    <li>Colocar o leite numa panela e aquecer até ficar morno.</li>
                    <li>Retire do lume e coloque numa taça grande onde irá bater a massa. (Eu uso a taça da batedeira planetária).</li>
                    <li>Adicionar o fermento e cerca de 15g do açúcar (1 colher de sopa). Misturar ate o fermento ficar completamente desfeito e incorporado no leite.</li>
                    <li>Cobrir e deixar repousar cerca de 10min.</li>
                    <li>Passados os 10min, adicionar todos os ingredientes restantes.</li>
                    <li>Para o passo seguinte eu uso uma batedeira com o acessõrio de amassar, mas pode ser feito com as mãos se não tiver.</li>
                    <li>Comece por amassar em velocidade baixa até os ingredientes estarem totalmente combinados e depois aumentar um pouco a velocidade e bater por mais 5 a 6min.</li>
                    <li>Colocar a massa noutro recipiente préviamente untado com um pouco de óleo ou manteiga.</li>
                    <li>Cubra com película aderente e deixe repousar 45min a 1h dentro do forno desligado.</li>
                    <li>Passado esse tempo, colocar a massa numa superficie com farinha e amassá-la até ficar com cerca de 0,5cm (5mm)de espessura.</li>
                    <li>Usar um cortador de 8cm de diâmetro, ou de outro tamanho que preferir, e cortar quantos círculos a massa der. Para o buraco do meio usar um cortador de metade do tamanho do cortador usado para formar o donut. Por exemplo, usando um cortador de 8cm para o donut, usa-se um de 4cm para o buraco do meio. Usando um cortador de 5cm, usa-se um cortador de 2.5cm para o buraco do meio. </li>
                    <li>Colocar os donuts num tabuleiro forrado com papel manteiga e esperar cerca de 30min para que cresçam ligeiramente</li>
                    <li>Passado esse tempo, pré-aquecer o forno a 180ºC. Uma vez que o forno atinja os 180ºC, colocar o(s) tabuleiro(s) com os donuts e deixar por cerca de 7 a 8min, com a ventoinha ligada</li>
                    <p className="nota"><strong>Nota: </strong> Também dá para usar a airfryer: pré-aquecer a airfryer a 180ºC durante 2min. Colocar os donuts cerca de 3 a 4min.</p>
                    <li>Retirar quando começarem a ficar dourados.</li>
                    <li>Para a cobertura: misturar o açúcar em pó, a clara e o aroma de baunilha até obter um creme homogéneo.</li>
                    <li>Quando os donuts já estiverem frios, mergulhar levemente, um a um, a parte superior dentro do creme. Deixar escorrer um pouco o creme dos donuts e pousá-los numa grelha ou numa travessa até o creme endurecer. </li>
                    <p className="nota"><strong>Nota: </strong> Não guardar os donuts no frigorifico (o creme perde a sua consistência) e consumir até 3 dias</p>
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
                        <Link href="./pictures/Donuts1.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\Donuts1.png" alt="Donuts" />
                        </Link>
                        <h2>Donuts antes do forno</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="./pictures/Donuts2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\Donuts2.png" alt="Donuts" />
                        </Link>
                        <h2>Donuts prontos</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};