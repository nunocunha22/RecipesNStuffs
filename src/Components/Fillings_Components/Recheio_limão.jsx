import React from "react";
import { Card, CardContent, Link } from "@mui/material";

export default function RecheioLimao() {
    return (
        <div className="margin-top-32">
            <h1>Receita de recheio de limão</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                    <h3>&#45;&#62; para aproximadamente 50 a 60 macarrons</h3>
                    <h3>&#45;&#62; para aproximadamente 1 camada de bolo</h3>
                </li>
                <li>1 pacote de natas para bater (200ml)</li>
                <li>150g de chocolate branco</li>
                <li>50g de manteiga sem sal</li>
                <li>100ml de sumo de limão</li>
                <li>corante amarelo a gosto (opcional)</li>
                <li>6g de agar-agar ou 20gr de gelatina sem sabor em pó (opcional! Só uso agar-agar ou gelatina quando é para rechear macarrons. Se for para recheio de bolo não uso! )</li>
            </ul>
            <ul>
                <li>
                    <h2>Preparação</h2>
                </li>
                <ol>
                    <li>Numa panela juntar as natas e o chocolate branco e levar para derreter em fogo médio-baixo</li>
                    <li>Misturar tudo com uma espátula de forma a obter uma mistura homogénea.</li>
                    <li>Acrescentar o sumo de limão e voltar a misturar tudo muito bem</li>
                    <li>Acrescentar o agar-agar ou a gelatina e mexer muito bem até dissolver tudo e não ficarem grumos</li>
                    <li>Quando começar a levantar fervura, contar cerca de 2 minutos e retirar do lume. Não esquecer de ir mexendo de vez em quando para não agarrar à panela e queimar</li>
                    <li>Fora do lume, adicionar a manteiga (e o corante, se pretender usar) e misturar até se dissolver completamente</li>
                    <li>Colocar a mistura num recipiente e cobrir com papel aderente em contacto com o recheio.</li>
                    <li>Deixar repousar no frigorifico por 6h, no minimo</li>
                    <li>Depois desse tempo, se não se tiver usado agar-agar ou gelatina, está pronto a ser usado como recheio de bolo</li>
                    <li>Se tiver sido usado agar-agar ou gelatina, a mistura deverá estar bem rija! Ótimo, é mesmo isso que se quer.</li>
                    <li>Para ser usado como recheio de macarrons, por exemplo, teremos de colocar a mistura no micro-ondas por fases de 10 a 15s de cada vez até ficar totalmente líquida. Mexer entre fases!</li>
                    <p className="nota"><strong>Nota: </strong> geralmente só levo ao micro-ondas metade ou 1/4 do recheio de cada vez. Tendo em conta que volta a endurecer bastante rápido.</p>
                    <li>Pode ser usado um saco de confeitar ou uma colher ou outra coisa que dê jeito para rechear</li>
                </ol>
            </ul>
            <ul>
                <li>
                    <h2>Galeria de imagens</h2>
                </li>
            </ul>
        </div>
    )
};