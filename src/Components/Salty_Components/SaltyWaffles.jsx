import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function SaltyWaffles() {
    return (

        <div className="margin-top-32">
            <h1>Receita de Waffles de bacon e queijo</h1>
            <ul>
                <li>
                    <h2>Ingredientes</h2>
                    <h3>&#45;&#62; para 12 a 15 waffles</h3>
                </li>
                <ul>
                    <li>3 ovos M</li>
                    <li>270ml de leite</li>
                    <li>240gr de farinha</li>
                    <li>150gr de manteiga derretida</li>
                    <li>10gr de fermento em pó</li>
                    <li>150gr de bacon</li>
                    <li>150gr de queijo ralado</li>
                    <li>Sal e pimenta a gosto</li>
                </ul>
            </ul>
            <ul>
                <li>
                    <h2>Preparação</h2>
                </li>
                <ol>
                    <li>Cortar o bacon em cubinhos. Numa frigideira, salteá-los até ficarem dourados. Retirar da frigideira e reservar. </li>
                    <li>Num recipiente, colocar o leite, a manteiga derretida, os ovos, o sal e a pimenta. Misturar tudo. </li>
                    <li>Acrescentar o farinha e o fermento. Misturar até obter um liquido homogéneo.</li>
                    <li>Acrescentar o queijo e os cubos de bacon (Pode também optar-se por triturar o bacon). Misturar muito bem.</li>
                    <li>Nesta fase a mistura já pode ser utilizada, no entanto eu recomendo colocá-la cerca de 1h no frigorífico antes de usá-la.</li>
                    <li>Se tiver uma máquina de waffles, pode colocar a quantidade de massa que pretende e máquina faz tudo por nós. Se não tiver pode usar uma frigideira e cozinhar os waffles da maneira e do tamanho que desejar.</li>
                    <li>Bom apetite!</li>
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
                        <Link href="/pictures/SaltyWaffles1.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\SaltyWaffles1.png" alt="Waffles na máquina de waffles" />
                        </Link>
                        <h2>Waffles na máquina de waffles</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link href="/pictures/SaltyWaffles2.png" rel="noopener noreferrer">
                            <img className="listPictureComponents" src="\pictures\SaltyWaffles2.png" alt="Waffles na frigideira" />
                        </Link>
                        <h2>Waffles na frigideira</h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )

};