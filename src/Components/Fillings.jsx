import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function Fillings() {
    return (
        <div className="saltyPicture">
            <div className="display-grid">
                <Card>
                    <CardContent>
                        <Link className="listLink" href="recheios/caramelo_morango">
                            <img className="listPicture" src=".\pictures\CarameloMorangoo.png" alt="caramelo morango" />
                            <h2>Caramelo morango </h2>
                        </Link>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link className="listLink" href="recheios/recheio_limao">
                            <img className="listPicture" src=".\pictures\recheioLimão.png" alt="recheio limão" />
                            <h2>Recheio limão </h2>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}