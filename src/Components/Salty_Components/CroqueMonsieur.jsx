import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function CroqueMonsieur() {
    return (

        <div className="margin-top-32">
            <h1>Receita de Croque Monsieur</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                    <h3>&#45;&#62; para 8 croque monsieur</h3>
                </li>
                <ul>
                    <li>16 fatias de pão de forma</li>
                    <li>150g a 200g de fiambre</li>
                    <li>8 a 10 fatias de queijo derretido (ou fatiado)</li>
                    <li>200g de queijo ralado</li>
                    <li>Manteiga</li>
                    <li>Leite</li>
                    <li>sal e pimenta</li>
                </ul>
            </ul>
            <ul>
                <li>
                    <h2>Preparação</h2>
                </li>
                <ol>
                    <li>Colocar numa tigela as 200g de queijo ralado e acrescentar o leite até cobrir a totalidade do queijo. Juntar o sal e pimenta a gosto. Misturar tudo muito bem e reservar</li>
                    <li>Barrar as 16 fatias de pão de forma com manteiga, apenas de um lado, e dispôr 8 dessas fatias num tabuleiro que dê para ir ao forno. Devem estar ligeiramente afastadas umas das outras</li>
                    <li> Colocar uma fatia de queijo derretido e 2 fatias de fiambre por cima de cada parte barrada com manteiga</li>
                    <p className="nota"><strong>Nota: </strong> podem colocar 2 fatias de queijo e uma de fiambre, ou a quantidade que se deseja.
                    </p>
                    <li>Colocar as outras 8 fatias de pão de forma por cima das outras com fiambre e queijo. Colocar a parte barrada com manteiga virada para baixo</li>
                    <li>Pré-aquecer o forno a 180ºC</li>
                    <li>Com um garfo, retirar o queijo ralado da tigela e colocar por cima das fatias. Espalhar bem para cobrir cada fatia de pão na sua totalidade.</li>
                    <li>Com uma colher, dividir o leite pelas 8 fatias para humedecê-las. Em principio deverá ser utilizado todo o leite.</li>
                    <li>Colocar o tabuleiro (a meio do forno) no forno a 180ºC, com ventoinha, por 10/11min. Passado esse tempo colocar na função "grill" por mais 10/15min, sem alterar o posição do tabuleiro. Quando o queijo ralado estiver tostado a gosto, pode desligar o forno e retirar</li>
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
                        <Link href="../pictures/croqueMonsieur2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="..\pictures\croqueMonsieur2.png" alt="Palmiers" />
                        </Link>
                        <h2>Croque Monsieur</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )

};