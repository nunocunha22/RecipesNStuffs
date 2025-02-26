import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function BolachasSemOvo() {
    return (

        <div className="margin-top-32">
            <h1>Receita de Bolachas sem ovo</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                    <h3>&#45;&#62; para 90 a 100 bolachas</h3>
                </li>
                <ul>
                    <li>333gr de farinha</li>
                    <li>167gr de açúcar</li>
                    <li>80gr de manteiga (amolecida ou temperatura ambiente)</li>
                    <li>67ml de leite</li>
                </ul>
            </ul>
            <ul>
                <li>
                    <h2>Preparação</h2>
                </li>
                <ol>
                    <li>Num recipiente juntar e misturar a manteiga e o açúcar, até obter uma pasta homogénea.</li>
                    <li>Adicionar a farinha e misturar tudo muito bem.</li>
                    <li>Acrescentar aos poucos o leite (em 2 ou 3 vezs) e ir mexendo de cada vez que se acresenta até incorporar perfeitamente à mistura.</li>
                    <li>Deitar a massa num superficie enfarinhada ou entre 2 folhas de papel vegetal.</li>
                    <li>Espalhar a massa até obter uma altura de aproximadamente 5mm (Pode ser mais ou menos, depende das preferências).</li>
                    <li>Usar o cortador de bolachas da forma que se queira e colocar num tabuleiro forrado com papel vegetal.</li>
                    <li>Pré-aquecer o forno a 190ºC.</li>
                    <li>Colocar o(s) tabuleiro(s) no forno por uns 8 a 10 minutos.</li>
                    <li>E está pronto!</li>
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
                        <Link href="/pictures/BolachasEstrelas2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\BolachasEstrelas2.png" alt="Bolachas" />
                        </Link>
                        <h2>Bolachas estrela</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/BolachasEstrelas.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\BolachasEstrelas.png" alt="Bolachas" />
                        </Link>
                        <h2>Bolachas estrela</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/BolachasRecheadas2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\BolachasRecheadas2.png" alt="Bolachas" />
                        </Link>
                        <h2>Bolachas recheadas</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/BolachasRecheadas.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\BolachasRecheadas.png" alt="Bolachas" />
                        </Link>
                        <h2>Bolachas recheadas</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )

};