import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function Fillings() {
    return (
        <div className="saltyPicture">
            <div className="display-grid">
                <Card>
                    <CardContent>
                        <Link className="listLink" href="recheio_limao">
                            <img className="listPicture" src=".\pictures\recheioLimão.png" alt="recheio limão" />
                            <h2>Recheio limão </h2>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}