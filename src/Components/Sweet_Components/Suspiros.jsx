import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function Suspiros() {
    return (
        <div className="margin-top-32">
            <h1>Receita de suspiros</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                    <h3>&#45;&#62; para aproximadamente 35 suspiros</h3>
                </li>
                <ul>
                    <li>2x claras de ovos M &#40;aproximadamente 67/68gr&#41;</li>
                    <li>100gr de açúcar refinado &#40;ou acúcar em pó&#41;</li>
                    <li>sumo de limão &#40;não notei a diferença não usando&#41;</li>
                    <li>Corantes em gel ou em pó &#40;opcional&#41;</li>
                    <li>Aromas &#40;opcional&#41;</li>
                </ul>
            </ul>


            <ul>
                <li>
                    <h2>Preparação</h2>
                </li>
                <ol>
                    <li>Começar a bater as claras a uma velocidade baixa até começar a fazer espuma. Adicionar um terço do açùcar e continuar a bater na velocidade média-baixa.</li>
                    <li>Quando o açúcar já estiver completamente dissolvido, acrescsentar mais um terço e continuar a bater em velocidade média </li>
                    <li>Quando as claras já estiverem batidas, mas ainda "líquidas", adicionar o restante açucar assim como o sumo de limâo.</li>
                    <li>Continuar a bater as claras e quando já estiverem firmes adicionar o aroma, se se desejar algum, e continuar a bater até obter o ponto de bico de pássaro.
                        <br />
                        <p className="nota"><strong>Nota: </strong> se se pretender usar 2 aromas ou mais, então bater até as claras ficarem em ponto de bico de pássaro, depois dividir as claras e usar o&#40;s&#41; aroma&#40;s&#41; no passo seguinte &#40;4&#41;.
                        </p>
                    </li>
                    <li> Quando estiverem no ponto, será neste momento que deveremos acrescentar o&#40;s&#41; corante&#40;s&#41; e mexer devagar usando um salazar ou uma colher de pau até ficar a cor desejada e uniforme</li>
                    <li>Colocar as claras num saco de pasteleiro com o bico desejado</li>
                    <li>Pré-aquecer o forno a 120ºC</li>
                    <li>Colocar um tapete de silicone ou papel vegetal num tabuleiro e, com o saco de pasteleiro, fazer os suspiros do tamanho desejado
                        <br />Nota: deixar aproximadamente 1cm entre suspiros para que não fiquem colados uns aos outros.
                    </li>
                    <li>Colocar no forno o&#40;s&#41; tabuleiro&#40;s&#41; a 120ºC &#40;com ventoinha&#41; por aproximadamente 90 min. Deixar a porta do forno entre-aberto usando uma colher de pau, por exemplo
                        <br />Nota: eu dexei 90 min, mas os ultimos 10 min foi com a porta do forno fechada.
                    </li>
                    <li>Desligar o forno após o tempo terminar e deixar arrefecer os suspiros dentro do forno desligado.</li>
                    <li>Quando já estiverem frios, colocar os suspiros dentro de uma caixa para que não absorvam humidade</li>
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
                        <Link href="./pictures/bicos1.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\bicos1.png" alt="bicos de pasteleiro" />
                        </Link>
                        <h2>Bicos D42 e 1A</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="./pictures/suspiros1.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\suspiros1.png" alt="suspiros" />
                        </Link>
                        <h2>Suspiros D42 e 1A</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="./pictures/bicos2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\bicos2.png" alt="bicos de pasteleiro" />
                        </Link>
                        <h2>Bicos D66 e 2F</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="./pictures/suspiros2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\suspiros2.png" alt="suspiros" />
                        </Link>
                        <h2>Suspiros D66 e 2F</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="./pictures/bicos3.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\bicos3.png" alt="bicos de pasteleiro" />
                        </Link>
                        <h2>Bicos 17 e 18</h2>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <Link href="./pictures/suspiros3.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\suspiros3.png" alt="suspiros" />
                        </Link>
                        <h2>Suspiros 17 e 18</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="./pictures/suspiros_multicolores.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src=".\pictures\suspiros_multicolores.png" alt="bicos de pasteleiro" />
                        </Link>
                        <h2>Multicolores (2F)</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};

