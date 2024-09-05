import React from "react";
import { Card, CardContent, Link } from "@mui/material";


export default function Macarrons() {
    return (
        <div className="margin-top-32">
            <h1>Receita de macarrons</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                    <h3>&#45;&#62; para aproximadamente 15 macarrons (30 metades)</h3>
                </li>
                <ul>
                    <li>2 claras</li>
                    <li>35g de açúcar refinado</li>
                    <li>30g de amêndoa sem pele (ou amêndoa moída)</li>
                    <li>30g de açúcar de confeiteiro</li>
                    <li>Corantes (opcional)</li>
                    <br />
                    <p className="nota"><strong>Nota: </strong> é importante as claras estarem à temperatura ambiente quando as formos usar. Se estiverem no frigorifico, retirá-las umas 2h antes de usar.
                    </p>
                </ul>
            </ul>
            <ul>
                <li>
                    <h2>Preparação</h2>
                </li>
                <ol>
                    <li>Começar por juntar o açúcar de confeiteiro e as amêndoas num pulverizador. Misturar tudo muito bem até obter uma especie de pó bem homogéneo</li>
                    <li>Peneirar e reservar essa mistura</li>
                    <li>Bater as claras a uma velocidade baixa até começar a fazer espuma. Adicionar um terço do açùcar refinado e continuar a bater na velocidade média-baixa.</li>
                    <li>Quando o açúcar já estiver completamente dissolvido, acrescsentar mais um terço e continuar a bater em velocidade média </li>
                    <li>Quando as claras já estiverem batidas, mas ainda "líquidas", adicionar o restante açúcar</li>
                    <li>Continuar a bater as claras e quando já estiverem firmes adicionar o corante, se se desejar algum, e continuar a bater até obter o ponto de bico de pássaro.</li>
                    <br />
                    <p className="nota"><strong>Nota: </strong>se se pretender usar 2 ou mais corantes, então bater até as claras ficarem em ponto de bico de pássaro, depois dividi-las e usar o&#40;s&#41; corante&#40;s&#41; no passo seguinte &#40;7&#41;.</p>
                    <li>Quando o merengue já estiver pronto, adicionar metade da mistura de amêndoa com o açúcar de confeiteiro e acrescentar o&#40;s&#41; corante&#40;s&#41; se não foi feito no passo anterior</li>
                    <li>Misturar suavemente de baixo para cima para não partir as claras.</li>
                    <li>Acrescentar o resto da mistura de amêndoas e o açúcar de confeiteiro e voltar a misturar suavemente até obter uma massa homogénea.</li>
                    <li>Colocar o merengue num saco de pasteleiro com o bico pretendido.</li>
                    <li>Forrar um tabuleiro com papel vegetal ou un tapete de silicone.</li>
                    <li>Num ângulo de 90º em relação ao tabuleiro, formar círculos com o tamanho desejado para os macarrons</li>
                    <li>Quando acabar bater ligeiramente com o tabuleiro 2 ou 3 vezes para retirar possiveis bolhas de ar dos macarrons.</li>
                    <li>Deixar repousar cerca de 1h num local com pouca humidade (evitar a cozinha, principalmente se se quiser lavar a loiça) até formar uma capa seca.</li>
                    <li>Ao fim dessa hora tocar delicadamente em alguns macarrons (geralmente escolho os menos bonitos para estes testes) e se já não colar ao dedo estão prontos para enfornar.</li>
                    <li>Pré-aquecer o forno a 130ºC.</li>
                    <li>Quando já estiver quente, coloque o tabuleiro no forno durante cerca de 19/20 min (forno com a ventoinha ligada).</li>
                    <li>Ao fim desse tempo retirar o tabuleiro do forno. Molhar a bancada e colocar o tapete de silicone (ou o papel manteiga) com os macarrons em cima da bancada molhada.</li>
                    <li>Esperar cerca de 1h (ou até estarem completamente frios) para retirar os macarrons do tapete ou do papel.</li>

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
                        <Link href="./pictures/MacaronsChocolate1.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\MacaronsChocolate1.png" alt="Macarons Chocolate" />
                        </Link>
                        <h2>Macarons Chocolate</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="./pictures/MacaronsChocolate2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\MacaronsChocolate2.png" alt="Macarons Chocolate" />
                        </Link>
                        <h2>Macarons Chocolate</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};