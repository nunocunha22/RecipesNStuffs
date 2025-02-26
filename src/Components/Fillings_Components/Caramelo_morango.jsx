import React from "react";
import { Card, CardContent, Link } from "@mui/material";

export default function CarameloMorango() {
    return (
        <div className="margin-top-32">
            <h1>Receita de caramelo de morango</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                    <h3>&#45;&#62; para aproximadamente 50 a 60 macarrons</h3>
                    <h3>&#45;&#62; para aproximadamente 1 camada de bolo</h3>
                </li>
                <li>200gr de morango (congelados ou frescos)</li>
                <li>180gr de açucar</li>
                <li>&#189; pacote de natas para bater (100ml)</li>
                <li>70g de manteiga sem sal</li>
                <li>30gr de chocolate branco</li>
                <li>5g de agar-agar ou 15gr de gelatina sem sabor em pó (opcional! Só uso agar-agar ou gelatina quando é para rechear macarrons. Se for para recheio de bolo não uso! )</li>
                <li>Ácido cítrico (opcional)</li>
            </ul>
            <ul>
                <li>
                    <h2>Preparação</h2>
                </li>
                <ol>
                    <li>Triturar os morangos e coar para que fique um sumo sem pedaços. Reservar</li>
                    <li>Numa panela levar o açúcar para caramelizar.</li>
                    <li>Quando já estiver praticamente todo derretido, colocar a manteiga e as natas para aquecer ligeiramente. Verter sobre o caramelo. Cuidado com os salpicos!! Mexer bem até incorporar tudo muito bem</li>
                    <li>Verter o sumo de morango e misture bem para não ficar em grumos</li>
                    <li>Acrescentar o chocolate branco e o ácido cítrico</li>
                    <li>Acrescentar o agar-agar e deixar ferver uns 2min, mexendo de vez em quando.</li>
                    <li>Filmar e colocar no frigorifico por umas 8h</li>
                    <li>Quando for usar para rechear macarrons, aquecer em banho-maria e usar</li>
                    <li>Para uma textura mais cremosa para rechear bolos também se pode bater a mistura. Atenção que o caramelo irá ficar com uma cor mais clara</li>
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
                        <Link href="../pictures/carameloMorango1.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="..\pictures\carameloMorango1.png" alt=" Caramelo Morango " />
                        </Link>
                        <h2>Caramelo Morango</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="../pictures/carameloMorango2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="..\pictures\carameloMorango2.png" alt="Caramelo Morango batido" />
                        </Link>
                        <h2>Caramelo Morango batido</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};