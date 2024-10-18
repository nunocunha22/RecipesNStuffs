import React from "react";
import { Card, CardContent, Link } from "@mui/material";

export default function BiscoitosAvelã() {
    return (
        <div className="margin-top-32">
            <h1>Receita de biscoitos de avelã recheados</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                </li>
                <li>140g de avelã sem pele</li>
                <li>140g de farinha</li>
                <li>100g de manteiga sem sal (a temperatura ambiente)</li>
                <li>100g de açúcar</li>
                <li>uma pita de sal</li>
                <li>200g/250g de Nutella ou outro creme que se prefira para o recheio</li>
                <li>5g de agar-agar ou 3 folhas de gelatina (opcional: é apenas para poder "endurecer" o Nutella ou o recheio)</li>
            </ul>
            <ul>
                <li>
                    <h2>Preparação</h2>
                </li>
                <ol>
                    <h3>Massa:</h3>
                    <li>Se as avelãs não forem avelãs tostadas, colocá-las no forno por 10 a 15 min a 160ºC (ou airfryer a 150ºC por 6 a 8min). Quando estiverem prontas deixar arrefecer um pouco (15 a 20min)</li>
                    <li>Colocar a farinha e as avelãs num triturador ou algo semelhante e triturar tudo muito bem</li>
                    <li>Despejar a mistura de farinha e avelãs num recipiente e adicionar a manteiga cortada em cubos, o açúcar e o sal</li>
                    <li>Misturar tudo muito bem, seja com uma espátula ou com as mãos, até obter uma massa homógenea </li>
                    <li>Dividir a massa em 2 partes iguais e fazer 2 bolas (sem rachaduras). Embrulhar em papel aderente ou colocar num recipiente hermético e colocar no congelador por 30min</li>
                    <li>Retirar uma das partes do congelador e cortar pedaços de 5 ou 6g aproximadamente. (Cortar pedaços de 9 ou 10g para fazer bolachas maiores). Usar as mãos para fazer pedaços em forma de bola. </li>
                    <li>Colocar as bolas dentros de formas de silicone (não é preciso barrar a forma). Se se usar formas metálicas, acredito ser preciso barrar! </li>
                    <p className="nota"><strong>Nota: </strong> usei formas de silicone de 3.5cm de diametro de base e 2cm de altura.</p>
                    <li>Usar os dedos ou um objeto arredondado para moldar a bolacha (ver video "Como moldar" mais abaixo)</li>
                    <li>Se tiver mais do que um molde pode retirar a outra parte do congelador e repetir o mesmo metodo. Se não tiver, pré-aqueca o forno a 160ºC</li>
                    <li>Com o que sobra das partes da massa pode fazer uns desenhos usando moldes ou a própria imaginação para decorar as bolachas</li>
                    <li>Quando o forno estiver quente, colocar a forma (e as "decorações") no forno (com a ventoinha ligada) por aproximadamente 15min</li>
                    <li>Deixar arrecer um pouco as bolachas antes de as retirar da forma</li>
                </ol>
                <ol>
                    <h3>Recheio:</h3>
                    <li>Se usar gelatina, hidratar a gelatina em água fria</li>
                    <li>Aquecer o Nutella em fogo baixo /médio-baixo. Quando começar a fervilhar, acrescentar a gelatina escorrida ou o agar-agar</li>
                    <li>Ir mexendo até ficar tudo bem dissolvido e misturado</li>
                    <li>Deixar fervilhar durante uns 2min e retirar do lume.</li>
                    <li>Quando estiver morno usar uma colher ou um saco de pasteleiro e encher as bolachas</li>
                    <li>Colocar no frigorifico 1 a 2h até o creme ficar de uma consistência mais rija</li>
                    <li>Retirar do frigorifico e guardar até 7 dias dentro de um recipiente fechado e a temperatura ambiente</li>
                    <p className="nota"><strong>Nota: </strong> o tempo de conservação irá também depender do tipo recheio. Ter isso em conta!</p>
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
                        <Link href="./pictures/biscoitoAvela2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\biscoitoAvela2.png" alt="Biscoitos avelã" />
                        </Link>
                        <h2>Biscoitos de avelã</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="./pictures/biscoitoAvela3.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\biscoitoAvela3.png" alt="Biscoitos avelã" />
                        </Link>
                        <h2>Biscoitos de avelã</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="./videos/biscoitoAvela4.gif" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\videos\biscoitoAvela4.gif" alt="Biscoitos avelã" />
                        </Link>
                        <h2>Como moldar</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};