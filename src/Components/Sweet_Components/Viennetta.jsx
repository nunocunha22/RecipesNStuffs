import React from "react";
import { Card, CardContent, Link } from "@mui/material";

export default function Vienneta() {
    return (
        <div className="margin-top-32">
            <h1>Receita de Vienneta</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                </li>
                <ul>
                    <li>3 pacotes bem frios de natas para bater(600ml)</li>
                    <li>1 lata de leite condensado (entre 370gr e 397gr)</li>
                    <li>250gr de chocolate (negro ou leite)</li>
                    <li>Aroma de baunilha (opcional)</li>
                    <li>raspas de chocolate e/ou cacau em pó para decorar</li>
                </ul>

            </ul>
            <ul>
                <li>
                    <h2>Preparação</h2>
                </li>
                <ol>
                    <li>Derreter o chocolate (no micro-ondas, em banho-maria ou diretamente numa panela).</li>
                    <li>Uma vez derretido, forrar um tabuleiro com papel vegetal. Verter o chocolate e espalhar de forma regular por toda a superfície do tabuleiro.</li>
                    <p className="nota"><strong>Nota: para facilitar, eu coloco uma folha de papel vegetal por cima e com um rolo de massa ou um raspador de massa vou alisando o chocolate</strong>.</p>
                    <li>Reservar o chocolate para que endureça. </li>
                    <li>Num recipiente bater as natas até ficarem bem firmes. Acrescentar o aroma de baunilha aos poucos, se for o caso, e voltar a bater até ficar bem incorporado.</li>
                    <li>Acrescentar o leite condensado e incorporar delicadamente, sem bater, para não "quebrar" as natas.</li>
                    <li>Nesta altura o chocolate já não deve estar líquido. Cortar placas de chocolate do tamanho da forma que se pretende usar.</li>
                    <li>Uma vez cortadas levar as placas ao congelador para acabarem de endurecer (cerca de 30min).</li>
                    <li>Passado esse tempo, comecar a montar a Viennetta. Forrar a forma com papel vegetal. Colocar uma placa de chocolate e uma camada do creme por cima. Repetir até não haver creme nem chocolate.</li>
                    <li>Levar ao congelador cerca de 3h.</li>
                    <li>Quando for servir poderá decorar com o chocolate e/ou o cacau em pó</li>
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
                        <Link href="/pictures/Viennetta1.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="/pictures/Viennetta1.png" alt="Viennetta" />
                        </Link>
                        <h2>Viennetta</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/Viennetta2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="/pictures/Viennetta2.png" alt="Viennetta" />
                        </Link>
                        <h2>Viennetta</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};