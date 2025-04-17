import { Box, Card, CardContent, Link, Tab, Tabs } from "@mui/material";
import React from "react";

export default function Empadas() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (

        <div className="margin-top-32">
            <h1>Receita de empadas de frango</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                    <h3>&#45;&#62; para 15 a 18 empadas</h3>
                </li>
                <Box>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="secondary tabs example"
                    >
                        <Tab value="1" label="Com molho de tomate" />
                        <Tab value="2" label="Com pesto e azeitonas" />
                    </Tabs>
                </Box>
                <ul>
                    <li><h4><u>Para a massa:</u></h4>
                        <li>500gr de farinha</li>
                        <li>200gr de manteiga sem sal (a temperatura ambiente)</li>
                        <li>75ml de agua</li>
                        <li>2 ovos</li>
                        <li>sal (a gosto)</li>
                        <li>1 gema (para pincelar nas empadas)</li>
                    </li>

                    <li><h4><u>Para o recheio:</u></h4>
                        <Box hidden={value !== "1"}>
                            <li>1 pacote de molho de tomate (210gr)</li>
                            <li>50ml de vinho branco</li>
                            <li>2 peitos de frango</li>
                            <li>Sal e pimenta a gosto</li>
                            <p className="nota"><strong>Nota: </strong>Também pode ser usada uma canja de galinha ou um canja de legumes, em vez de usar o sal</p>
                            <li>30ml de vinho branco</li>

                        </Box>
                        <Box hidden={value !== "2"}>
                            <li>1 frasco de molho pesto rosso (190gr)</li>
                            <li>50ml de vinho branco</li>
                            <li>2 peitos de frango</li>
                            <li>1 frasco de azeitonas sem caroço</li>
                            <li>Sal e pimenta a gosto</li>
                            <p className="nota"><strong>Nota: </strong>Também pode ser usada uma canja de galinha ou um canja de legumes, em vez de usar o sal</p>
                            <li>30ml de vinho branco</li>

                        </Box>
                    </li>
                </ul>
            </ul>
            <ul>
                <li>
                    <h2>Preparação</h2>
                </li>
                <Box hidden={value !== "1"}>
                    <ol>
                        <li>Cozer o frango em água, sal e especiarias das sua preferência.</li>
                        <li>Uma vez o frango arrefecido, esfiá-lo e reservá-lo.</li>
                        <li>Num recipiente colocar todos os 5 ingredientes para a massa. Não usar a gema que será para pincelar as empadas antes de ir ao forno!</li>
                        <li>Misturar tudo muito bem, sem sovar, até obter uma massa homogénea.</li>
                        <li>Deixar descansar a massa por 1h à temperatura ambiente, sem cobri-la.</li>
                        <li>Enquanto espera, é tempo de preparar o recheio</li>
                        <li>Num tacho, juntar o frango esfiado, o vinho branco, o molho tomate, o sal (ou a canja) e a pimenta.</li>
                        <li>Misturar tudo e colocar a fogo medio.</li>
                        <li>Ir mexendo de vez em quando até a mistura ficar espessa.</li>
                        <li>Desligar o lume e reservar o preparado.</li>
                        <li>Dividir a massa em 2 partes: uma parte terá &#8532; e servirá para moldar nas formas. A outra parte terá &#8531; e servirã para as "tampinhas" das empadas. </li>
                        <li>Numa bancada com farinha, esticar os &#8532; da massa até ficar ligeiramente fina e cortar um circulo de 7 a 8cm (ou mais pequeno, tudo vai depender do tamanho das formas usadas. Eu usei as formas de cupcakes).</li>
                        ou
                        <li>Também pode cortar a massa em bolinhas e depois com os dedos moldar a massa dentro da forma (Eu tentei, e confesso que não tenho a melhor habilidade para isso.).</li>
                        <li>Rechear as empadas quase até cima. Convém deixar algum espaço para conseguir fechá-las e fazer aquelas dobras para que as empadas fiquem bonitas.</li>
                        <li>Para fechar as empadas, basta estender finamente a massa que sobrou e cortar circulos mais pequenos, do tamanho da parte superior da forma.</li>
                        <li>Selar bem a parte de cima com a parte de baixo da massa.</li>
                        <li>Pré-aquecer o forno a 200ºC</li>
                        <li>Pincelar as empadas com a gema batida.</li>
                        <li>Colocar no forno por cerca de 35min.</li>
                        <li>Retirar do forno...e esperar que arrefeçam antes de comer...</li>
                    </ol>
                </Box>
                <Box hidden={value !== "2"}>
                    <ol>
                        <li>Cozer o frango em água, sal e especiarias das sua preferência.</li>
                        <li>Uma vez o frango arrefecido, esfiá-lo e reservá-lo.</li>
                        <li>Num recipiente colocar todos os 5 ingredientes para a massa. Não usar a gema que será para pincelar as empadas antes de ir ao forno!</li>
                        <li>Misturar tudo muito bem, sem sovar, até obter uma massa homogénea.</li>
                        <li>Deixar descansar a massa por 1h à temperatura ambiente, sem cobri-la.</li>
                        <li>Enquanto espera, é tempo de preparar o recheio.</li>
                        <li>Num tacho, juntar o frango esfiado, o vinho branco, o molho pesto, as azeitonas cortadas finamente (ou trituradas),  o sal (ou a canja) e a pimenta.</li>
                        <li>Misturar tudo e colocar a fogo medio.</li>
                        <li>Ir mexendo de vez em quando até a mistura ficar espessa.</li>
                        <li>Desligar o lume e reservar o preparado.</li>
                        <li>Dividir a massa em 2 partes: uma parte terá &#8532; e servirá para moldar nas formas. A outra parte terá &#8531; e servirã para as "tampinhas" das empadas. </li>
                        <li>Numa bancada com farinha, esticar os &#8532; da massa até ficar ligeiramente fina e cortar um circulo de 7 a 8cm (ou mais pequeno, tudo vai depender do tamanho das formas usadas. Eu usei as formas de cupcakes).</li>
                        ou
                        <li>Também pode cortar a massa em bolinhas e depois com os dedos moldar a massa dentro da forma (Eu tentei, e confesso que não tenho a melhor habilidade para isso.).</li>
                        <li>Rechear as empadas quase até cima. Convém deixar algum espaço para conseguir fechá-las e fazer aquelas dobras para que as empadas fiquem bonitas.</li>
                        <li>Para fechar as empadas, basta estender finamente a massa que sobrou e cortar circulos mais pequenos, do tamanho da parte superior da forma.</li>
                        <li>Selar bem a parte de cima com a parte de baixo da massa.</li>
                        <li>Pré-aquecer o forno a 200ºC</li>
                        <li>Pincelar as empadas com a gema batida.</li>
                        <li>Colocar no forno por cerca de 35min.</li>
                        <li>Retirar do forno...e esperar que arrefeçam antes de comer...</li>
                    </ol>
                </Box>
            </ul>
            <ul>
                <li>
                    <h2>Galeria de imagens</h2>
                </li>
            </ul>
            <div className="display-grid-pic">
                <Card>
                    <CardContent>
                        <Link href="/pictures/Empadas1.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\Empadas1.png" alt="Empadas cruas" />
                        </Link>
                        <h2>Empadas cruas</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/Empadas2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\Empadas2.png" alt="Empadas prontas" />
                        </Link>
                        <h2>Empadas prontas</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/Empadas3.jpg" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\Empadas3.jpg" alt="Empadas" />
                        </Link>
                        <h2>Empadas</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/Empadas4.jpg" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\Empadas4.jpg" alt="Empadas" />
                        </Link>
                        <h2>Empadas</h2>
                    </CardContent>
                </Card>
            </div>
        </div >
    )

};