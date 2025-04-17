import React from "react";
import { Card, CardContent, Link } from "@mui/material";


export default function Macarrons() {
    return (
        <div className="margin-top-32">
            <h1>Receita de macarrons</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                    <h3>&#45;&#62; para aproximadamente 26 a 30 macarrons (52 a 60 metades)</h3>
                </li>
                <ul>
                    <li>2 claras M</li>
                    <li>80g de açúcar refinado</li>
                    <li>75g de amêndoa sem pele (ou amêndoa moída)</li>
                    <li>75g de açúcar de confeiteiro</li>
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
                    <li>Começar por juntar o açúcar de confeiteiro e as amêndoas num pulverizador. Triturar tudo muito bem até obter uma especie de pó bem homogéneo</li>
                    <li>Peneirar e reservar essa mistura</li>
                    <li>Bater as claras a uma velocidade baixa até começar a fazer espuma. Adicionar um terço do açùcar refinado e continuar a bater na velocidade média-baixa.</li>
                    <li>Quando o açúcar já estiver completamente dissolvido, acrescsentar mais um terço e continuar a bater em velocidade média </li>
                    <li>Quando as claras já estiverem batidas, mas ainda "líquidas", adicionar o restante açúcar</li>
                    <li>Continuar a bater as claras até obter o ponto de bico de pássaro (ver foto "Ponto bico de pássaro")</li>
                    <li>Quando o merengue já estiver pronto, adicionar metade da mistura de amêndoa com o açúcar de confeiteiro que reservamos no início e acrescentar o&#40;s&#41; corante&#40;s&#41;e misturar suavemente com uma espátula de silicone ou com uma colher de pau. NÃO usar a batedeira!!!</li>
                    <p className="nota"><strong>Nota: </strong>se se pretender usar 2 ou mais corantes, basta dividir o merengue em 2 ou mais partes e acrescentar o corante em cada parte </p>
                    <li>Misturar suavemente de baixo para cima para não partir totalemnte as claras e ficar tudo demasiado liquido.</li>
                    <li>Acrescentar o resto da mistura de amêndoas e o açúcar de confeiteiro e voltar a misturar suavemente até obter uma massa homogénea.</li>
                    <li>A partir daqui é que vem a parte mais traiçoeira e delicada do processo de "macarronage"</li>
                    <li>Se tudo correu bem até aqui, a massa deve estar ainda um pouco espessa para usar. Continuar a mexer a massa até obter uma mistura que caia em fita. Enquanto cair em bloco deve continuar a mexer. Se por outro lado a massa ficar líquida é porque já foi demasiado mexida e não vai conseguir fazer macarrons "perfeitos" </li>
                    <li>Colocar o merengue num saco de pasteleiro com o bico pretendido.</li>
                    <li>Forrar um tabuleiro com papel vegetal ou un tapete de silicone.</li>
                    <li>Num ângulo de 90º em relação ao tabuleiro, formar círculos com o tamanho desejado para os macarrons</li>
                    <p className="nota"><strong>Nota: </strong>Lembro que o macarron "cai" sempre um pouco. Por exemplo se pretender macarrons de 2cm de diametro, terá de formar um circulo de (+/-) 1.6cm de diametro.</p>
                    <li>Quando acabar bater ligeiramente com o tabuleiro 2 ou 3 vezes para retirar possiveis bolhas de ar dos macarrons. É possivel que existam bolhas de ar a formar-se mas que não "arrebetem". Pode usar-se um palito, por exemplo, para furar essa bolhas.</li>
                    <li>Deixar repousar cerca de 1h num local com pouca humidade (evitar a cozinha, principalmente se se quiser lavar a loiça) até formar uma capa que, ao toque, já não agarre ao dedo.</li>
                    <li>Ao fim dessa hora tocar delicadamente em alguns macarrons (geralmente escolho os menos bonitos para estes testes) e se já não colar ao dedo estão prontos para enfornar.</li>
                    <p className="nota"><strong>Nota: </strong>Já me aconteceu, em dias muito húmidos, ter de deixar os macarrons cerca de 2h para que fiquem secos ao toque.</p>
                    <li>Pré-aquecer o forno a 140ºC.</li>
                    <li>Quando já estiver quente, coloque o tabuleiro no forno durante cerca de 17min (forno com a ventoinha ligada).</li>
                    <li>Ao fim desse tempo retirar o tabuleiro do forno. Colocar o tapete de silicone (ou o papel manteiga) com os macarrons em cima da bancada</li>
                    <p className="nota"><strong>Nota: </strong>geralmente, depois de retirados do forno, deixo-os cerca de 5min no tabuleiro para que acabem de cozer por baixo.</p>
                    <li>Esperar cerca de 1h (ou até estarem completamente frios) para retirar os macarrons do tapete ou do papel.</li>
                </ol>
            </ul>
            <p className="nota"><strong>Nota: Para escolher o recheio desejado ir à pagina Recheio ou clicar <a href="/recheios">aqui</a></strong></p>
            <ul>
                <li>
                    <h2>Galeria de imagens</h2>
                </li>
            </ul>
            <div className="display-grid-pic">
                <Card>
                    <CardContent>
                        <Link href="/pictures/MacaronsChocolate1.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\MacaronsChocolate1.png" alt="Macarons Chocolate" />
                        </Link>
                        <h2>Macarons Chocolate</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/MacaronsChocolate2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\MacaronsChocolate2.png" alt="Macarons Chocolate" />
                        </Link>
                        <h2>Macarons Chocolate</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/macarronsPretos.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\macarronsPretos.png" alt="Macarons Pretos" />
                        </Link>
                        <h2>Macarons de morango pretos</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/MacarronsBaunilha.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\MacarronsBaunilha.png" alt="Macarons baunilha" />
                        </Link>
                        <h2>Macarons baunilha</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/MacarronsBicolores.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\MacarronsBicolores.png" alt="Macarons bi-colores" />
                        </Link>
                        <h2>Macarons bi-colores</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/bicoDePassaro.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\bicoDePassaro.png" alt="Macarons Chocolate" />
                        </Link>
                        <h2>Ponto bico de pássaro</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};